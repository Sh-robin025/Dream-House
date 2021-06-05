
import React from "react";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Service from "../components/Service/Service";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Service/>
      <Footer></Footer>
    </div>
  );
};

export default Home;
