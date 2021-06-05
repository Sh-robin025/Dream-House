import React from "react";
import "./HeroStyle.css";

const HeroSection = () => {
  return (
    <div id="HeroSection">
      <div className="HeroBGOverlay"></div>

      <div className="HeroText">
        <h1 className="text-center heroHeadline">FIND YOUR HOUSE RENT</h1>
        <form action="">
          <div className="heroSearch d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search..."
              name=""
              id=""
            />
            <button className="HeroSearchBtn" value="search">
              Find Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
