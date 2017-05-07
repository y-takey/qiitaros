import _ from 'lodash';
import React from 'react';
import Page from './Page';
import LineChart from './LineChart';

export default class CharPage extends React.Component {
  dataSummary(sortField, precision) {
    return _.reduce(_.sortBy(this.props.data, sortField), (result, rec)=> {
      let key = "" + _.round(rec[sortField], precision) + "字";
      let entry = result[key] || (result[key] = { post: 0, stock: 0 });
      entry.post += 1;
      entry.stock += rec["stock_count"];
      return result;
    }, {})
  }

  chartData(sorfField, precision) {
    const data = this.dataSummary(sorfField, precision);
    return {
      labels: _.keys(data),
      datasets: [
        {
          label: "投稿数",
          fill: false,
          yAxisID: "y-axis-0",
          borderColor: "#03A9F4",
          data: _.map(_.values(data), "post")
        },
        {
          label: "平均ストック数",
          fill: false,
          yAxisID: "y-axis-1",
          borderColor: "#FF9800",
          data: _.map(_.values(data), (rec)=> _.round(rec.stock / rec.post, 1))
        }
      ]
    }
  }

  render() {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          { "id": "y-axis-0", position: "left" },
          { "id": "y-axis-1", position: "right" }
        ]
      }
    }

    return (
      <Page title="文字数から見るQiita" {...this.props}>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            <div className="mdl-card mdl-shadow--2dp" style={ {width: "100%" }}>
              <div className="mdl-card__title mdl-card--expand" style={{ padding: "30px", height: "250px" } }>
                <LineChart data={this.chartData("title_char_count", -1)} options={chartOptions} />
              </div>
              <div className="mdl-card__actions mdl-card--border q-card__actions">
                タイトル文字数と投稿数・平均ストック数
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            <div className="mdl-card mdl-shadow--2dp" style={ {width: "100%"} }>
              <div className="mdl-card__title mdl-card--expand" style={{ padding: "30px", height: "250px" } }>
                <LineChart data={this.chartData("body_char_count", -3)} options={chartOptions} />
              </div>
              <div className="mdl-card__actions mdl-card--border q-card__actions">
                本文文字数と投稿数・平均ストック数
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
