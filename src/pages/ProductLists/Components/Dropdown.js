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
          <option value="전체보기">전체보기</option>
          <option value="신상품순">신상품순</option>
          <option value="인기순">인기순</option>
          <option value="낮은 가격순">낮은 가격순</option>
          <option value="높은 가격순">높은 가격순</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
