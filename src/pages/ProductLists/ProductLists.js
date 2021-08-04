import React from 'react';
import { withRouter } from 'react-router';
import SearchFilter from './Components/SearchFilter';
import ProductCard from './Components/ProductCard';
import './ProductLists.scss';

class ProductLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="productListWrap">
        <header>
          <h1 className="category">비치웨어</h1>
          <SearchFilter />
          <div className="dropdownFilter">
            <select className="displayOptions">
              <option value="전체보기">전체보기</option>
              <option value="신상품순">신상품순</option>
              <option value="인기순">인기순</option>
              <option value="낮은 가격순">낮은 가격순</option>
              <option value="높은 가격순">높은 가격순</option>
            </select>
          </div>
        </header>
        <ProductCard />
        <div className="showmore">
          <button type="button">더 보기 (30)</button>
          <img alt="Category icon" src="./images/kayoung/icon/ic-bottom.png" />
        </div>
      </div>
    );
  }
}

export default ProductLists;
