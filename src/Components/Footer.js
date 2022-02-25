import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-rw">
          <div className="footer-column" style={{ borderTop: "none" }}>
            <h3>Categories</h3>
            <p>Mobiles</p>
            <p>Computer</p>
            <p>TV, Audio</p>
            <p>Smartwatch</p>
            <p>Accessories</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Help</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer-column">
            <h3>Order</h3>
            <p>My Account</p>
            <p>View Cart</p>
            <p>Wishlist</p>
            <p>Checkout</p>
          </div>
          <div className="footer-column">
            <h3>Contacts</h3>
            <div className="ftr-cntct-dtls" style={{ marginBottom: 5 }}>
              <span>
                <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" />
              </span>
              <span>Call Us : 800-889-889</span>
            </div>
            <div className="ftr-cntct-dtls" style={{ marginBottom: 5 }}>
              <span>
                <img src="https://cdn-icons-png.flaticon.com/512/552/552486.png" />
              </span>
              <span>Email Us : abc@mail.com</span>
            </div>
            <div className="ftr-cntct-dtls">
              <span>
                <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" />
              </span>
              <span>Address : Park Avenue, ABC, Country-2000</span>
            </div>
            <div className="ftr-cntct-dtls" style={{ marginTop: 5 }}>
              <span>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" />
              </span>
              <span>
                <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" />
              </span>
              <span>
                <img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" />
              </span>
              <span>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" />
              </span>
            </div>
          </div>
        </div>
        <div className="cpy-rght-dtls">
          <div className="logo">
            <h3>
              Electronics<span style={{ color: "orangered" }}>.</span>
            </h3>
          </div>
          <div>&copy;2022 - E-Comm site by SB</div>
        </div>
      </div>
    );
  }
}

export default Footer;
