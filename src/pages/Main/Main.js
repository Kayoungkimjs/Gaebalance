import React from 'react';
import { withRouter } from 'react-router';
import { ReactDOM } from 'react';
import Sslide from './Slide/Sslide';
import Gbnow from './Gbnow/Gbnow';
import Allshop from './Allshop/Allshop';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Sslide />
        <Gbnow />
        <Allshop />
      </div>
    );
  }
}

export default withRouter(Main);
