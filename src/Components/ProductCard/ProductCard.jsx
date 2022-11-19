import React from 'react';
import "./ProductCard.css";
import img from "../../img/board-361516_640.jpg"
const ProductCard = () => {
  return (
    <div className='main_product_card'>
      <div className="product_image">
        <img src={img} className="img" alt="" />
      </div>
      <div className="product_name">
        <p>Product name Here</p>
      </div>
    </div>
  )
}

export default ProductCard
