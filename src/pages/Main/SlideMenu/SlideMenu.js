import React from 'react';
import { Link } from 'react-router-dom';
import './SlideMenu.scss';

class SlideMenu extends React.Component {
  render() {
    return (
      <section className="slidemenu">
        <input type="radio" name="slide" id="slide01" checked />
        <input type="radio" name="slide" id="slide02" />
        <input type="radio" name="slide" id="slide03" />
        <div class="slidewrap">
          <ul class="slidelist">
            <li>
              <Link>
                <label for="slide03" class="left"></label>
                <img src="./images/main.jpg" alt="" />
                <label for="slide02" class="right"></label>
              </Link>
            </li>
          </ul>
        </div>
        <div className="txtbox">
          <p className="title">
            <span className="name">Classic Running 725</span>
            <span className="sub">Born to Run, Wear to Style</span>
          </p>
          <div className="btnWrap">
            <button className="white">자세히 보기</button>
            <button className="black">구매하기</button>
          </div>
        </div>
      </section>
    );
  }
}
export default SlideMenu;
