import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="android-footer mdl-mega-footer">
        <div className="mdl-mega-footer--top-section">
          <div className="mdl-mega-footer--left-section">
          </div>
          <div className="mdl-mega-footer--right-section">
            <a className="mdl-typography--font-light" href="#top">
              Back to Top
              <i className="material-icons">expand_less</i>
            </a>
          </div>
        </div>

        <div className="mdl-mega-footer--middle-section">
          <p className="mdl-typography--font-light"></p>
        </div>

        <div className="mdl-mega-footer--bottom-section">
        </div>
      </footer>
    )
  }
}
