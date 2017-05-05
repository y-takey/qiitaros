import React from 'react';
import Page from './Page';

export default class CharPage extends React.Component {
  render() {
    return (
      <Page title="文字数から見るQiita" {...this.props}>
        hoge
      </Page>
    )
  }
}
