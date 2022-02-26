import React from "react";
import "./Checkout.css";
import banner from "../assets/checkout_banner.png";
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <Link to="/">
          <img src={banner} alt="Checkout-Banner" className="checkout_banner" />
        </Link>
        <div>
          <h5>{user?.email}</h5>
          <h4 className="checkout_title">Your Shopping Cart</h4>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
