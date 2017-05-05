import React from 'react';
import '../node_modules/material-design-lite/material.min.js';
import '../styles/index.scss';
const json = require('../data/tag_summary_2017-03-01_2017-04-30.json');

const oddContentStyle = {
  backgroundColor: "#ffffff"
}

export default class App extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header mdl-layout__header--waterfall q-header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">
              Qiitaros
            </span>
            <div className="mdl-layout-spacer"></div>
            <div className="">
            </div>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#datetime">日時</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#user">ユーザ</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#tag">タグ</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#char">文字数</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#other">その他</a>
            </nav>
          </div>
        </header>

        <main className="mdl-layout__content">
          <div className="page-content">
          <a name="top"></a>
          <a name="datetime"></a>
          <div className="mdl-typography--text-center q-page-content" style={oddContentStyle}>
            <div className="mdl-typography--display-1-color-contrast">日時から見るQiita</div>

            <a href="#user">
              <button className="mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect q-next-button">
                <i className="material-icons">expand_more</i>
              </button>
            </a>
          </div>

          <a name="user"></a>
          <div className="mdl-typography--text-center q-page-content">
            <div className="mdl-typography--display-1-color-contrast">ユーザから見るQiita</div>

            <a href="#tag">
              <button className="mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect q-next-button">
                <i className="material-icons">expand_more</i>
              </button>
            </a>
            <a href="#datetime">
              <button className="mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect q-prev-button">
                <i className="material-icons">expand_less</i>
              </button>
            </a>
          </div>

          <a name="tag"></a>
          <div className="mdl-typography--text-center q-page-content" style={oddContentStyle}>
            <div className="mdl-typography--display-1-color-contrast">タグから見るQiita</div>

            <div className="mdl-typography--display-2 mdl-typography--font-thin">Some text</div>
            <p className="mdl-typography--headline mdl-typography--font-thin">
              any text.
            </p>

            <a href="#char">
              <button className="mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect q-next-button">
                <i className="material-icons">expand_more</i>
              </button>
            </a>
            <a href="#user">
              <button className="mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect q-prev-button">
                <i className="material-icons">expand_less</i>
              </button>
            </a>
          </div>

          <a name="char"></a>
          <div className="mdl-typography--text-center q-page-content">
            <div className="mdl-typography--display-1-color-contrast">文字数から見るQiita</div>

            <div className="mdl-typography--display-3 mdl-typography--font-light">Font light</div>
            <p className="mdl-typography--headline mdl-typography--font-thin">
              font thin.
            </p>

            <a href="#other">
              <button className="mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect q-next-button">
                <i className="material-icons">expand_more</i>
              </button>
            </a>
            <a href="#tag">
              <button className="mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect q-prev-button">
                <i className="material-icons">expand_less</i>
              </button>
            </a>
          </div>

          <a name="other"></a>
          <div className="android-more-section q-page-content" style={oddContentStyle}>
            <div className="android-section-title mdl-typography--display-1-color-contrast">More from Android</div>
            <div className="android-card-container mdl-grid">
              <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
                <div className="mdl-card__media">
                  Here9
                </div>
                <div className="mdl-card__title">
                   <h4 className="mdl-card__title-text">Get going on Android</h4>
                </div>
                <div className="mdl-card__supporting-text">
                  <span className="mdl-typography--font-light mdl-typography--subhead">Four tips to make your switch to Android quick and easy</span>
                </div>
                <div className="mdl-card__actions">
                   <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                     Make the switch
                     <i className="material-icons">chevron_right</i>
                   </a>
                </div>
              </div>

              <a href="#char">
                <button className="mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect q-prev-button">
                  <i className="material-icons">expand_less</i>
                </button>
              </a>
            </div>
          </div>

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
        </div>
        </main>
      </div>
    )
  }
}
