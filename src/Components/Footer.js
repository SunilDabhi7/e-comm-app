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
                <img src="https://cdn-icons.flaticon.com/png/512/3686/premium/3686989.png?token=exp=1645621687~hmac=4eb26ee23a745edb949502bbecd061c4" />
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
                <img src="https://cdn-icons.flaticon.com/png/512/3955/premium/3955024.png?token=exp=1645622882~hmac=e0f981d4ac943a70fb9817f920e232f5" />
              </span>
              <span>
                <img src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504903.png?token=exp=1645622904~hmac=9418bb0241df9d2c565fe10002ee4b31" />
              </span>
              <span>
                <img src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504947.png?token=exp=1645622922~hmac=a3b0943e749ffd7716ccc05f84ce15bb" />
              </span>
              <span>
                <img src="https://cdn-icons.flaticon.com/png/512/2190/premium/2190403.png?token=exp=1645622950~hmac=d15f9a61d3924cdd3fdf7b858cb00f05" />
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
