import React from 'react';
import { ReactDOM } from 'react';
import '../Checkbox/Checkbox.scss';

class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = {
      colors_id: [],
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

  handleChange(e) {
    const { checked, value } = this.state;
    this.props.colorSelect(e.target.value);
    // this.setState(prevState => ({
    //   checkedItems: prevState.checkedItems.set(checked, value),
    // }));
  }
  handleClick = () => {};

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="row">
        <label className="ftit">
          Color
          <em className="compulsory">필수</em>
        </label>
        <div className="fdata">
          <form className="chk" onSubmit={this.handleSubmit}>
            {categories.map(item => (
              <li className="chkList">
                <label>
                  <input
                    className="ipChekbox"
                    type="checkbox"
                    value={item.id}
                    onChange={this.handleChange}
                    // onClick={this.handleClick}
                  />{' '}
                  {item.value}
                </label>
              </li>
            ))}
          </form>
        </div>
      </div>
    );
  }
}
export default Checkbox;
