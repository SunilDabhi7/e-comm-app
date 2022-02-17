import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";

import { Account, Addresses, Dashboard, Orders, Payment } from "./ProfileTabs";
import { userLogout, addToCart, removeItem } from "../Actions";
import { Navbar, Main, Footer, Login, Signup, Profile, Cart } from ".";

class App extends Component {
  handleLogout = () => {
    this.props.dispatch(userLogout());
    console.log("LOGGED OUT");
  };

  handleAddToCart = (item) => {
    this.props.dispatch(addToCart(item));
  };

  setCartVisibilityflag = () => {
    const { users, activeUserId } = this.props.shop;
    if (users[activeUserId].cartItems.length === 0) {
      return false;
    }
    return true;
  };

  filterItem = (item) => {
    const { users, activeUserId } = this.props.shop;
    const newUsers = users;

    let items = users[activeUserId].cartItems.filter(
      (ele) => ele.id !== item.id
    );

    newUsers[activeUserId].cartItems = items;
    this.props.dispatch(removeItem(newUsers));
  };

  render() {
    console.log("STORE IN APP:", this.props.shop.users);
    const { isLoggedIn } = this.props.shop;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Main handleAddToCart={this.handleAddToCart} />}
            />
            <Route
              path="/login"
              element={
                !isLoggedIn ? <Login /> : <Navigate replace to="/profile" />
              }
            />
            <Route
              path="/cart"
              element={
                isLoggedIn ? (
                  <Cart
                    setCartVisibilityflag={this.setCartVisibilityflag}
                    filterItem={this.filterItem}
                  />
                ) : (
                  <Login />
                )
              }
            />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route
              path="/profile"
              element={<Profile handleLogout={this.handleLogout} />}
            >
              <Route
                path="dashboard"
                element={<Dashboard shop={this.props.shop} />}
              />
              <Route
                path="orders"
                element={<Orders shop={this.props.shop} />}
              />
              <Route
                path="address"
                element={<Addresses shop={this.props.shop} />}
              />
              <Route
                path="payment"
                element={<Payment shop={this.props.shop} />}
              />
              <Route
                path="account"
                element={<Account shop={this.props.shop} />}
              />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    shop: state.shop,
  };
}

export default connect(mapStateToProps)(App);
