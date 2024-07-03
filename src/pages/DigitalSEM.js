import React from "react";
import SEO from "../common/SEO";
import BannerSEM from "../component/banner/BannerSEM.js";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SplashHeader from "../common/header/SplashHeader";
import SplashFooter from "../common/footer/SplashFooter";
import AboutTwo from "../component/about/AboutSEM.js";

const DigitalSEM = () => {
  return (
    <>
      <SEO title="Search Engine Marketing" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <SplashHeader />
        <BannerSEM />

        <AboutTwo parentClass="bg-color-light" />

        <SplashFooter parentClass="" />
      </main>
    </>
  );
};

export default DigitalSEM;
