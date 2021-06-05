
import React from "react";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Products from "../components/Products/Product";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Products/>
      <Footer></Footer>
    </div>
  );
};

export default Home;
