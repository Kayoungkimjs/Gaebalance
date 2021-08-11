import React from 'react';
import './Dropdown.scss';

class Dropdown extends React.Component {
  render() {
    return (
      <div className="dropdownFilter">
        <select
          value={this.value}
          onChange={this.props.handleFilter}
          className="displayOptions"
        >
          <option>전체보기</option>
          <option value="newest">신상품순</option>
          <option value="stock">인기순</option>
          <option value="low-price">낮은 가격순</option>
          <option value="high-price">높은 가격순</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
