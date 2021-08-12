import React from 'react';
import { API } from '../../config';
// import { withRouter } from 'react-router';
import './Login.scss';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }
  goToMain = () => {
    const { id, pw } = this.state;

    fetch(`${API.LOGIN}`, {
      method: 'POST',
      body: JSON.stringify({ email: id, password: pw }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          console.log(response.access_token);
          localStorage.setItem('token', response.access_token);
          this.props.history.push('/Nav');
        } else {
          alert('아이디 / 비밀번호를 다시 입력해주세요');
        }
        // this.props.history.push('./Main');
      });
  };

  handleidInput = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    console.log();
    return (
      <main className="loginContainer">
        <div className="contents">
          <div className="login">
            <h2>LOG IN</h2>
            <div className="inp">
              <input
                type="text"
                placeholder="아이디"
                className="id"
                id="id"
                onChange={this.handleidInput}
              />
              <input
                type="password"
                placeholder="비밀번호"
                className="pw"
                id="pw"
                onChange={this.handleInput}
              />

              <div className="check">
                <input type="checkbox" name="" id="box" />
                <label>아이디 저장하기</label>
              </div>
            </div>

            <button
              className={
                this.state.id.includes('@') && this.state.pw.length > 4
                  ? 'login-btn-active'
                  : 'login-btn'
              }
              onClick={this.goToMain}
              name="button"
              type="button"
            >
              로그인
            </button>
          </div>
        </div>
      </main>
    );
  }
}
export default Login;
