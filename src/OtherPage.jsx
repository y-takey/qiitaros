import React from 'react';
import Page from './Page';

export default class OtherPage extends React.Component {
  render() {
    return (
      <Page title="適当に見るQiita" {...this.props}>
        hoge
      </Page>
    )
  }
}
