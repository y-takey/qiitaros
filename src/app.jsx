import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DatePage from './DatePage';
import UserPage from './UserPage';
import TagPage from './TagPage';
import CharPage from './CharPage';
import OtherPage from './OtherPage';

const data = require('../data/post_summary_2017-03-01_2017-04-30.json');
const menu = { date: "日時", user: "ユーザ", tag: "タグ", char: "文字数", other: "その他" }
const oddContentStyle = {
  backgroundColor: "#ffffff"
}

export default class App extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header menuItems={menu} />
        <main className="mdl-layout__content">
          <div className="page-content">
            <a name="top"></a>
            <DatePage data={data} name="date" next="user" extStyle={oddContentStyle}/>
            <UserPage data={data} name="user" next="tag" prev="date"/>
            <TagPage data={data} name="tag" next="char" prev="user" extStyle={oddContentStyle}/>
            <CharPage data={data} name="char" next="other" prev="tag"/>
            <OtherPage data={data} name="other"  prev="char" extStyle={oddContentStyle}/>
          </div>

          <Footer />
        </main>
      </div>
    )
  }
}
