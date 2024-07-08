import React from "react";
import SEO from "../common/SEO";
import AboutOne from "../component/about/AboutOne";
import BannerSEO from "../component/banner/BannerSEO";
import CtaLayoutSeo from "../component/cta/CtaLayoutSeo";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import HeaderOne from "../common/header/HeaderOne";
import SplashFooter from "../common/footer/SplashFooter";

const DigitalSEO = () => {
  return (
    <>
      <SEO title="England Marketing and Web Development" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BannerSEO />
        <AboutOne />
        <CtaLayoutSeo />
        <SplashFooter parentClass="" />
      </main>
    </>
  );
};

export default DigitalSEO;
