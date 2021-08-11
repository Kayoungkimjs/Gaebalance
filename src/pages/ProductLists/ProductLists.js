import React from 'react';
import { withRouter } from 'react-router';
import { API } from '../../config';
import SearchFilter from './Components/SearchFilter';
import ProductCard from './Components/ProductCard';
import Dropdown from './Components/Dropdown';
import './ProductLists.scss';

class ProductLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productBox: [],
      value: '전체보기',
      tabItem: false,
      tabColor: false,
      tabSize: false,
      tabPrice: false,
    };
  }

  componentDidMount() {
    fetch(`${API.PRODUCT}?limit=28&offset=0`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          productBox: data.response,
        });
      });
  }

  handleFilter = e => {
    const { value } = e.target;
    fetch(`${API.PRODUCT}?sort=${value}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ productBox: data.response });
      });
  };

  handleToggle = e => {
    const { value } = e.target;
    console.log(value);
    const { tabItem, tabColor, tabSize, tabPrice } = this.state;
    if ({ value } === 'item') {
      this.setState({
        tabItem: !tabItem,
      });
    }
    if ({ value } === 'color') {
      this.setState({
        tabColor: !tabColor,
      });
    }
    if ({ value } === 'size') {
      this.setState({
        tabSize: !tabSize,
      });
    }
    if ({ value } === 'price') {
      this.setState({
        tabPrice: !tabPrice,
      });
    }
  };
  // const { tabItem, tabColor, tabSize, tabPrice } = this.state;
  // this.setState({
  //   tabItem: !tabItem,
  //   tabColor: !tabColor,
  //   tabSize: !tabSize,
  //   tabPrice: !tabPrice,
  // });

  //조건문을 추가해서 1번 버튼 클릭되면 filter1되고, 2번 클릭하면, filter2가 되고..

  render() {
    return (
      <div className="productListWrap">
        <h1 className="category">비치웨어</h1>
        <SearchFilter
          handleToggle={this.handleToggle}
          item={this.state.tabItem}
          color={this.state.tabColor}
          size={this.state.tabSize}
          price={this.state.tabPrice}
        />
        <Dropdown handleFilter={this.handleFilter} />
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
