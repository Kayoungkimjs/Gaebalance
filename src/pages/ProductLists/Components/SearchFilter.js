import React from 'react';
// import './data/SearchFilter.js';
import './SearchFilter.scss';

class SearchFilter extends React.Component {
  render() {
    const { id, content } = this.props;
    return (
      <>
        <div className="filterWrap">
          <ul className="searchFilter">
            <li>
              <button
                onClick={this.props.toggleModal}
                type="button"
                name="item"
                id="item"
              >
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
        {this.modelOn && (
          <div className="filterGroup">
            <div className="item" id="filterItem">
              <p className="hidden">ITEM</p>
            </div>
            <div className="box">
              <div className="choices">
                <input
                  type="checkbox"
                  id="item01"
                  name="itemIndex"
                  value="item"
                />
                <label for="item01">상의</label>
                <input
                  type="checkbox"
                  id="item02"
                  name="itemIndex"
                  value="item"
                />
                <label for="item02"> 하의 </label>
                <input
                  type="checkbox"
                  id="item03"
                  name="itemIndex"
                  value="item"
                />
                <label for="item03">아우터</label>
                <input
                  type="checkbox"
                  id="item04"
                  name="itemIndex"
                  value="item"
                />
                <label for="item04">비치 웨어</label>
              </div>
              <div className="cancleChoices">
                <button type="button">전체 취소</button>
              </div>
            </div>
            <div className="filterStack">
              <div className="choiceList"> </div>
              <button type="button" className="applyBtn">
                적용 하기
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default SearchFilter;
