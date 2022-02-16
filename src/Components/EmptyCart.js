import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmptyCart extends Component {
  render() {
    return (
      <div className="empty-cart">
        <h3>My Cart</h3>
        <div className="empty-cart-poster">
          <img
            src="https://img.freepik.com/free-vector/shopping-cart-with-shopping-bag-illustration_249405-124.jpg?w=740"
            alt="poster"
          />
          <p>Your Cart is Empty!</p>
          <p style={{ fontSize: 12 }}>Add items to it now.</p>
          <div className="empty-cart-btn">
            <Link to="/">Shop Now</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EmptyCart;
