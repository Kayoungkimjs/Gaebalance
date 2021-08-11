import React from 'react';
import './OrderListBox.scss';

class OrderListBox extends React.Component {
  render() {
    console.log(this.props.orderList);
    return (
      <div className="orderList">
        <div className="orderName">
          {this.props.productInfo.color}/{this.props.orderList.size}/
          {this.props.productInfo.style_code}
        </div>
        <div className="orderQuantity">수량 선택</div>
        <div className="orderPrice">
          {Math.floor(this.props.productInfo.price).toLocaleString('ko-KR')}원
        </div>
        <div>
          <i className="fas fa-times"></i>
        </div>
      </div>
    );
  }
}

export default OrderListBox;
