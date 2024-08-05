import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const BannerSEO = () => {
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
                    src={
                      process.env.PUBLIC_URL + "/images/banner/ladyBadge.png"
                    }
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
                      process.env.PUBLIC_URL +
                      "/images/banner/blondeLadySit.png"
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
                      src={process.env.PUBLIC_URL + "/images/banner/search.png"}
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
                <h1 className="title">Optimize your online presense.</h1>
                <span className="subtitle">
                  In the world of digital marketing, search engine optimization
                  (SEO) stands as the cornerstone of online success. Imagine
                  your business as a hidden gem waiting to be discovered. SEO is
                  the map that ensures your target audience finds their way to
                  you. It's not just about optimizing for search engines; it's
                  about creating an exceptional user experience that resonates
                  with both search engine algorithms and with your target
                  audience.
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

export default BannerSEO;
