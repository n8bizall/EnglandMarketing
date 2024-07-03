import React from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
  FaPhone,
  FaFax,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const OffcanvasMenu = ({ offcanvasShow, offcanvasHide }) => {
  return (
    <Offcanvas
      show={offcanvasShow}
      onHide={offcanvasHide}
      placement="end"
      className="header-offcanvasmenu"
    >
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <form action="#" className="side-nav-search-form">
          <div className="form-group">
            <input
              type="text"
              className="search-field"
              name="search-field"
              placeholder="Search..."
            />
            <button className="side-nav-search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <div className="row ">
          <div className="col-lg-5 col-xl-6">
            <ul className="main-navigation list-unstyled">
              <li>
                <Link to={process.env.PUBLIC_URL + "/seo"}>Seo</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/sem"}>Sem</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/social-media-ads"}>
                  Social Media Ads
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/web-mobile-logo-design"}>
                  Websites, Mobile & Logo
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-grid"}>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="contact-info-wrap">
              <div className="contact-inner">
                <address className="address">
                  <span className="title">Contact Information</span>
                  <p>
                    1525 Edenwood Dr <br /> Dayton, Ohio
                  </p>
                </address>
                <address className="address">
                  <span className="title">We're Available 24/7. Call Now.</span>
                  <a href="tel:9375806559" className="tel">
                    <FaPhone /> (937) 580-6559
                  </a>
                </address>
              </div>
              <div className="contact-inner">
                <h5 className="title">Find us here</h5>
                <div className="contact-social-share">
                  <ul className="social-share list-unstyled">
                    <li>
                      <a
                        href="https://facebook.com/england.marketing.2024/"
                        target="_blank"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/tiffany-england-39374b55/"
                        target="_blank"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasMenu;
