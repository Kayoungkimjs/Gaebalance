import React from 'react';
import { withRouter } from 'react-router';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <header>
        <div className="top_menu">
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
              <a href="#">Gaebalance</a>
            </h1>
            <div className="menu">
              <ul className="clearfix">
                <li className="nav">
                  <a href="#" className="hover">
                    MEN
                  </a>
                  <div className="category_box">
                    <div className="inner">
                      <div className="depth">
                        <strong className="tit">상의</strong>
                        <ul>
                          <li>
                            <a href="#">전체</a>
                          </li>
                          <li>
                            <a href="#">긴팔</a>
                          </li>
                          <li>
                            <a href="#">반팔</a>
                          </li>
                        </ul>
                      </div>
                      <div className="depth">
                        <strong className="tit">하의</strong>
                        <ul>
                          <li>
                            <a href="#">전체</a>
                          </li>
                          <li>
                            <a href="#">긴바지</a>
                          </li>
                          <li>
                            <a href="#">반바지</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav">
                  <a href="#" className="hover">
                    WOMEN
                  </a>
                </li>
              </ul>
            </div>
            <div className="customer">
              <div className="top_search">
                <a href="#">검색</a>
              </div>
              <div className="mymenu">
                <a href="#" className="hidden">
                  페이지
                </a>
                <a href="#" className="log">
                  로그인
                </a>
                <a href="#" className="join">
                  회원가입
                </a>
              </div>
              <div className="cart">
                <a href="#" className="shop">
                  <span className="blind">장바구니</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Nav;
