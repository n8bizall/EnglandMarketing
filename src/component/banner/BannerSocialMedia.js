import React from "react";
import Tilty from "react-tilty";

const BannerSocialMedia = () => {
  return (
    <div className="banner banner-style-4">
      <div className="container">
        <div className="banner-content">
          <h1 className="title">Social Media Marketing</h1>
          <p>
            In the dynamic realm of digital engagement, Social Media is the
            catalyst that propels your brand into the spotlight. Envision it as
            the vibrant pulse of your online presence, where your business
            connects with your audience in real-time. Unlike traditional
            marketing, social media accelerates your brand's visibility,
            ensuring it shines brightly for those eager to interact with your
            products or services.
          </p>

          <Tilty perspective={3000}>
            <img
              src={process.env.PUBLIC_URL + "/images/banner/sm.webp"}
              alt="Shape"
            />
          </Tilty>
        </div>
      </div>
    </div>
  );
};

export default BannerSocialMedia;
