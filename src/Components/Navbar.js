import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="logo">
          <h3>
            Electronics<span style={{ color: "orangered" }}>.</span>
          </h3>
        </div>
        <div className="menu-list">
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </li>
            <li>Gadgets</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="search-container">
            <input placeholder="  Search..."></input>
            <div className="search-icon">
              <p>
                <i className="fas fa-search"></i>
                {/* Search */}
              </p>
            </div>
          </div>
          <ul>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                alt="search"
              ></img>
            </li>
            <li>
              <Link to="/login">
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2102/premium/2102647.png?token=exp=1644667748~hmac=a69e427e5dfa713ceef6b6f5ad042ce9"
                  alt="profile"
                ></img>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
                  alt="cart"
                ></img>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
