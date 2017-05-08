import _ from 'lodash';
import React from 'react';
import Page from './Page';
import Loader from './Loader';
import BarChart from './BarChart';

const title = "ユーザから見るQiita";
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

export default class DatePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: true };
  }

  componentDidMount() {
    const data = this.summaryData()
    this.setState({
      loading: false,
      data: {
        post: this.chartData(data, "post", "投稿数"),
        stock: this.chartData(data, "stock", "ストック数"),
      }
    });
  }

  summaryData() {
     const data = _.reduce(this.props.data, (result, rec)=> {
      let key = rec.user;
      let entry = result[key] || (result[key] = { post: 0, stock: 0 });
      entry.post += 1;
      entry.stock += rec["stock_count"];
      return result;
    }, {})
    return _.map(data, (v, k)=> {
      v.name = k;
      return v
    });
  }

  chartData(data, sortField, label) {
    const ranker = _.reverse(_.takeRight(_.sortBy(data, sortField), 5));
    return {
      labels: _.map(ranker, "name"),
      datasets: [
        {
          label: label,
          backgroundColor: "#03A9F4",
          data: _.map(ranker, sortField)
        }
      ]
    }
  }

  render() {
    if (this.state.loading) return <Loader title={title} />

    const { post, stock } = this.state.data;

    return (
      <Page title="ユーザから見るQiita" {...this.props}>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            <div className="mdl-card mdl-shadow--2dp" style={ {width: "100%"}}>
              <div className="mdl-card__title mdl-card--expand" style={{ padding: "30px", height: "250px" } }>
                <BarChart data={post} options={chartOptions} />
              </div>
              <div className="mdl-card__actions mdl-card--border q-card__actions">
                投稿数上位ユーザ(5位まで)
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            <div className="mdl-card mdl-shadow--2dp" style={ {width: "100%"}}>
              <div className="mdl-card__title mdl-card--expand" style={{ padding: "30px", height: "250px" } }>
                <BarChart data={stock} options={chartOptions} />
              </div>
              <div className="mdl-card__actions mdl-card--border q-card__actions">
                ストック数上位ユーザ(5位まで)
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
