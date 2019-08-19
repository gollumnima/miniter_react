import React from "react";
import Form from "./Form";
import "./Form.scss";
import "./Login.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="login_container">
        <div className="form_wrap">
          <Form word="아이디" space="비밀번호" />
        </div>
        <button className="login_btn"></button>
      </div>
    );
  }
}

export default Login;
