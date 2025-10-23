import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
import BrandsSection from "../components/BrandsSection/BrandsSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <BenefitsSection />
      <ReviewsSection />
      <BrandsSection />
    </div>
  );
};

export default HomePage;
