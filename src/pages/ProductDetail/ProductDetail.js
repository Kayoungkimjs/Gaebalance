import React from 'react';
import '../ProductDetail/ProductDetail.scss';
import OrderListBox from './OrderListBox';
import ProductInfoBox from './ProductInfoBox';
import SizePicker from './SizePicker';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productInfoList: {},
      mainImage: '',
      selected: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.0.58:8000/products/3', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        this.setState({ productInfoList: result, mainImage: result.image_url });
      });
  }

  imgChange = e => {
    this.setState({
      mainImage: e.target.src,
    });
  };

  addSelected = value => {
    this.setState({
      selected: this.state.selected.concat({ size: value }),
    });
  };

  render() {
    return (
      <article className="productDetail">
        <div className="container">
          <section className="ProductDetailTop">
            <article className="imageBox">
              <div className="mainImage">
                <img src={this.state.mainImage} alt="mainImage" />
              </div>
              <div className="imageExpandBtn">
                <i className="fas fa-expand"></i>
                <div className="expandBtn">EXPAND VIEW</div>
              </div>
              <div className="imageList">
                {this.state.productInfoList.image_list?.map((item, index) => {
                  return (
                    <div key={index} className="imageListBox">
                      <img
                        src={item}
                        alt="신발 이미지"
                        onClick={this.imgChange}
                      />
                    </div>
                  );
                })}
              </div>
            </article>
            <article className="productOption">
              <div className="productHeader">
                <div className="productName">
                  {this.state.productInfoList.name}
                </div>
                <div className="productTag">
                  <img src="/images/ProductDetail/tag-best.png" alt="" />
                  <img src="/images/ProductDetail/tag-new.png" alt="" />
                </div>
                <div className="ProductRating">
                  <div className="starPoint">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="ratingBox">
                    <div>
                      <span className="currentRating">4.7</span> / 5
                      <span className="reviewCount"> (17)</span>
                    </div>

                    <div className="etcBtnBox">
                      <div className="heartBox">
                        <i className="far fa-heart"></i>
                      </div>
                      <i className="fab fa-facebook-f"></i>
                      <i className="fas fa-dove"></i>
                    </div>
                  </div>
                </div>
                <div className="priceBox">
                  <div>
                    <span className="productPrice">
                      {Math.floor(
                        this.state.productInfoList.price
                      ).toLocaleString('ko-KR')}
                      <span className="productWon">원</span>
                    </span>
                    <span className="productSavePoint">적립 9,540(6%)</span>
                  </div>
                </div>
              </div>
              <div className="selectOption">
                <div className="colorPickerBox">
                  <div className="colorPickerTitle">색상</div>
                  <div className="colorPicker">
                    <div>
                      <i
                        className="fas fa-circle fa-2x cWhite"
                        style={{ color: this.state.productInfoList.color }}
                      ></i>
                    </div>

                    {/* 생상 선택 추가 예정 */}
                  </div>
                </div>
                <div className="sizePickerBox">
                  <div className="sizePickerTitle">사이즈</div>
                  <div className="sizePicker">
                    <SizePicker
                      sizeName="S"
                      class="sizeS"
                      addSelected={this.addSelected}
                    />
                    <SizePicker
                      sizeName="M"
                      class="sizeM"
                      addSelected={this.addSelected}
                    />
                    <SizePicker
                      sizeName="L"
                      class="sizeL"
                      addSelected={this.addSelected}
                    />
                  </div>
                </div>
              </div>
              <div className="orderListBox">
                {this.state.selected.map((item, index) => {
                  return (
                    <OrderListBox
                      orderList={item}
                      productInfo={this.state.productInfoList}
                      size={this}
                      key={index}
                    />
                  );
                })}

                <div className="totalPriceBox">
                  <div className="totalPriceName">합계</div>
                  <div className="totalPrice">0 원</div>
                </div>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="purchaseBox">
                <button className="basketBtn">장바구니</button>
                <button className="purchaseBtn">구매하기</button>
                <div>
                  * 주문/배송/반품 등 일반 문의는 1:1 문의를 이용해 주시기
                  바랍니다.
                </div>
              </div>
              <div className="productNotifyBox">
                <div className="productNotify">원하는 옵션이 없으신가요?</div>
                <button className="productNotifyBtn">
                  <i className="far fa-bell "></i>입고 알림 신청하기
                </button>
              </div>
            </article>
          </section>
          <ProductInfoBox info={this.state.productInfoList} />
          <section></section>
        </div>
      </article>
    );
  }
}

export default ProductDetail;
