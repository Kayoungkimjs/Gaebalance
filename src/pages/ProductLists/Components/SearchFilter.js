import React from 'react';
// import SearchFilterData from './SearchFilterData';
import './SearchFilter.scss';

class SearchFilter extends React.Component {
  render() {
    const { item, color, size, price } = this.props;
    console.log(item);
    return (
      <div className="filterWrap">
        <div className="itemFilter">
          <button
            onClick={this.props.handleToggle}
            type="button"
            className="toggleBtn"
            value="item"
          >
            ITEM
          </button>
          <button
            onClick={this.props.handleToggle}
            type="button"
            className="toggleBtn"
            value="color"
          >
            COLOR
          </button>
          <button
            onClick={this.props.handleToggle}
            type="button"
            className="toggleBtn"
            value="size"
          >
            SIZE
          </button>
          <button
            onClick={this.props.handleToggle}
            type="button"
            className="toggleBtn"
            value="price"
          >
            PRICE
          </button>
          {/* {toggleMenu && toggleIndex === idx && (
            <filterChoice
            categorylist = {categories.categories[idx].category}
            categoryIdx = {categories.categories[idx]}
            /> */}
        </div>
        {item && (
          <ul className="toggleMenu" value="item">
            <li>
              <input value="item" name="choices" type="checkbox" />
              상의
            </li>
            <li>
              <input value="item" name="choices" type="checkbox" />
              하의
            </li>
            <li>
              <input value="item" name="choices" type="checkbox" />
              아우터
            </li>
            <li>
              <input value="item" name="choices" type="checkbox" />
              비치웨어
            </li>
          </ul>
        )}
        {color && (
          <ul className="toggleMenu" value="color">
            <li>
              <input value="color" name="choices" type="checkbox" />
              red
            </li>
            <li>
              <input value="color" name="choices" type="checkbox" />
              orange
            </li>
            <li>
              <input value="color" name="choices" type="checkbox" />
              yellow
            </li>
            <li>
              <input value="color" name="choices" type="checkbox" />
              green
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default SearchFilter;
