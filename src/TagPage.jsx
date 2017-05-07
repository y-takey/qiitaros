import _ from 'lodash';
import React from 'react';
import Page from './Page';
import BarChart from './BarChart';

export default class TagPage extends React.Component {
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
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    }

    return (
      <Page title="タグから見るQiita" {...this.props}>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            <div className="mdl-card mdl-shadow--2dp" style={ {width: "100%"}}>
              <div className="mdl-card__title mdl-card--expand" style={{ padding: "30px", height: "250px" } }>
                <BarChart data={this.chartData("post_num", "投稿数")} options={chartOptions} />
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
