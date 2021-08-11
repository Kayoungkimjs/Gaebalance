import React from 'react';
import { withRouter } from 'react-router';
import SlideMenu from './SlideMenu/SlideMenu';
import Gbnow from './Gbnow/Gbnow';
import Allshop from './Allshop/Allshop';
import './Main.scss';

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

export default withRouter(Main);
