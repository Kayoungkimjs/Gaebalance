import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Category from './Category';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <header className="navHead">
        <div className="topMenu">
          <div className="inner">
            <img
              src="https://image.nbkorea.com/NBRB_PC/common/btn_mynb.png"
              alt=""
              className="mynb"
            />
            <img
              src="https://image.nbkorea.com/NBRB_PC/common/btn_made.png"
              alt=""
              className="made"
            />
            <ul className="clearfix">
              <li>매장찾기</li>
              <li>공지사항</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className="gnb">
          <div className="inner">
            <h1 className="logo">
              <Link to="/">Gaebalance</Link>
            </h1>
            <Category />
            <div className="customer">
              <div className="topSearch">
                <a href="#">검색</a>
              </div>
              <div className="mymenu">
                <a href="#" className="hidden">
                  페이지
                </a>
                <Link to="Login" className="log">
                  로그인
                </Link>
                <Link to="Join" className="join">
                  회원가입
                </Link>
              </div>
              <div className="cart">
                <Link to={`/shoppingCart`} href="#" className="shop">
                  <span className="blind">장바구니</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Nav;
