import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export function TabContainer() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export class Dashboard extends Component {
  render() {
    const { users, activeUserId, isLoggedIn } = this.props.shop;
    let name = isLoggedIn ? users[activeUserId].name : "";
    return (
      <div className="dashboard">
        <p>
          Hello <span style={{ fontWeight: 600 }}>{name}</span>
        </p>
        <p style={{ marginTop: 10 }}>
          From your account dashboard you can view your Recent Orders, manage
          your shipping and billing addesses and edit your password and account
          details
        </p>
      </div>
    );
  }
}

export class Orders extends Component {
  render() {
    return (
      <div>
        <h2>Orders</h2>
      </div>
    );
  }
}

export class Addresses extends Component {
  render() {
    return (
      <div>
        <h3>
          The following addresses will be used on the checkout page by default.
        </h3>
        <div className="addresses">
          <div>
            <h3>Billing Address</h3>
            <p>Madison Riiz</p>
            <p>123 Happy Street</p>
            <p>Mumbai</p>
            <p>8001</p>
            <p>India</p>
          </div>
          <div>
            <h3>Shipping Address</h3>
            <p>Madison Riiz</p>
            <p>123 Happy Street</p>
            <p>Mumbai</p>
            <p>8001</p>
            <p>India</p>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export class Payment extends Component {
  render() {
    return <h2>Payment</h2>;
  }
}

export class Account extends Component {
  render() {
    const { users, activeUserId, isLoggedIn } = this.props.shop;
    let name = isLoggedIn ? users[activeUserId].name : "";
    let username = isLoggedIn ? users[activeUserId].username : "";
    let password = isLoggedIn ? users[activeUserId].password : "";
    return (
      <div>
        <h2>Account Details</h2>
        <div className="acc-dtls">
          <p>
            <span style={{ fontWeight: 600 }}>Name:</span> <span> {name}</span>
          </p>

          <p>
            <span style={{ fontWeight: 600 }}>Username:</span>{" "}
            <span> {username}</span>
          </p>
          <p>
            <span style={{ fontWeight: 600 }}>password:</span>{" "}
            <span> {password}</span>
          </p>
        </div>
        <div className="acct-dtls-change-btn">Edit Details</div>
      </div>
    );
  }
}
