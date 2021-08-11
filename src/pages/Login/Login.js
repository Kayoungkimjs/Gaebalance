import React from 'react';
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

    if (id.includes('@') && pw.length > 4) {
      fetch('http://10.58.5.112:8000/users/login', {
        method: 'POST',
        body: JSON.stringify({ email: id, password: pw }),
      })
        .then(response => response.json())
        .then(result => {
          this.props.history.push('./Main');
        });
    }
  };

  handleIdInput = event => {
    this.setState({ id: event.target.value });
  };
  handlePwInput = event => {
    this.setState({ pw: event.target.value });
  };

  render() {
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
                onChange={this.handleIdInput}
              />
              <input
                type="password"
                placeholder="비밀번호"
                className="pw"
                onChange={this.handlePwInput}
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
