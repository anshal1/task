import React from "react";
import "./ServiceCard.css";
import img from "../../img/board-361516_640.jpg";
const ServiceCard = () => {
  return (
    <>
      <div className="main_service_card">
        <span className="badge">20% OFF</span>
        <div className="service_name">
          <p>Service Name</p>
        </div>
        <div className="image_container">
          <img className="img" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
