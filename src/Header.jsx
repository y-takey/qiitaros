import React from 'react';

export default class Header extends React.Component {
  menuItems() {
    const items = this.props.menuItems;
    return Object.keys(items).map((key) => {
      return( <a className="mdl-navigation__link" key={key} href={ '#' + key }>{items[key]}</a>)
    });
  }

  render() {
    return (
      <header className="mdl-layout__header mdl-layout__header--waterfall q-header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">
            Qiitaros
          </span>
          <div className="mdl-layout-spacer"></div>
          <div className="">
          </div>
          <nav className="mdl-navigation">
            {this.menuItems()}
          </nav>
        </div>
      </header>
    )
  }
}
