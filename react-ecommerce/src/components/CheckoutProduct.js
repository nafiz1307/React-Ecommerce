import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, image, title, price, rating}) => {

    const[{basket},dispatch]= useStateValue();
    const removeFromCart =()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id :id,
        })
    }
  return (
    <div className="checkoutProduct">
      <img src={image} alt="cart product" className="checkoutProductImage" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="chcekoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart} className="btn waves-effect waves-light btn-small">
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
