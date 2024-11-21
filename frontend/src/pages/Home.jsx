import React from "react";
import FeaturesSection from "../components/FeaturesSection";
// import ServicesSection from "../components/ServicesSection";
import NewsSection from "../components/NewsSection";
// import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonial";
import SliderComponent from "../components/SliderComponent";
import CarouselSlider from "../components/CarouselSlider";
import StatsComponent from "../components/StatsComponent";
import AllNews from "../components/AllNews";

const Home = () => {
  return (
    <>
      <div>
        <CarouselSlider />
        <FeaturesSection />
        <StatsComponent />
        <NewsSection />
        <SliderComponent />
        {/* <Testimonial /> */}
      </div>
    </>
  );
};

export default Home;
