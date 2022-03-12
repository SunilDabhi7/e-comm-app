import React, { Component } from "react";
import { useLocation, Link } from "react-router-dom";

function ItemDetails() {
  const location = useLocation();
  const { myState: item } = location.state;
  return (
    <div className="item-details">
      <div className="item-details-left-block">
        <div className="item-details-poster">
          <img src={item.poster} alt="poster" />
        </div>
        <div className="item-details-btn">
          <Link to="/">
            <span>Buy Now</span>
          </Link>
        </div>
      </div>
      <div className="item-details-right-block">
        <div className="itm-r-header">
          <span>{item.title.model}</span>
          <span>&#40;{item.title.color}&#41;</span>
          <span>&#40;{item.features.memory[0]}&#41;</span>
        </div>
        <div>
          <span
            style={{ backgroundColor: "green", color: "white", padding: 3 }}
          >
            4
            <span
              className="fa fa-star checked"
              style={{ fontSize: 12, marginLeft: 2 }}
            ></span>
          </span>
          &nbsp;&nbsp;
          <span style={{ color: "grey", fontSize: 14 }}>
            1222 Ratings &#38; 120 Reviews
          </span>
        </div>
        <div style={{ fontSize: 20, fontWeight: 500 }}>&#8377;{item.price}</div>
        <div>
          <h4 style={{ fontWeight: 500 }}>Available Offers</h4>
          <p style={{ marginTop: 10 }}>
            <span className="icn-for-offers">
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt="icn"
              />
            </span>
            &nbsp;
            <span>
              Bank Offer 10% off on slice Visa credit cards, up to ₹1000. On
              orders of ₹5000 and above
            </span>
            &nbsp;
            <span style={{ color: "blue", cursor: "pointer" }}>T&#38;C</span>
          </p>
          <p style={{ marginTop: 10 }}>
            <span className="icn-for-offers">
              <img
                src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt="icn"
              />
            </span>
            &nbsp;
            <span>
              Bank Offer 10% off on slice Visa credit cards, up to ₹1000. On
              orders of ₹5000 and above
            </span>
            &nbsp;
            <span style={{ color: "blue", cursor: "pointer" }}>T&#38;C</span>
          </p>
          <p style={{ marginTop: 10 }}>
            1 year manufacturer warranty for device and 6 months manufacturer
            warranty for in-box accessories including batteries from the date of
            purchase <span style={{ color: "blue" }}>Know More</span>
          </p>
          <div className="item-highlights">
            <div style={{ color: "grey" }}>Highlights</div>
            <div className="item-highlights-list">
              <ul>
                <li>
                  <span>{item.features.memory[0]}</span> |{" "}
                  <span>{item.features.memory[1]}</span>
                </li>
                <li>{item.features.display}</li>
                <li>
                  <span>{item.features.camera.back}</span> |
                  <span>{item.features.camera.front}</span>
                </li>
                <li>{item.features.battery}</li>
                <li>{item.features.processor}</li>
              </ul>
            </div>
            <div style={{ color: "grey" }}>Payment Options</div>
            <div className="item-highlights-list">
              <ul>
                <li>EMI starting from ₹323/month</li>
                <li>Cash on Delivery</li>
                <li>Net banking &#38; Credit/ Debit/ ATM card</li>
              </ul>
            </div>
            <div style={{ color: "grey" }}>Seller</div>
            <div className="item-highlights-list">
              <ul>
                <li>{item.seller}</li>
                <li>7 Days Replacement Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
