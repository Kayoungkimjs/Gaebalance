import React from 'react';
import './AddCart.scss';
import { Route, Link } from 'react-router-dom';

class AddCart extends React.Component {
  sendCartId = e => {
    console.log(e.target.id);
    this.props.deleteCart(e.target.id);
  };

  render() {
    return (
      <tbody className="tableBody">
        <tr>
          <td className="tableProductInfoBox">
            <div className="shoppingListImage">
              <img src={this.props.cartInfo.image} alt="" />
            </div>
            <div className="tableProductInfo">
              <a className="cartInfoName" href="">
                {this.props.cartInfo.name}
              </a>

              <p className="sizeColor">
                {this.props.cartInfo.color} / {this.props.cartInfo.size}
              </p>
              {/* <p className="price">가격</p> */}
            </div>
          </td>
          <td className="tableProductAmount">
            <div className="orderQuantity">
              <button className="minusBtn" value="minus">
                -
              </button>

              <input
                className="orderQuantityInput"
                type="text"
                readOnly="true"
                value={this.props.cartInfo.count}
              />
              <button className="plusBtn" value="plus">
                +
              </button>
            </div>
          </td>
          <td className="tableProductPrice">
            <div className="tableProductPriceValue">
              {(
                Math.floor(this.props.cartInfo.price / 1000) * 1000
              ).toLocaleString('ko-KR')}{' '}
              원
            </div>
          </td>
          <td className="tableButton">
            <div className="tableButtonWrap">
              <button className="orderBtn">주문하기</button>
              <button
                id={this.props.cartInfo.cart_id}
                className="deleteBtn"
                onClick={this.sendCartId}
              >
                삭제하기
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default AddCart;
