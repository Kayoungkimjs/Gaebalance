import React from 'react';
import { ReactDOM } from 'react';
import '../Checkbox/Checkbox.scss';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCheckOn: true };
  }

  handleClick = () => {
    this.setState(state => ({
      isCheckOn: !state.isCheckOn,
    }));
  };

  render() {
    const array = ['빨강', '주황'];
    const arrayList = array.map;
    console.log(this.handleClick);
    return (
      <div className="row">
        <label className="ftit">
          Color
          <em className="compulsory">필수</em>
        </label>
        <div className="fdata">
          <span className="chk">
            <input
              type="checkbox"
              name="color"
              className="ip_chekbox"
              value="0"
              onClick={this.handleClick}
            />
            {arrayList}
            {/* <label>빨강</label> */}
          </span>
          {/* <span className="chk">
            <input
              type="checkbox"
              name="color"
              className="ip_chekbox"
              value="0"
              onClick={this.handleClick}
            />
            <label>주황</label>
          </span>
          <span className="chk">
            <input
              type="checkbox"
              name="color"
              className="ip_chekbox"
              value="0"
              onClick={this.handleClick}
            />
            <label>노랑</label>
          </span>
          <span className="chk">
            <input
              type="checkbox"
              name="color"
              className="ip_chekbox"
              value="0"
              onClick={this.handleClick}
            />
            <label>초록</label>
          </span>
          <span className="chk">
            <input
              type="checkbox"
              name="color"
              className="ip_chekbox"
              value="0"
              onClick={this.handleClick}
            />
            <label>파랑</label>
          </span>
          <span className="chk">
            <input
              type="checkbox"
              name="color"
              className="ip_chekbox"
              value="0"
              onClick={this.handleClick}
            />
            <label>남색</label>
          </span>
          <span className="chk">
            <input
              type="checkbox"
              name="color"
              className="ip_chekbox"
              value="0"
              onClick={this.handleClick}
            />
            <label>보라</label>
          </span>
          <span className="chk">
            <input
              type="checkbox"
              name="color"
              className="ip_chekbox"
              value="0"
              onClick={this.handleClick}
            />
            <label>검정</label>
          </span>
          <span className="chk">
            <input
              type="checkbox"
              name="color"
              className="ip_chekbox"
              value="0"
              onClick={this.handleClick}
            />
            <label>흰색</label>
          </span>
          <span className="chk">
            <input
              type="checkbox"
              name="color"
              className="ip_chekbox"
              value="0"
              onClick={this.handleClick}
            />
            <label>회색</label>
          </span> */}
          <em className="ip_info">최대 3개 선택 가능</em>
        </div>
      </div>
    );
  }
}
export default Checkbox;
