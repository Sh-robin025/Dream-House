import React from "react";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Service from "../components/Service/Service";

const Home = () => {
  return (
    <div>
      {/* <h1>This is home page</h1> */}
      <HeroSection></HeroSection>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
};

export default Home;
