import React, { Component } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { TabContainer } from "./ProfileTabs";

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
            <NavLink
              to="/profile/dashboard"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "rgb(43, 12, 129)" : null,
                  color: isActive ? "white" : null,
                };
              }}
            >
              <div
                style={{
                  borderBottom: "1px solid rgb(211, 211, 211)",
                }}
              >
                <div>Dashboard</div>
                <div className="menu-icn">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1839/1839480.png"
                    alt="icn"
                  />
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/profile/orders"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "rgb(43, 12, 129)" : null,
                  color: isActive ? "white" : null,
                };
              }}
            >
              <div style={{ borderBottom: "1px solid rgb(211, 211, 211)" }}>
                <div>Orders</div>
                <div className="menu-icn">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
                    alt="icn"
                  />
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/profile/address"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "rgb(43, 12, 129)" : null,
                  color: isActive ? "white" : null,
                };
              }}
            >
              <div style={{ borderBottom: "1px solid rgb(211, 211, 211)" }}>
                <div>Addresses</div>
                <div className="menu-icn">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/927/927667.png"
                    alt="icn"
                  />
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/profile/payment"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "rgb(43, 12, 129)" : null,
                  color: isActive ? "white" : null,
                };
              }}
            >
              <div style={{ borderBottom: "1px solid rgb(211, 211, 211)" }}>
                <div>Paymenet Methods</div>
                <div className="menu-icn">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
                    alt="icn"
                  />
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/profile/account"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "rgb(43, 12, 129)" : null,
                  color: isActive ? "white" : null,
                };
              }}
            >
              <div style={{ borderBottom: "1px solid rgb(211, 211, 211)" }}>
                <div>Account Details</div>
                <div className="menu-icn">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                    alt="icn"
                  />
                </div>
              </div>
            </NavLink>
            <Link to="/">
              <div onClick={this.handleLogoutClick}>
                <div>Logout</div>
                <div className="menu-icn">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
                    alt="icn"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="menu-details">
            <TabContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
