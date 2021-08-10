import React from 'react';
import { withRouter } from 'react-router';
import './Main.scss';
import SlideMenu from './SlideMenu/SlideMenu';
import Gbnow from './Gbnow/Gbnow';
import Allshop from './Allshop/Allshop';
class Main extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <SlideMenu />
        <Gbnow />
        <Allshop />
      </div>
    );
  }
}

export default Main;
