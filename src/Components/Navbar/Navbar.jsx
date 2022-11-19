import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Navbar.css";
const Navbar = () => {
  const location = "Location here lorem ruiauwqyeqwui askdgwiu";
  const [hideNav, sethideNav] = useState("location_container");
  const [shownav, setshownav] = useState("main_navbar_container");
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 20) {
        sethideNav("location_container_hide");
        setshownav("main_navbar_container_sticky");
      } else {
        sethideNav("location_container");
        setshownav("main_navbar_container");
      }
      // console.log(window.scrollY);
    };
  }, []);
  return (
    <>
      <div className={shownav}>
        <div className={hideNav}>
          <div className="location_logo">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="location">
            <p>
              {location.length >= 25 ? location.slice(0, 25) : location + "..."}
            </p>
          </div>
          <div className="left_logo">
            <div className="notification_logo">
              <i className="fa-solid fa-bell">
                <span id="notification_count">3</span>
              </i>
            </div>
            <div className="cart_logo">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
        {/* Make this sticky */}
        <div className="nav">
          <div className="search_box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search for products..."
              id="search"
            />
          </div>
          <i class="fa-solid fa-microphone"></i>
        </div>
      </div>
      {/* Desktop */}
      <div className="desktop_nav">
        <div className="logo">
          <p>Logo</p>
        </div>
        {/* <div className="location_holder">
          <div className="location_logo">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="location">
            <p>
              {location.length >= 25 ? location.slice(0, 25) : location + "..."}
            </p>
          </div>
        </div> */}
        <div className="nav_desktop">
          <div className="search_box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search for products..."
              id="search"
            />
          </div>
          <i class="fa-solid fa-microphone"></i>
        </div>
        <div className="left_logo">
          <div>
            <i className="fa-solid fa-home"></i>
            <p>Home</p>
          </div>
          <div className="notification_logo">
            <i className="fa-solid fa-bell">
              <span id="notification_count">3</span>
            </i>
            <p>Notifications</p>
          </div>
          <div>
            <i class="fa-solid fa-user"></i>
            <p>Profile</p>
          </div>
          <div>
            <i class="fa-solid fa-list"></i>
            <p>Lists</p>
          </div>
          <div>
            <i class="fa-solid fa-comment"></i>
            <p>Chat</p>
          </div>
          <div>
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
