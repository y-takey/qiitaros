import React from 'react';

export default class Page extends React.Component {
  nextBtn() {
    if (!this.props.next) return;

    return (
      <a href={`#${this.props.next}`}>
        <button className="mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect q-next-button">
          <i className="material-icons">expand_more</i>
        </button>
      </a>
    )
  }

  prevBtn() {
    if (!this.props.prev) return;

    return (
      <a href={`#${this.props.prev}`}>
        <button className="mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect q-prev-button">
          <i className="material-icons">expand_less</i>
        </button>
      </a>
    )
  }

  render() {
    return (
      <div>
      <a name={this.props.name}></a>
      <div className="mdl-typography--text-center q-page-content" style={this.props.extStyle}>
        <div className="mdl-typography--display-1-color-contrast">{this.props.title}</div>
        {this.props.children}
        {this.nextBtn()}
        {this.prevBtn()}
      </div>
      </div>
    )
  }
}
