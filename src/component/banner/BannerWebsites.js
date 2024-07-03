import React from "react";
import { Link } from "react-router-dom";
import FormOne from "../contact/FormOne";

const BannerWebsites = () => {
  return (
    <div
      className="banner banner-style-5"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/others/step4.webp"
        })`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-7">
            <div className="banner-content">
              <h1 className="title">
                Website &amp; Mobile &amp;Logo Design Studio
              </h1>
              <div>
                <Link
                  to={process.env.PUBLIC_URL + "/project-grid-one"}
                  className="em-btn btn-fill-white btn-large"
                >
                  View Showcase
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="banner-form">
              <div className="contact-form-box shadow-box">
                <h3 className="title">Get a free Website quote now</h3>
                <FormOne />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWebsites;
