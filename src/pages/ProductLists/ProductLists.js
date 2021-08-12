import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
      item: [],
      color: [],
      size: [],
      price: [],
      value: '전체보기',
      tabItem: false,
      tabColor: false,
      tabSize: false,
      tabPrice: false,
      index: 1,
      uri: API.PRODUCT + '?',
    };
  }

  componentDidMount() {
    fetch(this.state.uri.concat('', 'limit=28&offset=0'))
      .then(response => response.json())
      .then(data => {
        this.setState({
          productBox: data.response,
        });
      });
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps.location.search !== this.props.location.search) {
      fetch(`${API.PRODUCT}${this.props.location.search}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            productBox: data.response,
          });
        });
    }
  }

  handleShowMore = count => {
    this.state.index += count;
    const LIMIT = 28;
    fetch(
      this.state.uri.concat('', `&limit=${LIMIT * this.state.index}&offset=0`)
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          productBox: data.response,
        });
      });
  };

  handleFilter = e => {
    const { value } = e.target;
    fetch(this.state.uri + `&sort=${value}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ productBox: data.response });
      });
  };

  handleToggle = e => {
    const { value } = e.target;
    const { tabItem, tabColor, tabSize, tabPrice } = this.state;
    if (value === 'item') {
      this.setState({
        tabItem: !tabItem,
      });
    }
    if (value === 'color') {
      this.setState({
        tabColor: !tabColor,
      });
    }
    if (value === 'size') {
      this.setState({
        tabSize: !tabSize,
      });
    }
    if (value === 'price') {
      this.setState({
        tabPrice: !tabPrice,
      });
    }
  };

  selectChoice = e => {
    const { value, id } = e.target;
    let URI = this.state.uri;
    let arr = [];
    if (value === 'item') {
      if (this.state.item.indexOf(id) > -1) {
        this.state.item = this.state.item.splice(
          this.state.item.indexOf(id),
          1
        );
      } else {
        arr.push(id);
        this.state.item = this.state.item.concat(arr);
      }
      console.log(this.state.item);
      this.state.item.forEach(each => {
        if (URI[URI.length - 1] !== '?') {
          URI = URI + '&';
        }
        URI = URI.concat(each.split('_')[0] + '=' + each.split('_')[1]);
      });
      this.state.uri = URI;
      console.log(URI);
    }

    if (value === 'color') {
      let arr = [];
      arr.push(id);
      this.state.color = this.state.color.concat(arr);
      this.state.color.forEach(each => {
        URI = URI + '&';
        URI = URI.concat(each.split('_')[0] + '=' + each.split('_')[1]);
      });
      this.state.uri = URI;
      console.log(URI);
    }

    if (value === 'size') {
      let arr = [];
      arr.push(id);
      this.state.size = this.state.size.concat(arr);
      this.state.size.forEach(each => {
        if (URI[URI.length - 1] !== '?') {
          URI = URI + '&';
        }
        URI = URI.concat(each.split('_')[0] + '=' + each.split('_')[1]);
      });
      this.state.uri = URI;
      console.log(URI);
    }

    if (value === 'price') {
      let arr = [];
      arr.push(id);
      this.state.price = this.state.price.concat(arr);
      this.state.price.forEach(each => {
        if (URI[URI.length - 1] !== '?') {
          URI = URI + '&';
        }
        URI = URI.concat(each.split('_')[0] + '=' + each.split('_')[1]);
      });
      this.state.uri = URI;
      console.log(URI);
    }

    fetch(this.state.uri.concat('', '&limit=28&offset=0'))
      .then(response => response.json())
      .then(data => {
        this.setState({
          productBox: data.response,
        });
      });
  };

  render() {
    const { productBox, handleShowMore } = this.state;
    return (
      <>
        <div className="productListWrap">
          <h1 className="category">비치웨어</h1>
          <SearchFilter
            handleToggle={this.handleToggle}
            selectChoice={this.selectChoice}
            item={this.state.tabItem}
            color={this.state.tabColor}
            size={this.state.tabSize}
            price={this.state.tabPrice}
          />
          <Dropdown handleFilter={this.handleFilter} />
          <div className="productCardWrap">
            {this.state.productBox.map(product => {
              return (
                <Link to={`/productDetail/${product.id}`} className="link">
                  <ProductCard
                    key={product.id}
                    image={product.image_url}
                    name={product.name}
                    price={product.price}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          onClick={() => handleShowMore(1)}
          className="showMoreBtn"
        >
          더 보기
        </button>
      </>
    );
  }
}

export default ProductLists;
