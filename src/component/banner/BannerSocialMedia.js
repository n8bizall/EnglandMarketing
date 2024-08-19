import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const BannerSocialMedia = () => {
  return (
    <div className="banner banner-style-1">
      <div className="container">
        <div className="row align-items-end align-items-xl-start">
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <AnimationOnScroll
                animateIn="zoomIn"
                duration={2}
                delay={300}
                animateOnce={true}
              >
                <div className="large-thumb">
                  <img
                    src={process.env.PUBLIC_URL + "/images/banner/social.png"}
                    alt="Laptop"
                  />
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="slideInRight"
                duration={2}
                delay={300}
                animateOnce={true}
              >
                <div className="large-thumb-2">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/banner/socialLady.png"
                    }
                    alt="Laptop"
                  />
                </div>
              </AnimationOnScroll>
              <ul className="list-unstyled shape-group">
                <li className="shape shape-1">
                  <AnimationOnScroll
                    animateIn="slideInLeft"
                    duration={1}
                    delay={800}
                    animateOnce={true}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/banner/socialBigsm.png"
                      }
                      alt="chat"
                    />
                  </AnimationOnScroll>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-content">
              <AnimationOnScroll
                animateIn="fadeInUp"
                animateOnce={true}
                delay={100}
              >
                <h1 className="title">Social Media Marketing</h1>
                <span className="subtitle">
                  In the dynamic realm of digital engagement, Social Media is
                  the catalyst that propels your brand into the spotlight.
                  Envision it as the vibrant pulse of your online presence,
                  where your business connects with your audience in real-time.
                  Unlike traditional marketing, social media accelerates your
                  brand's visibility, ensuring it shines brightly for those
                  eager to interact with your products or services.
                </span>
                <Link
                  to={process.env.PUBLIC_URL + "/contact"}
                  className="em-btn btn-fill-primary btn-large"
                >
                  Learn More
                </Link>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-21">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble39=.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-22">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble40.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-7">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"}
            alt="Bubble"
          />
        </li>
      </ul>
    </div>
  );
};

export default BannerSocialMedia;
