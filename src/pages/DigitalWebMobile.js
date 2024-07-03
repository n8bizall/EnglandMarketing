import React from "react";
import SplashHeader from "../common/header/SplashHeader";
import SEO from "../common/SEO";

import BannerWebsites from "../component/banner/BannerWebsites";
import TestimonialSocial from "../component/testimonial/TestimonialSocial";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SplashFooter from "../common/footer/SplashFooter";
import SocialMediaCta from "../component/cta/SocialMediaCta";

const DigitalWebMobile = () => {
  return (
    <>
      <SEO title="Websites, Mobile, and Logo Design" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <SplashHeader />
        <BannerWebsites />
        <TestimonialSocial />
        <SocialMediaCta />
        <SplashFooter />
      </main>
    </>
  );
};

export default DigitalWebMobile;
