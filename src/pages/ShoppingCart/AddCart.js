import React from 'react';
import './AddCart.scss';
import { Route, Link } from 'react-router-dom';

class AddCart extends React.Component {
  render() {
    return (
      <tbody className="tableBody">
        <tr>
          <td className="tableProductInfoBox">
            <div className="shoppingListImage">
              <img src={this.props.cartInfo.image} alt="" />
            </div>
            <div className="tableProductInfo">
              <Link to="/productDetail/" className="link">
                <a className="cartInfoName" href="">
                  {this.props.cartInfo.name}
                </a>
              </Link>
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
              <button className="deleteBtn">삭제하기</button>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default AddCart;
