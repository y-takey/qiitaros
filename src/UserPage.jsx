import _ from 'lodash';
import React from 'react';
import Page from './Page';
import BarChart from './BarChart';

export default class DatePage extends React.Component {
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
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    }
    const data = this.summaryData()
    return (
      <Page title="ユーザから見るQiita" {...this.props}>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            <div className="mdl-card mdl-shadow--2dp" style={ {width: "100%"}}>
              <div className="mdl-card__title mdl-card--expand" style={{ padding: "30px", height: "250px" } }>
                <BarChart data={this.chartData(data, "post", "投稿数")} options={chartOptions} />
              </div>
              <div className="mdl-card__actions mdl-card--border q-card__actions">
                投稿数上位ユーザ(5位まで)
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            <div className="mdl-card mdl-shadow--2dp" style={ {width: "100%"}}>
              <div className="mdl-card__title mdl-card--expand" style={{ padding: "30px", height: "250px" } }>
                <BarChart data={this.chartData(data, "stock", "ストック数")} options={chartOptions} />
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
