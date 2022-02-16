import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userSignup } from "../Actions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      signUpMsg: "",
      signUpFailed: "",
    };
  }

  handleNameField = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

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

  handleSubmit = () => {
    const { name, username, password } = this.state;
    const objectId = this.props.shop.users.length;
    const userDetails = {
      name,
      username,
      password,
      userId: objectId,
    };
    if (name === "" || username === "" || password === "") {
      this.setState({
        signUpMsg: "please, dont leave any field empty!",
        signUpFailed: true,
      });
    } else {
      this.props.dispatch(userSignup(userDetails));
      this.setState({
        signUpMsg: "Signed up successfully!",
        signUpFailed: false,
      });
    }
    console.log("addingNewUser", name, username, password, objectId);
  };

  render() {
    const { signUpFailed, signUpMsg } = this.state;
    // console.log("handleSubmit: ", this.state);
    return (
      <div className="login-page">
        <div>
          <h2>Signup</h2>
        </div>
        <div className={signUpFailed ? "auth-msg-failed" : "auth-msg-success"}>
          {signUpMsg}
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Name*"
            onChange={this.handleNameField}
          />
        </div>
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
        <div className="login-submit-btn" onClick={this.handleSubmit}>
          Signup
        </div>
        <p>Already have an account?</p>
        <Link className="goto-signup-btn" to="/login">
          <div>Log in</div>
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

export default connect(mapStateToProps)(Signup);
