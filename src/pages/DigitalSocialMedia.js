import React from "react";
import SplashHeader from "../common/header/SplashHeader";
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
        <SplashHeader />
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
