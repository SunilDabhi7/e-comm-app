import React, { Component } from "react";

class CartItemComp extends Component {
  handleDeleteItem = () => {
    this.props.filterItem(this.props.item);
  };
  render() {
    const { item } = this.props;
    return (
      <div className="cart-item-comp">
        <div className="ItemDetails">
          <div className="cartItemPoster">
            <img src={item.poster} alt="poster"></img>
          </div>
          <div className="cartItemDetails">
            <p>{item.title.model}</p>
            <p style={{ fontSize: 12 }}>&#40;{item.title.color}&#41;</p>
            <p style={{ color: "grey" }}>{item.features.memory[0]}</p>
            <p style={{ color: "grey", fontSize: 12 }}>Seller: {item.seller}</p>
            <p>&#8377;{item.price}</p>
            <div className="cart-item-qty">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992514.png"
                  alt="icn"
                />
              </div>
              <div>
                <span>1</span>
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992482.png"
                  alt="icn"
                />
              </div>
              <div onClick={this.handleDeleteItem}>
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2782/premium/2782988.png?token=exp=1644916345~hmac=463bbf20eeae8add39069cb0e53f1613"
                  alt="icn"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Free Delivery</p>
          <p style={{ fontSize: 12, color: "grey", marginTop: 5 }}>
            7 Days Replacement Policy
          </p>
        </div>
      </div>
    );
  }
}

export default CartItemComp;
