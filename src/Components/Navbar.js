import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuHeight: 0,
      menuPadding: 0,
      closeFlag: false,
      searchHeight: 0,
      searchFlag: false,
    };
  }

  handleMenu = () => {
    if (this.state.closeFlag === false) {
      this.setState({
        menuHeight: "100vh",
        menuPadding: 5,
        closeFlag: true,
      });
    } else {
      this.setState({
        menuHeight: 0,
        menuPadding: 0,
        closeFlag: false,
      });
    }
  };
  // handleMenu = () => {
  //   this.setState({
  //     display: "inline-block",
  //   });
  // };
  handleSearchField = () => {
    if (this.state.searchFlag === false) {
      this.setState({
        searchHeight: 40,
        searchFlag: true,
      });
    } else {
      this.setState({
        searchHeight: 0,
        searchFlag: false,
      });
    }
  };

  render() {
    return (
      <div className="Navbar">
        <div className="menu-icn" onClick={this.handleMenu}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/130/130918.png"
            alt="icn"
          />
        </div>
        <div
          className="hidden-menu"
          style={{
            height: this.state.menuHeight,
            padding: this.state.menuPadding,
          }}
        >
          <span className="nav-close-btn" onClick={this.handleMenu}>
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
                src="https://cdn-icons-png.flaticon.com/512/145/145812.png"
                alt="icn"
              />
            </div>
          </div>
        </div>
        <div className="logo">
          <Link to="/">
            <h3>
              Electronics<span style={{ color: "orangered" }}>.</span>
            </h3>
          </Link>
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
          <div
            className="search-container"
            style={{ height: this.state.searchHeight }}
          >
            <div>
              <input placeholder="  Search..."></input>
            </div>
            <div className="search-icon">Find</div>
          </div>
          <ul>
            <li onClick={this.handleSearchField}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                alt="search"
              ></img>
            </li>
            <li>
              <Link to="/login">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
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
