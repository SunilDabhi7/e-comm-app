import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userLogin } from "../Actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      msg: "",
      loginFailed: "",
    };
  }

  handleUserNameField = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handlePasswordField = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    const { users } = this.props.shop;
    users.map((user) => {
      if (user.username === username && user.password === password) {
        this.props.dispatch(userLogin(user.userId));
        console.log("user Authenticated");
        this.setState({ msg: "Logged In Successfully!", loginFailed: false });
      } else {
        this.setState({
          msg: "Email/Password is incorrect, Try again!",
          loginFailed: true,
        });
      }
    });
    // console.log(this.state);
  };

  render() {
    const { loginFailed, msg } = this.state;
    // console.log("active user id", this.props.shop);
    return (
      <div className="login-page">
        <div>
          <h2>Login</h2>
        </div>
        <div className={loginFailed ? "auth-msg-failed" : null}>{msg}</div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Username*"
            onChange={this.handleUserNameField}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password*"
            onChange={this.handlePasswordField}
          />
        </div>
        <div className="password-help">
          <div>
            <input type="checkbox" />
            <label> Remember me</label>
          </div>
          <div>Forgot your Password?</div>
        </div>
        <div className="login-submit-btn" onClick={this.handleLogin}>
          Log in
        </div>
        <p>Don't have an account?</p>
        <Link to="/signup" className="goto-signup-btn">
          <div>Signup</div>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shop: state.shop,
  };
}

export default connect(mapStateToProps)(Login);
