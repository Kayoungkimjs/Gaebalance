/* eslint-disable no-undef */
import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './Join.scss';

class Join extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone_number: '',
      email: '',
      password: '',
    };
  }

  handleJoin = () => {
    // const { name, value } = this.state;
    // this.setState({
    //   [name]: value,
    // });
    // console.log(this.state.name);
    fetch(`${API.JOIN}`, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        gender: 1,
        birth_date: '2000-11-24',
        phone_number: this.state.phone_number,
        email: this.state.email,
        password: this.state.password,
        address: '서울특별시 강서구 공항호',
        size_id: 1,
        colors_id: [3, 6, 7],
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });
  };

  render() {
    return (
      <main className="con_join">
        <h2>SIGN UP</h2>
        <div className="title_box">
          <h3>회원정보</h3>
        </div>
        <div className="form">
          <div className="row">
            <label className="ftit">
              이름
              <em className="compulsory">필수</em>
            </label>
            <div className="fdata">
              <input
                type="text"
                maxLength="5"
                title="이름"
                onChange={e => {
                  this.setState({
                    name: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <label className="ftit">성별</label>
            <div className="fdata">
              <span className="select_box">
                <select name="zender" title="성별">
                  <option value>선택</option>
                  <option value="0">남성</option>
                  <option value="1">여성</option>
                </select>
              </span>
            </div>
          </div>
          <div className="row">
            <label className="ftit">
              생년월일
              <em className="compulsory">필수</em>
            </label>
            <div className="fdata">
              <input
                type="date"
                name="year"
                title="생년월일"
                className="birth"
              />
            </div>
          </div>
          <div className="row">
            <label className="ftit">
              휴대폰번호
              <em className="compulsory">필수</em>
            </label>
            <div className="fdata">
              <input
                type="tel"
                title="두 번째 번호"
                placeholder="-없이 숫자만 입력"
                maxLength="13"
                onChange={e => {
                  this.setState({
                    phone_number: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <label className="ftit">
              이메일
              <em className="compulsory">필수</em>
            </label>
            <div className="fdata">
              <input
                type="email"
                maxLength="25"
                title="이메일 아이디"
                className="ip_text"
                onChange={e => {
                  this.setState({
                    email: e.target.value,
                  });
                }}
              />

              <span className="select_box">
                <select id="emailDomain" title="이메일 도메인 선택">
                  <option value="직접입력">직접입력</option>
                  <option value="naver.com">naver.com</option>
                  <option value="hanmail.net">hanmail.net</option>
                  <option value="nate.com">nate.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="hotmail.com">hotmail.com</option>
                  <option value="yahoo.com">yahoo.com</option>
                </select>
              </span>
            </div>
          </div>
          <div className="row">
            <label className="ftit">
              비밀번호
              <em className="compulsory">필수</em>
            </label>
            <div className="fdata">
              <input
                type="password"
                maxLength="12"
                title="비밀번호"
                onChange={e => {
                  this.setState({
                    password: e.target.value,
                  });
                }}
              />
              <em className="ip_info">
                8~12자 이내 영문,숫자,특수문자(""-+/\:; 제외)
              </em>
            </div>
          </div>
          <div className="row">
            <label className="ftit">
              비밀번호 확인
              <em className="compulsory">필수</em>
            </label>
            <div className="fdata">
              <input type="password" maxLength="12" title="비밀번호" />
            </div>
          </div>
          <div className="row">
            <label className="ftit">주소</label>
            <div className="fdata">
              <input
                type="text"
                title="주소"
                className="block"
                maxLength="120"
              />
            </div>
          </div>
          <div className="row">
            <label className="ftit">
              사이즈
              <em className="compulsory">필수</em>
            </label>
            <div className="fdata">
              <span className="select_box">
                <select id="size" title="사이즈">
                  <option value="선택">선택</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
              </span>
            </div>
          </div>
          <Checkbox />
        </div>

        <div className="btn">
          <button onClick={this.handleJoin}>회원 가입</button>
        </div>
      </main>
    );
  }
}
export default Join;
