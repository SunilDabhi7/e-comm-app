import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      closeFlag: false,
    };
  }

  handleNavClose = () => {
    if (this.state.closeFlag === false) {
      this.setState({
        display: "none",
        closeFlag: true,
      });
    } else {
      this.setState({
        display: "inline-block",
        closeFlag: false,
      });
    }
  };
  handleMenu = () => {
    this.setState({
      display: "inline-block",
    });
  };

  render() {
    return (
      <div className="Navbar">
        <div className="menu-icn" onClick={this.handleMenu}>
          <img
            src="https://cdn-icons.flaticon.com/png/512/4543/premium/4543046.png?token=exp=1645173541~hmac=df4a6c270a87b45a9ed10ddc900757d2"
            alt="icn"
          />
        </div>
        <div className="hidden-menu" style={{ display: this.state.display }}>
          <span className="nav-close-btn" onClick={this.handleNavClose}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/889/889590.png"
              alt="icn"
            />
          </span>
          <div style={{ borderBottom: "1px solid white", height: 30 }}>
            Navigation
          </div>
          <ul>
            <li>Home</li>
            <li>Gadgets</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
          <div className="nav-scl-icn">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
                alt="icn"
              />
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt="icn"
              />
            </div>
            <div>
              <img
                src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504839.png?token=exp=1645447191~hmac=f870cfd7c784ba0437f505089ef393fa"
                alt="icn"
              />
            </div>
          </div>
        </div>
        <div className="logo">
          <h3>
            Electronics<span style={{ color: "orangered" }}>.</span>
          </h3>
        </div>
        <div className="logo-small">
          <Link to="/">
            E<span style={{ color: "orangered" }}>.</span>
          </Link>
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
