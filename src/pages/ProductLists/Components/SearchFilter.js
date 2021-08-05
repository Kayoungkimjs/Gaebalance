import React from 'react';
import './SearchFilter.scss';

class SearchFilter extends React.Component {
  render() {
    return (
      <>
        <div className="filterWrap">
          <ul className="searchFilter">
            <li>
              <button type="button" name="item" id="item">
                ITEM
              </button>
            </li>
            <li>
              <button type="button" name="item" id="item">
                COLOR
              </button>
            </li>
            <li>
              <button type="button" name="item" id="item">
                SIZE
              </button>
            </li>
            <li>
              <button type="button" name="item" id="item">
                PRICE
              </button>
            </li>
          </ul>
        </div>
        <div className="filterGroup">
          <div className="listOn" id="filterItem">
            <p className="hidden">ITEM</p>
          </div>
          <div className="box">
            <div className="choices">
              <form action="" method="GET">
                <input
                  type="checkbox"
                  name=""
                  id="item"
                  value=""
                  className=""
                />
                <label for="item">상의</label>
                <input type="checkbox" name="" id="item" value="" />
                <label for="item"> 하의 </label>
                <input type="checkbox" name="" id="item" value="" />
                <label for="item">아우터</label>
                <input type="checkbox" name="" id="item" value="" />
                <label for="item">비치 웨어</label>
              </form>
            </div>
            <div className="cancleChoices">
              <button type="button">전체 취소</button>
            </div>
          </div>
          <div className="filterStack">
            <div className=""> </div>
            <div className="">
              <button type="button">적용 하기</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchFilter;
