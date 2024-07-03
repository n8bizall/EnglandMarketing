import React from "react";
import Logo from "../../elements/logo/Logo";
import StickyHeader from "./StickyHeader";
import Nav from "../header/Nav";

const SplashHeader = () => {
  const sticky = StickyHeader(100);

  return (
    <header className="header em-header header-style-1 splash-header-style">
      <div className={`em-mainmenu ${sticky ? "em-sticky" : ""}`}>
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <Logo
                limage="/images/logohorizontal.jpg"
                dimage="/images/logohorizontal.jpg"
                simage="/images/logohorizontal.jpg"
              />
            </div>
            <div className="header-main-nav">
              {/* Start Mainmanu Nav */}
              {/* <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li>
                    <a href="#splash-demo">Demo</a>
                  </li>
                  <li>
                    <a href="#splsh-features">SEO</a>
                  </li>
                  <li>
                    <a href="#splsh-features">SEM</a>
                  </li>
                  <li>
                    <a href="#splsh-features">Websites</a>
                  </li>
                  <li>
                    <a href="#splsh-features">Branding</a>
                  </li>
                  <li>
                    <a href="#splash-why-choose">Why Us</a>
                  </li>
                  <li>
                    <a href="https://www.england-marketing.com/england_marketing_blog">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav> */}
              <Nav />
              {/* End Mainmanu Nav */}
            </div>
            <div className="header-action">
              <ul className="list-unstyled">
                <li className="buy-btn">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://england-marketing.com/"
                    className="em-btn btn-fill-primary"
                  >
                    Contact Now!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SplashHeader;
