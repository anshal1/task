import React from "react";
import "../PopularServices/Popularservices.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";
const Services = () => {
  return (
    <>
      <div className="main_services_container">
        <div className="heading_box">
          <h1>Services We Provide</h1>
        </div>
        <div className="service_card_container">
            <div className="services_card_holder">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Services;
