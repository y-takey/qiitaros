import React from 'react';
import HeatCalendar from 'react-heat-calendar';
import Page from './Page';

export default class DatePage extends React.Component {
  render() {
    return (
      <Page title="日時から見るQiita" {...this.props}>
        <HeatCalendar
          beginDate={new Date('2017-01-01')}
          endDate={new Date('2017-12-31')}
          data={this.props.data}
          dateField="created_at"
        />
      </Page>
    )
  }
}
