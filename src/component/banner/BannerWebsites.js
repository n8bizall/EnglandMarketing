import React from "react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

const BannerWebsites = () => {
  return (
    <div className="banner banner-style-1">
      <div className="container">
        <div className="row align-itemsend align-items-xl-start">
          <div className="col-lg-12">
            <div style={{ display: "flex" }}>
              <div style={{ display: "inline-block", lignItems: "right" }}>
                <div className="banner-content">
                  <AnimationOnScroll
                    animateIn="fadeInUp"
                    animateOnce={true}
                    delay={100}
                  >
                    <h1 className="title">
                      Website Creation, Design and Upkeep
                    </h1>

                    <span className="subtitle" style={{ marginRight: "20px" }}>
                      Your website is your digital storefront. It should go
                      beyond simple aesthetics; We specialize in creating,
                      designing, and maintaining dynamic websites that
                      seamlessly blend form and function. My goal is a beautiful
                      yet simple user-experience. To create a consistent place
                      for your clients and potentials to return to with ease.
                    </span>
                  </AnimationOnScroll>
                </div>
              </div>
              <Link
                to={process.env.PUBLIC_URL + "/project-grid-one"}
                className="em-btn btn-fill-white btn-large"
              >
                View Showcase
              </Link>
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
    </div>
  );
};

export default BannerWebsites;
