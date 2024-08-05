import React from "react";
import SEO from "../common/SEO";
import BannerSEM from "../component/banner/BannerSEM.js";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import HeaderOne from "../common/header/HeaderOne";
import SplashFooter from "../common/footer/SplashFooter";
import AboutSEM from "../component/about/AboutSEM.js";
import CtaLayoutSem from "../component/cta/CtaLayoutSem";
import TestimonialSEM from "../component/testimonial/TestimonialSEM";

const DigitalSEM = () => {
  return (
    <>
      <SEO title="Search Engine Marketing" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BannerSEM />
        <AboutSEM parentClass="bg-color-light" />
        <TestimonialSEM />
        <CtaLayoutSem />
        <SplashFooter parentClass="" />
      </main>
    </>
  );
};

export default DigitalSEM;
