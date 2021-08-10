import React from 'react';
// import { withRouter } from 'react-router';
import './Login.scss';
class Login extends React.Component {
  render() {
    return (
      <main className="loginContainer">
        <div className="contents">
          <div className="login">
            <h2>LOG IN</h2>
            <div className="inp">
              <input type="text" placeholder="아이디" className="id" />
              <input type="password" placeholder="비밀번호" className="pw" />

              <div className="check">
                <input type="checkbox" name="" id="box" />
                <label>아이디 저장하기</label>
              </div>
            </div>

            <button>로그인</button>
          </div>
        </div>
      </main>
    );
  }
}
export default Login;
