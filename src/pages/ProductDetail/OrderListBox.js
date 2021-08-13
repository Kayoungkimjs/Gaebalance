import React from 'react';
import './OrderListBox.scss';

class OrderListBox extends React.Component {
  deleteSend = e => {
    this.props.deleteOrder(e.target.id);
  };

  sendQuantity = e => {
    this.props.quantitySet(e.target.value, e.target.id);
  };

  render() {
    console.log(this.props.orderList);
    return (
      <div className="orderList">
        <div className="orderName">
          {this.props.productInfo.color}/{this.props.orderList.size}/
          {this.props.productInfo.style_code}
        </div>
        <div className="orderQuantity">
          <button
            className="minusBtn"
            id={this.props.orderList.id}
            onClick={this.sendQuantity}
            value="minus"
          >
            -
          </button>

          <input
            className="orderQuantityInput"
            type="text"
            value={this.props.orderList.quantity}
            readOnly="true"
          />
          <button
            className="plusBtn"
            id={this.props.orderList.id}
            onClick={this.sendQuantity}
            value="plus"
          >
            +
          </button>
        </div>
        <div className="orderPrice">
          {(
            Math.floor(this.props.productInfo.price / 1000) * 1000
          ).toLocaleString('ko-KR')}
          원
        </div>
        <div>
          <i
            onClick={this.deleteSend}
            id={this.props.orderList.id}
            className="fas fa-times"
          ></i>
        </div>
      </div>
    );
  }
}

export default OrderListBox;
