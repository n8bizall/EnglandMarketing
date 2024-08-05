import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";

import BannerWebsites from "../component/banner/BannerWebsites";
import TestimonialWeb from "../component/testimonial/TestimonialWeb";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SplashFooter from "../common/footer/SplashFooter";
import WebCta from "../component/cta/WebCta";
import AboutWeb from "../component/about/AboutWeb";

const DigitalWebMobile = () => {
  return (
    <>
      <SEO title="Websites, Mobile, and Logo Design" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BannerWebsites />
        <AboutWeb />
        <TestimonialWeb />
        <WebCta />
        <SplashFooter />
      </main>
    </>
  );
};

export default DigitalWebMobile;
