import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";

import BannerSocialMedia from "../component/banner/BannerSocialMedia";
import TestimonialSocial from "../component/testimonial/TestimonialSocial";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SplashFooter from "../common/footer/SplashFooter";
import SocialMediaCta from "../component/cta/SocialMediaCta";
import AboutSocialMedia from "../component/about/AboutSocialMedia";

const DigitalSocialMedia = () => {
  return (
    <>
      <SEO title="Social Media Ads" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BannerSocialMedia />
        <AboutSocialMedia />
        <TestimonialSocial />
        <SocialMediaCta />
        <SplashFooter />
      </main>
    </>
  );
};

export default DigitalSocialMedia;
