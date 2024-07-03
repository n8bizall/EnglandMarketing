import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

const SplashFooter = () => {
  return (
    <footer className="footer-area splash-footer">
      <div className="container">
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="footer-copyright">
                <span className="copyright-text">
                  © {new Date().getFullYear()}. All rights reserved by{" "}
                  <a href="https://england-marketing.com/">England Marketing</a>
                  .
                </span>
              </div>
            </div>
            <div className="col-lg-2">
              <ul className="footer-social list-unstyled">
                <li>
                  <a
                    href="https://www.facebook.com/england.marketing.2024/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/tiffany-england-39374b55/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="footer-bottom-link">
                <ul className="list-unstyled">
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SplashFooter;
