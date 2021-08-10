import React from 'react';
import { withRouter } from 'react-router';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <main className="container">
        <div className="slide_menu">
          <img
            src="https://image.nbkorea.com/NBRB_Site/20210716/NB20210716100731945001.jpg"
            alt=""
          />
        </div>
        <div className="gbnow"></div>
        <div className="shopall"></div>
      </main>
    );
  }
}

export default Main;
