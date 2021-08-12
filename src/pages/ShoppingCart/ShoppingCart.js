import React from 'react';
import '../ShoppingCart/ShoppingCart.scss';
import AddCart from './AddCart';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartList: [],
      totalPrice: 0,
    };
  }
  componentDidMount() {
    console.log('전');
    localStorage.setItem(
      'access_token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Aw-lnT18gQg9ATCZOzWJWfsnUV0LmZVy9qlSRYaTrH0'
    );

    fetch('http://10.58.0.115:8000/carts', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.response);
        this.setState({
          cartList: this.state.cartList.concat(response.response.cart),
          totalPrice: response.response.total_price,
        });
        console.log(this.state.cartList);
      });
    console.log('후');
  }
  render() {
    console.log(this.state);
    return (
      <article className="shoppingCart">
        <div className="shoppingCartWarp">
          <section className="shoppingCartHeader">
            <div className="shoppingCartTitle">장바구니</div>
            <div className="shoppingCartProgress">
              <div className="currentCart">장바구니</div>
              <i className="fas fa-angle-right"></i>
              <div className="currentComplete">주문완료</div>
            </div>
          </section>
          <section className="shoppingListWrap">
            <div className="shoppingListBox">
              <div className="shoppingListTitle">
                총 <span className="productCount">1</span> 개
              </div>
              <div className="shoppingList">
                <table className="shoppingListTable">
                  <colgroup>
                    <col className="colW2" />
                    <col className="colW3" />
                    <col className="colW4" />
                    <col className="colW5" />
                  </colgroup>
                  <thead className="shoppingListTableHead">
                    <tr className="shoppingListTableRow">
                      <th>상품/옵션 정보</th>
                      <th>수량</th>
                      <th>주문금액</th>
                    </tr>
                  </thead>
                  {this.state.cartList.map((item, index) => {
                    return <AddCart key={index} cartInfo={item} />;
                  })}
                </table>

                {/* <div className="shoppingListTable">
                  <input type="checkbox" />
                  <div className="optionInfo">상품/옵션 정보</div>
                  <div className="amount">수량</div>
                  <div className="price">주문금액</div>
                </div> */}
                <div className="shoppingListProduct"></div>
              </div>
            </div>
            <div className="paymentWrap">
              <div className="paymentBox">
                <div className="priceInfo">
                  <div className="priceBox">
                    <div>주문금액</div>
                    <div>금액</div>
                  </div>
                  <div className="delvPriceBox">
                    <div>배송료</div>
                    <div>금액</div>
                  </div>
                </div>
                <div className="totalPriceBox">
                  <div>
                    <p className="orderPrice">결제 예정 금액</p>
                    <p className="delvPrice">주문금액 + 배송료</p>
                    <p className="totalPrice">
                      {(
                        Math.floor(this.state.totalPrice / 1000) * 1000
                      ).toLocaleString('ko-KR')}{' '}
                      원
                    </p>
                  </div>
                </div>
              </div>
              <div className="orderButtonBox">
                <button className="allOrderBtn">전체 상품 주문하기</button>
              </div>
            </div>
          </section>
        </div>
      </article>
    );
  }
}

export default ShoppingCart;
