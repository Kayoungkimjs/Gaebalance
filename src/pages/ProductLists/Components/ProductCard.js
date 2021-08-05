import React from 'react';
import './ProductCard.scss';

class ProductCard extends React.Component {
  render() {
    const { image, name, price } = this.props;
    return (
      <div className="productCardGroup">
        <img className="productImage" alt="Product image" src={image}></img>
        <div className="cardDesc">
          <strong>{name}</strong>
          <span className="starRating">
            <img alt="One star" src="./images/kayoung/Icon/ic-star.png"></img>
            <img alt="Two star" src="./images/kayoung/Icon/ic-star.png"></img>
            <img alt="Three star" src="./images/kayoung/Icon/ic-star.png"></img>
            <img alt="Four star" src="./images/kayoung/Icon/ic-star.png"></img>
            <img
              alt="Half star"
              src="./images/kayoung/Icon/ic-half-star.png"
            ></img>
          </span>
          <strong>{price.toLocaleString()}원</strong>
        </div>
      </div>
    );
  }
}

export default ProductCard;
