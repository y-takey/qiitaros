import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TopPage from './TopPage';
import DatePage from './DatePage';
import UserPage from './UserPage';
import TagPage from './TagPage';
import CharPage from './CharPage';
import OtherPage from './OtherPage';

const data = require('../data/post_summary_2017-03-01_2017-04-30.json');
const tagData = require('../data/tag_summary_2017-03-01_2017-04-30.json');
const beginDate = "2017-03-01";
const endDate = "2017-04-30";
const basicProps = { data, beginDate, endDate }
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
            <TopPage {...basicProps} name="top" next="date" extStyle={oddContentStyle}/>
            <DatePage {...basicProps} name="date" next="user" prev="top"/>
            <UserPage {...basicProps} name="user" next="tag" prev="date" extStyle={oddContentStyle}/>
            <TagPage {...basicProps} tagData={tagData} name="tag" next="char" prev="user"/>
            <CharPage {...basicProps} name="char" next="other" prev="tag" extStyle={oddContentStyle}/>
            <OtherPage {...basicProps} name="other"  prev="char"/>
          </div>

          <Footer />
        </main>
      </div>
    )
  }
}
