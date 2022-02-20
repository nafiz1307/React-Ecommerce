import React from 'react'
import './Product.css'

const Product = ({title,image,price,rating}) => {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product_image" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product