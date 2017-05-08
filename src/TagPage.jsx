import _ from 'lodash';
import React from 'react';
import Page from './Page';
import Loader from './Loader';
import BarChart from './BarChart';

const title = "タグから見るQiita";
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

export default class TagPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: true };
  }

  componentDidMount() {
    this.setState({
      loading: false,
      data: {
        post: this.chartData("post_num", "投稿数"),
        stock: this.chartData("stock_count", "ストック数"),
      }
    });
  }

  chartData(sortField, label) {
    const ranker = _.reverse(_.takeRight(_.sortBy(this.props.tagData, sortField), 5));
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
      <Page title={title} {...this.props}>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            <div className="mdl-card mdl-shadow--2dp" style={ {width: "100%"}}>
              <div className="mdl-card__title mdl-card--expand" style={{ padding: "30px", height: "250px" } }>
                <BarChart data={post} options={chartOptions} />
              </div>
              <div className="mdl-card__actions mdl-card--border q-card__actions">
                投稿数上位タグ(5位まで)
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            <div className="mdl-card mdl-shadow--2dp" style={ {width: "100%"}}>
              <div className="mdl-card__title mdl-card--expand" style={{ padding: "30px", height: "250px" } }>
                <BarChart data={this.chartData("stock_count", "ストック数")} options={chartOptions} />
              </div>
              <div className="mdl-card__actions mdl-card--border q-card__actions">
                ストック数上位タグ(5位まで)
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
