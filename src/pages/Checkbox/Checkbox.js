import React from 'react';
import { ReactDOM } from 'react';
import '../Checkbox/Checkbox.scss';

const colors = [
  '빨강',
  '주황',
  '노랑',
  '초록',
  '파랑',
  '남색',
  '보라',
  '검정',
  '흰색',
  '회색',
];

class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        { id: 1, value: '빨강' },
        { id: 2, value: '주황' },
        { id: 3, value: '노랑' },
        { id: 4, value: '초록' },
        { id: 5, value: '파랑' },
        { id: 6, value: '남색' },
        { id: 7, value: '보라' },
        { id: 8, value: '검정' },
        { id: 9, value: '흰색' },
        { id: 10, value: '회색' },
      ],
      checkedItems: new Map(),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var isChecked = event.target.checked;
    var item = event.target.value;

    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
  // constructor(props) {
  //   super(props);
  //   this.state = { isCheckOn: true };
  // }

  // handleClick = () => {
  //   this.setState(state => ({
  //     isCheckOn: !state.isCheckOn,
  //   }));
  // };

  render() {
    return (
      <div className="row">
        <label className="ftit">
          Color
          <em className="compulsory">필수</em>
        </label>
        <div className="fdata">
          <form className="chk" onSubmit={this.handleSubmit}>
            {this.state.categories.map(item => (
              <li className="listr">
                <label>
                  <input
                    className="ip_chekbox"
                    type="checkbox"
                    value={item.id}
                    onChange={this.handleChange}
                  />{' '}
                  {item.value}
                </label>
              </li>
            ))}
          </form>
        </div>
        {/* <div className="fdata">
          <span className="chk">
            <input
              type="checkbox"
              name="color"
              className="ip_chekbox"
              value="0"
              onClick={this.handleClick}
            />
            <label>빨강</label>
          </span>
          <span className="chk">
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
          </span>
          <em className="ip_info">최대 3개 선택 가능</em>
        </div> */}
      </div>
    );
  }
}
export default Checkbox;
