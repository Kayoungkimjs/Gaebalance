import React from 'react';
import '../ProductDetail/ProductDetail.scss';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgList: [
        {
          src: '/images/ProductDetail/mockProduct.png',
        },
        {
          src: '/images/ProductDetail/mockProduct.jpg',
        },
        {
          src: '/images/ProductDetail/mockProduct.jpg',
        },
        {
          src: '/images/ProductDetail/mockProduct.jpg',
        },
        {
          src: '/images/ProductDetail/mockProduct.jpg',
        },
      ],
    };
  }

  imgChange = e => {
    console.log(e.target);
  };

  render() {
    console.log(this.state.imgList);
    return (
      <article className="productDetail">
        <div className="container">
          <section className="ProductDetailTop">
            <article className="imageBox">
              <div className="mainImage">
                <img src="/images/ProductDetail/mockProduct.png" alt="" />
              </div>
              <div className="imageExpandBtn">
                <i class="fas fa-expand"></i>
                <span>EXPAND VIEW</span>
              </div>
              <div className="imageList">
                {this.state.imgList.map((item, index) => {
                  return (
                    <div>
                      <img
                        src={item.src}
                        alt="두번째 이미지"
                        key={index}
                        onClick={this.imgChange}
                      />
                    </div>
                  );
                })}
                {/* <div>
                <img src="" alt="첫번째 이미지" />
              </div>
              <div>
                <img
                  src="/images/ProductDetail/mockProduct.jpg"
                  alt="두번째 이미지"
                />
              </div>
              <div>
                <img src="" alt="세번째 이미지" />
              </div>
              <div>
                <img src="" alt="네번째 이미지" />
              </div>
              <div>
                <img src="" alt="닷번째 이미지" />
              </div> */}
              </div>
            </article>
            <article className="productOption">
              <div className="productHeader">
                <div className="productName">프레쉬폼x 1080 V11 (4E)</div>
                <div className="productTag">
                  <img src="/images/ProductDetail/tag-best.png" alt="" />
                  <img src="/images/ProductDetail/tag-new.png" alt="" />
                </div>
                <div className="ProductRating">
                  <div className="starPoint">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <div className="ratingBox">
                    <span className="currentRating">4.7</span> / 5
                    <span className="reviewCount"> (17)</span>
                  </div>
                </div>

                <div className="priceBox">
                  <div>
                    <span className="productPrice">159,000원</span>
                    <span className="productSavePoint">적립 9,540(6%)</span>
                  </div>
                </div>
              </div>
              <div className="selectOption">
                <div className="colorPickerBox">
                  <div className="colorPickerTitle">색상</div>
                  <div className="colorPicker">
                    <div>
                      <i class="fas fa-circle fa-2x cWhite"></i>
                    </div>
                    <div>
                      <i class="fas fa-circle fa-2x cGray"></i>
                    </div>
                    <div>
                      <i class="fas fa-circle fa-2x cBlack"></i>
                    </div>
                    <div>
                      <i class="fas fa-circle fa-2x cRed"></i>
                    </div>
                    <div>
                      <i class="fas fa-circle fa-2x cOrange"></i>
                    </div>
                    <div>
                      <i class="fas fa-circle fa-2x cYellow"></i>
                    </div>
                    <div>
                      <i class="fas fa-circle fa-2x cGreen"></i>
                    </div>
                    <div>
                      <i class="fas fa-circle fa-2x cWhite"></i>
                    </div>
                    <div>
                      <i class="fas fa-circle fa-2x cWhite"></i>
                    </div>

                    {/* 생상 선택 추가 예정 */}
                  </div>
                </div>
                <div className="sizePickerBox">
                  <div className="sizePickerTitle">사이즈</div>
                  <div className="sizePicker">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                  </div>
                </div>
              </div>
              <div className="orderListBox">
                <div className="orderList">
                  <div className="orderName">(30)Yellow/275/4E</div>
                  <div className="orderQuantity">수량 선택</div>
                  <div className="orderPrice">159,000 원</div>
                  <div>
                    <i class="fas fa-times"></i>
                  </div>
                </div>
                <div className="totalPriceBox">
                  <div className="totalPriceName">합계</div>
                  <div className="totalPrice">159,000 원</div>
                </div>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="purchaseBox">
                <button className="basketBtn">장바구니</button>
                <button className="purchaseBtn">구매하기</button>
              </div>
            </article>
          </section>
          <section className="ProductDetailBottom">
            <div className="ProductDetailNav"></div>
            <div>
              <div></div>
              <div></div>
            </div>
          </section>
        </div>
      </article>
    );
  }
}

export default ProductDetail;
