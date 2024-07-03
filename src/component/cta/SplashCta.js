import React from "react";
import { Link } from "react-router-dom";

const SplashCta = () => {
  return (
    <div className="section call-to-action-area splash-call-to-action">
      <div className="container">
        <div className="call-to-action">
          <div className="section-heading heading-light">
            <h2 className="title">
              Let’s Transform <br /> Your Business Today!
            </h2>
            <p>
              Need something? Just tell us what you want by{" "}
              <a href="tel:9375806559">requesting us here.</a>{" "}
            </p>
            <Link
              to={process.env.PUBLIC_URL + "/contact"}
              className="em-btn btn-large btn-fill-white"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-9">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-12.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-13.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-15.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-7">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"}
            alt="Comments"
          />
        </li>
      </ul>
    </div>
  );
};

export default SplashCta;
