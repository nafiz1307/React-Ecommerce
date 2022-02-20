import React from 'react'
import "./Checkout.css"
import banner from "../assets/checkout_banner.png"
import { Link } from 'react-router-dom';
import Subtotal from './Subtotal';

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <Link to="/">
          <img src={banner} alt="Checkout-Banner" className="checkout_banner" />
        </Link>
        <div>
          <h2 className="checkout_title">Your Shopping Cart</h2>
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout