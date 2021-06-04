import React from "react";
// import HeaderStyle from "../../Styles/HomePage/HeroSection";
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

{
  /* <div className="HeroText">
        <h1 className="text-center heroHeadline">FIND YOUR HOUSE RENT</h1>
        <form action="">
          <div className="heroSearch row">
            <div className="col-md-8">
              <input
                className="form-control"
                type="search"
                placeholder="Search..."
                name=""
                id=""
              />
            </div>
            <div className="col-md-4">
              <button className="HeroSearchBtn" value="search">
                Find Now
              </button>
            </div>
          </div>
          <div className=" d-flex"></div>
        </form>
      </div> */
}
