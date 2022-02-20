import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <div className="product">
      <div className="product_info">
        <p>Product Demo Title</p>
        <p className="price">
          <small>$</small>
          <strong>50.99</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
        alt="product_image"
      />

      <button>Add to Cart</button>
    </div>
  );
}

export default Product