import React from 'react';
import Chart from 'chart.js'

export default class BarChart extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  };

  componentDidMount() {
    this.renderChart(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.chart) this.state.chart.destroy();

    this.renderChart(nextProps);
  }

  renderChart(props) {
    const ctx = this.refs.canvas.getContext("2d");
    this.state.chart = new Chart(ctx, {
      type: "bar", data: props.data, options: props.options || {}
    });
  }

  render() {
    return <canvas ref="canvas" width="300px" height="250px" />
  }
}
