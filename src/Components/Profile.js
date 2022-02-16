import React, { Component } from "react";

class Profile extends Component {
  handleLogoutClick = () => {
    this.props.handleLogout();
  };
  render() {
    return (
      <div className="profile">
        <div className="profile-header">
          <div>
            <h2>Account</h2>
          </div>
          <div>
            <span>Home &#62;</span>
            <span> Account</span>
          </div>
        </div>
        <div className="profile-info">
          <div className="profile-menu">
            <div style={{ borderBottom: "1px solid rgb(211, 211, 211)" }}>
              <div>Dashboard</div>
              <div className="menu-icn">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1839/1839480.png"
                  alt="icn"
                />
              </div>
            </div>
            <div style={{ borderBottom: "1px solid rgb(211, 211, 211)" }}>
              <div>Orders</div>
              <div className="menu-icn">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
                  alt="icn"
                />
              </div>
            </div>
            <div style={{ borderBottom: "1px solid rgb(211, 211, 211)" }}>
              <div>Addresses</div>
              <div className="menu-icn">
                <img
                  src="https://cdn-icons.flaticon.com/png/512/5654/premium/5654521.png?token=exp=1644835068~hmac=d5a44fd124a7e3a30291a9b0dc217bd8"
                  alt="icn"
                />
              </div>
            </div>
            <div style={{ borderBottom: "1px solid rgb(211, 211, 211)" }}>
              <div>Paymenet Methods</div>
              <div className="menu-icn">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
                  alt="icn"
                />
              </div>
            </div>
            <div style={{ borderBottom: "1px solid rgb(211, 211, 211)" }}>
              <div>Account Details</div>
              <div className="menu-icn">
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2102/premium/2102647.png?token=exp=1644835159~hmac=54328503677b03dc259fa3dbf43676fd"
                  alt="icn"
                />
              </div>
            </div>
            <div onClick={this.handleLogoutClick}>
              <div>Logout</div>
              <div className="menu-icn">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
                  alt="icn"
                />
              </div>
            </div>
          </div>
          <div className="menu-details"></div>
        </div>
      </div>
    );
  }
}

class Dashboard extends Component {
  render() {
    return <h2>Dashboard</h2>;
  }
}

class Orders extends Component {
  render() {
    return <h2>Orders</h2>;
  }
}

class Addresses extends Component {
  render() {
    return <h2>Addresses</h2>;
  }
}

class Payment extends Component {
  render() {
    return <h2>Payment</h2>;
  }
}

class Account extends Component {
  render() {
    return <h2>Account</h2>;
  }
}

export default Profile;
