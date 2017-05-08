import React from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/sortable';
import pivottable from 'pivottable';
import '../node_modules/pivottable/dist/pivot.css'

import Page from './Page';

const containerStyle = {
  width: "100%",
  overflowX: "scroll",
  padding: "20px",
  backgroundColor: "#ffffff"
};

export default class OtherPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  };

  componentDidMount() {
    this.renderPivot(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.renderPivot(nextProps);
  }

  renderPivot(props) {
    $(this.refs.container).pivotUI(
      this.props.data,
      {
        rows: ["year", "month", "day"],
        cols: ["hour"],
        aggregatorName: "Count",
        rendererName: "Heatmap",
        unusedAttrsVertical: false,
        hiddenAttributes: ["uuid", "title", "created_at", "tags"]
      }
    );
  }

  render() {
    return (
      <Page title="適当に見るQiita" {...this.props}>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col mdl-typography--text-left mdl-typography--headline mdl-typography--font-thin q-text">
            <div ref="container" style={containerStyle} ></div>
          </div>
        </div>
      </Page>
    )
  }
}
