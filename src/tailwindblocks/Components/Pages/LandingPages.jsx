import React from "react";
import NavebarSection from "../NavebarSection";
import HeroSection from "../HeroSection";
import Feature from "../../Feature";
import Pricing from "../Pricing";
import Team from "../Team";
import ContactSection from "../ContactSection";
import FooterSection from "../FooterSection";

const LandingPages = () => {
  return (
    <div>
      <NavebarSection />
      <HeroSection />
      <Feature />
      <Pricing />
      <Team />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default LandingPages;
