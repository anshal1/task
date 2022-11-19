import React from 'react';
import "../PopularServices/Popularservices.css";
import ProductCard from '../ProductCard/ProductCard.jsx';
const AllPopular = () => {
  return (
    <>
    <div className="main_services_container">
        <div className="heading_box">
          <h1>All Popular Service Products</h1>
        </div>
        <div className="heading">
          <h1>Consultancy</h1>
        </div>
        <div className="services_products">
          <div className="product_holder">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
    </div>
    </>
  )
}

export default AllPopular
