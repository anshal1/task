import React from "react";
import AllPopular from "../AllPopular/AllPopular";
import Carousel from "../Carousel/Carousel";
import Features from "../Features/Features";
import Popularservices from "../PopularServices/Popularservices";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <Features />
      <Popularservices />
      <AllPopular />
      <Services />
      <div className="bottom_menu">
        <p>
          <i class="fa-solid fa-house"></i>Home
        </p>
        <p>
          <i class="fa-solid fa-user"></i>Profile
        </p>
        <div className="logo">
          <p>Logo</p>
        </div>
        <p>
          <i class="fa-solid fa-list"></i>Lists
        </p>
        <p>
          <i class="fa-solid fa-comment"></i>Chat
        </p>
      </div>
    </div>
  );
};

export default Home;
