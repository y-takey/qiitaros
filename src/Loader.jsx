import React from 'react';

import Page from './Page';

export default class Loader extends React.Component {
  render() {
    return (
      <Page title={this.props.title}>
        <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active" />
        <br/>
        Loading...
      </Page>
    )
  }
}
