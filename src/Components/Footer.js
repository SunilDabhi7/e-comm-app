import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-column">
          <h5>Categories</h5>
          <p>Mobiles</p>
          <p>Computer</p>
          <p>TV, Audio</p>
          <p>Smartwatch</p>
          <p>Accessories</p>
        </div>
        <div className="footer-column">
          <h5>Quick Links</h5>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Help</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer-column">
          <h5>Get in Touch</h5>
          <p>Mishc, Scjolas, S.S.</p>
          <p>12 5564 87 77</p>
          <p>mail@mail.com</p>
          <h5 style={{ marginTop: 5 }}>Contact Us</h5>
          <div className="social-icn">
            <ul>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
                  alt="icn"
                />
              </li>
              <li>
                <img
                  src="https://cdn-icons.flaticon.com/png/512/4138/premium/4138124.png?token=exp=1644823512~hmac=e73f5365bfa689db418870448d221963"
                  alt="icn"
                />
              </li>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                  alt="icn"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
