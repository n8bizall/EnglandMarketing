import React from "react";
import SEO from "../common/SEO";
import BannerSEM from "../component/banner/BannerSEM.js";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import HeaderOne from "../common/header/HeaderOne";
import SplashFooter from "../common/footer/SplashFooter";
import AboutTwo from "../component/about/AboutSEM.js";

const DigitalSEM = () => {
  return (
    <>
      <SEO title="Search Engine Marketing" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BannerSEM />

        <AboutTwo parentClass="bg-color-light" />

        <SplashFooter parentClass="" />
      </main>
    </>
  );
};

export default DigitalSEM;
