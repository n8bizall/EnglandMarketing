import React from "react";
import SEO from "../common/SEO";
import AboutOne from "../component/about/AboutOne";
import BannerSEO from "../component/banner/BannerSEO";
import CtaLayoutSeo from "../component/cta/CtaLayoutSeo";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import HeaderOne from "../common/header/HeaderOne";
import SplashFooter from "../common/footer/SplashFooter";
import TestimonialSEO from "../component/testimonial/TestimonialSEO";

const DigitalSEO = () => {
  return (
    <>
      <SEO title="SEO" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BannerSEO />
        <AboutOne />
        <TestimonialSEO />
        <CtaLayoutSeo />
        <SplashFooter parentClass="" />
      </main>
    </>
  );
};

export default DigitalSEO;
