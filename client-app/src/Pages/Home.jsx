import React from "react";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Products from "../components/Products/Product";
import Service from "../components/Services/Services";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Products />
      <Service />
      <Footer></Footer>
    </div>
  );
};

export default Home;
