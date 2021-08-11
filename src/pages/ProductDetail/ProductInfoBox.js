import React from 'react';
import './ProductinfoBox.scss';

class ProductInfoBox extends React.Component {
  render() {
    return (
      <section className="productDetailBottom">
        <div className="productDetailNavBox">
          <div className="showProductDetail">
            <div>상세정보</div>
          </div>
          <div className="showProductReview">
            <div>상품리뷰</div>
          </div>
        </div>
        <div className="productInfoWrap">
          <div className="productInfoName">{this.props.info.name}</div>
          <div className="productInfoBox">
            <div className="productCode flex">
              <div>스타일코드</div>
              <div>{this.props.info.style_code}</div>
            </div>
            <div className="productColor flex">
              <div>컬러</div>
              <div>(30){this.props.info.color}</div>
            </div>
            <div className="productCountry flex">
              <div>제조국</div>
              <div>{this.props.info.origin}</div>
            </div>
            <div className="productionDay flex">
              <div>제조년월</div>
              <div>{this.props.info.manufacture_date}</div>
            </div>
            <div className="productFeature flex">
              <div>제품 특징</div>
              <div>{this.props.info.description}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductInfoBox;
