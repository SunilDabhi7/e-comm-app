import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { products } from "../Database/shop_db";

class Main extends Component {
  render() {
    console.log("STATE in Main: ", products.mobiles);
    return (
      <div className="main">
        <div className="sort-filter-qry">
          <div>Filter</div>
          <div style={{ borderLeft: "1px solid grey" }}>Sort</div>
        </div>
        <div className="filter">
          <div className="filter-details">
            <h4>Price</h4>
            <ul>
              <li>Under &#8377;10000 </li>
              <li>&#8377;10000 - &#8377;15000</li>
              <li>&#8377;10000 - &#8377;15000</li>
              <li>&#8377;15000 - &#8377;20000</li>
              <li>&#8377;20000 - &#8377;25000</li>
              <li>Over &#8377;20000</li>
            </ul>
          </div>
          <div className="filter-details">
            <h4>Categories</h4>
            <ul>
              <li>Mobiles</li>
              <li>TVs</li>
              <li>Audio</li>
              <li>Accessories</li>
              <li>Smartwatch</li>
              <li>Headphones</li>
            </ul>
          </div>
          <div className="filter-details">
            <h4>Discounts</h4>
            <ul>
              <li>
                <input type="checkbox" disabled />
                <label> 5% or more</label>
              </li>
              <li>
                <input type="checkbox" disabled />
                <label> 10% or more</label>
              </li>
              <li>
                <input type="checkbox" disabled />
                <label> 15% or more</label>
              </li>
              <li>
                <input type="checkbox" disabled />
                <label> 20% or more</label>
              </li>
            </ul>
            <br></br>
          </div>
          <div className="filter-details">
            <h4>Customer Review</h4>
            <ul>
              <li>&#9733;&#9733;&#9733;&#9733;&#9733; 5.0 </li>
              <li>&#9733;&#9733;&#9733;&#9733; 4.0 </li>
              <li>&#9733;&#9733;&#9733; 3.0 </li>
              <li>&#9733;&#9733; 2.0 </li>
            </ul>
          </div>
        </div>
        <div className="products">
          <h4 className="products-header">Top Products</h4>
          <div className="product-list">
            {products.mobiles.map((item, index) => {
              return (
                <ProductComp
                  item={item}
                  key={index}
                  handleAddToCart={this.props.handleAddToCart}
                  isLoggedIn={this.props.shop.isLoggedIn}
                  users={this.props.shop.users}
                  activeUserId={this.props.shop.activeUserId}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

class ProductComp extends Component {
  addToCartFunc = () => {
    this.props.handleAddToCart(this.props.item);
  };
  checkIfItemIsPresent = (id) => {
    const { users, activeUserId } = this.props;
    const { cartItems } = users[activeUserId];
    let val = false;
    if (cartItems.length !== 0) {
      cartItems.map((ele) => {
        if (ele.id === id) {
          val = true;
        }
      });
    }
    return val;
  };
  render() {
    const { item, isLoggedIn, users, activeUserId } = this.props;
    let addToCartFlag = isLoggedIn ? this.checkIfItemIsPresent(item.id) : false;
    return (
      <div className="product">
        <div className="product-poster">
          {/* <img src={item.poster} alt="poster"></img> */}
          <NavLink
            key={"/item-details"}
            to="/item-details"
            state={{
              myState: item,
              addToCartFlag: addToCartFlag,
              isLoggedIn: isLoggedIn,
            }}
          >
            <img src={item.poster} alt="poster"></img>
          </NavLink>
        </div>
        <div className="product-details">
          <p>{item.title.model}</p>
          <p style={{ color: "grey" }}>
            <span>&#8377;</span>
            {item.price}
          </p>
        </div>
        {!addToCartFlag ? (
          <Link className="addToCart-btn" to="/cart">
            <div onClick={isLoggedIn ? this.addToCartFunc : null}>
              Add to Cart
            </div>
          </Link>
        ) : (
          <Link className="addedToCart-btn" to="/cart">
            <div>Added to Cart</div>
          </Link>
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

export default connect(mapStateToProps)(Main);
