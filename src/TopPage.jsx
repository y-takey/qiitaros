import _ from 'lodash';
import React from 'react';
import HeatCalendar from 'react-heat-calendar';
import Page from './Page';
import Loader from './Loader';

const verticalAlign = {
  verticalAlign: "middle"
}

export default class TopPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { loading: true };
  }

  componentDidMount() {
    const user = this.userCount();
    const post = this.props.data.length;
    const stock = _.sumBy(this.props.data, "stock_count");

    this.setState({
      loading: false,
      data: {
        user: user,
        post: post,
        postAvg: _.round((post / user), 2),
        stock: stock,
        stockAvg: _.round((stock / post), 2)
      }
    });
  }

  userCount() {
    return _.uniq(_.map(this.props.data, "user")).length
  }

  render() {
    if (this.state.loading) return <Loader title="" />

    const { user, post, postAvg, stock, stockAvg } = this.state.data;

    return (
      <Page title="" {...this.props}>
        <HeatCalendar
          beginDate={new Date('2017-01-01')}
          endDate={new Date('2017-12-31')}
          data={this.props.data}
          dateField="created_at"
        />
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--5-col mdl-cell--middle mdl-typography--text-right mdl-typography--subhead q-text">
            <span style={verticalAlign}>集計期間&nbsp;</span>
            <i  style={verticalAlign} className="material-icons">date_range</i>
          </div>
          <div className="mdl-cell mdl-cell--7-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            {this.props.beginDate} ~ {this.props.endDate}
          </div>
          <div className="mdl-cell mdl-cell--5-col mdl-cell--middle mdl-typography--text-right mdl-typography--subhead q-text">
            <span style={verticalAlign}>投稿ユーザ数&nbsp;</span>
            <i style={verticalAlign} className="material-icons">people</i>
          </div>
          <div className="mdl-cell mdl-cell--7-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            {user.toLocaleString("japan")}
          </div>
          <div className="mdl-cell mdl-cell--5-col mdl-cell--middle mdl-typography--text-right mdl-typography--subhead q-text">
            <span style={verticalAlign}>投稿数&nbsp;</span>
            <i style={verticalAlign} className="material-icons">description</i>
          </div>
          <div className="mdl-cell mdl-cell--7-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            {post.toLocaleString("japan")}
            <span className="mdl-typography--subhead">
              &nbsp;(ユーザ平均 { postAvg.toLocaleString("japan") })
            </span>
          </div>
          <div className="mdl-cell mdl-cell--5-col mdl-cell--middle mdl-typography--text-right mdl-typography--subhead q-text">
            <span style={verticalAlign}>ストック数&nbsp;</span>
            <i style={verticalAlign} className="material-icons">folder_special</i>
          </div>
          <div className="mdl-cell mdl-cell--7-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            {stock.toLocaleString("japan")}
            <span className="mdl-typography--subhead">
              &nbsp;(投稿平均 { stockAvg.toLocaleString("japan") })
            </span>
          </div>
        </div>
      </Page>
    )
  }
}
