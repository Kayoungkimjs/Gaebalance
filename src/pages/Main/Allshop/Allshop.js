import React from 'react';
import './Allshop.scss';

class Allshop extends React.Component {
  render() {
    return (
      <div className="shopContainer">
        <h3 className="shopTitle">Shop All</h3>
        <ul className="categoryList">
          <li>
            <img
              src="https://image.nbkorea.com/NBRB_Site/20210430/NB20210430142300922001.jpg"
              alt="의류"
            />
            <div className="shopMen">
              <span className="men">Men</span>
            </div>
          </li>
          <li>
            <img
              src="https://image.nbkorea.com/NBRB_Site/20210430/NB20210430142319459001.jpg"
              alt="의류"
            />
            <div className="shopMen">
              <span className="men">Women</span>
            </div>
          </li>
          <li>
            <img
              src="https://image.nbkorea.com/NBRB_Site/20210622/NB20210622090817592001.jpg"
              alt="의류"
            />
            <div className="shopMen">
              <span className="men">Kid</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default Allshop;
