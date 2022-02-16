import React, { Component } from "react";
import { connect } from "react-redux";

import { CartItemComp, EmptyCart } from ".";

class Cart extends Component {
  totalPrice = () => {
    const { users, isLoggedIn, activeUserId } = this.props.shop;
    let totalPrice = 0;
    if (isLoggedIn) {
      users[activeUserId].cartItems.map((item) => {
        totalPrice += item.price;
      });
    }
    return totalPrice;
  };
  render() {
    const { users, activeUserId } = this.props.shop;
    const { cartItems } = users[activeUserId];
    let totalPrice = this.totalPrice();
    return (
      <div>
        {this.props.setCartVisibilityflag() ? (
          <div className="cart">
            <div className="cart-left-block">
              <div className="cart-items-header">MY CART</div>
              {cartItems.map((item, index) => {
                return (
                  <CartItemComp
                    item={item}
                    key={index}
                    filterItem={this.props.filterItem}
                  />
                );
              })}
            </div>

            <div className="cart-right-block">
              <div className="price-header">PRICE DETAILS</div>
              <div className="cart-price">
                <p>Price</p>
                <p>&#8377;{totalPrice}</p>
              </div>
              <div className="cart-price">
                <p>Discount</p>
                <p>0</p>
              </div>
              <div className="cart-price">
                <p>Delivery</p>
                <p>FREE</p>
              </div>
              <div className="cart-price-total">
                <p>Total price</p>
                <p>&#8377;{totalPrice}</p>
              </div>
              <div className="checkout-btn">Place Order</div>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shop: state.shop,
  };
}

export default connect(mapStateToProps)(Cart);
