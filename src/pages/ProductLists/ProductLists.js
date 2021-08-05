import React from 'react';
import { withRouter } from 'react-router';
import SearchFilter from './Components/SearchFilter';
import ProductCard from './Components/ProductCard';
import './ProductLists.scss';

class ProductLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productBox: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.2.75:8000/product?price=1&price=2')
      .then(response => response.json())
      .then(data => {
        this.setState({
          productBox: data.response,
        });
      });
  }

  render() {
    console.log(this.state.productBox);
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
        <div className="productCardWrap">
          {this.state.productBox.map(product => {
            return (
              <ProductCard
                key={product.id}
                image={product.image_url}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </div>
        <div className="showmore">
          <button type="button">더 보기 (30)</button>
          <img alt="Category icon" src="./images/kayoung/icon/ic-bottom.png" />
        </div>
      </div>
    );
  }
}

export default ProductLists;
