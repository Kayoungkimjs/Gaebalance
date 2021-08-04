import React from 'react';
import './ProductCard.scss';

class ProductCard extends React.Component {
  render() {
    return (
      <main>
        <div className="productCardWrap">
          <div className="productCardGroup">
            <img
              className="productImage"
              alt="Product image"
              src="./images/kayoung/img-product.png"
            ></img>
            <div className="cardDesc">
              <strong>더위를 개발라버리는 Cool 티셔츠</strong>
              <span className="starRating">
                <img
                  alt="One star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Two star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Three star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Four star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Half star"
                  src="./images/kayoung/Icon/ic-half-star.png"
                ></img>
              </span>
              <span aria-label="responser"> (16) </span>
              <strong>50,000원</strong>
            </div>
          </div>
          <div className="productCardGroup">
            <img
              className="productImage"
              alt="Product image"
              src="./images/kayoung/img-product2.jpeg"
            ></img>
            <div className="cardDesc">
              <img
                className="bestTag"
                alt="best product"
                src="./images/kayoung/Icon/tag-best.png"
              />
              <strong>연아도 입은 개발란스 팬츠</strong>
              <span className="starRating">
                <img
                  alt="One star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Two star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Three star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Four star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Half star"
                  src="./images/kayoung/Icon/ic-half-star.png"
                ></img>
              </span>
              <span aria-label="responser"> (16) </span>
              <strong>50,000원</strong>
            </div>
          </div>
          <div className="productCardGroup">
            <img
              className="productImage"
              alt="Product image"
              src="./images/kayoung/img-product.png"
            ></img>
            <div className="cardDesc">
              <img
                className="bestTag"
                alt="Best product"
                src="./images/kayoung/Icon/tag-best.png"
              />
              <img
                className="newTag"
                alt="New product"
                src="./images/kayoung/Icon/tag-new.png"
              />
              <strong>여름을 개발라버릴 비치웨어</strong>
              <span className="starRating">
                <img
                  alt="One star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Two star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Three star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Four star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Half star"
                  src="./images/kayoung/Icon/ic-half-star.png"
                ></img>
              </span>
              <span aria-label="responser"> (16) </span>
              <strong>50,000원</strong>
            </div>
          </div>
          <div className="productCardGroup">
            <img
              className="productImage"
              alt="Product image"
              src="./images/kayoung/img-product2.jpeg"
            ></img>
            <div className="cardDesc">
              <img
                className="onlineOnlyTag"
                alt="best product"
                src="./images/kayoung/Icon/tag-onlineonly.png"
              />
              <strong>온라인을 개발라버릴 냉장고 팬츠</strong>
              <span className="starRating">
                <img
                  alt="One star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Two star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Three star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Four star"
                  src="./images/kayoung/Icon/ic-star.png"
                ></img>
                <img
                  alt="Half star"
                  src="./images/kayoung/Icon/ic-half-star.png"
                ></img>
              </span>
              <span aria-label="responser"> (16) </span>
              <strong>50,000원</strong>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ProductCard;
