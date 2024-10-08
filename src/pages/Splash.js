import React from "react";
import { Link } from "react-router-dom";
import SplashFooter from "../common/footer/SplashFooter";
import SEO from "../common/SEO";
import SplashBanner from "../component/banner/SplashBanner";
import SplashCta from "../component/cta/SplashCta";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SplashData from "../data/splash/SplashData.json";
import HeaderOne from "../common/header/HeaderOne";

const DemoData = SplashData[0];
const FeatureData = SplashData[1];

const Splash = () => {
  return (
    <>
      <SEO title="Web and Mobile Development" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <SplashBanner />

        <div className="section main-demo-area bg-color-light" id="splash-demo">
          <div className="container">
            <div className="section-heading heading-left">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-7">
                  <h2 className="title">We help bring your brand to life!</h2>
                </div>
                <div className="col-xl-4 col-lg-5 offset-xl-2">
                  <p>
                    Having someone to turn to as a business owner to ask all of
                    the hard marketing questions, is invaluable.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {DemoData.map((data) => (
                <div className="col-md-6" key={data.id}>
                  <div className="single-demo">
                    <Link>
                      <span className="thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}${data.height_img}`}
                          alt={data.title}
                        />
                      </span>
                      <h4 className="title">{data.title}</h4>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ul className="shape-group list-unstyled">
            <li className="shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-35.png"}
                alt="Shape"
              />
            </li>
            <li className="shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-8.png"}
                alt="Shape"
              />
            </li>
          </ul>
        </div>

        <div
          className="section section-padding bg-color-dark splash-features"
          id="splsh-features"
        >
          <div className="container">
            <div className="section-heading heading-light-left">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h2 className="title">
                    Here is how outsourcing for your digital marketing can
                    benefit your brand.
                  </h2>
                </div>
                <div className="col-lg-5 col-md-8">
                  <p>
                    Our specialists work with you to find the right combination
                    for your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {FeatureData.slice(0, 6).map((data) => (
                <div className="col-xl-4 col-md-6" key={data.id}>
                  <div className="services-grid">
                    <div className="thumbnail">
                      <img
                        src={process.env.PUBLIC_URL + data.icon}
                        alt="icon"
                      />
                    </div>
                    <div className="content">
                      <h5
                        className="title"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                      ></h5>
                      <p>{data.para}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/circle-1.png"}
                alt="Circle"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-3.png"}
                alt="Circle"
              />
            </li>
            {/* <li className="shape shape-3">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubbleGrey.png"}
                alt="Circle"
              />
            </li> */}
          </ul>
        </div>

        <div
          className="section section-padding bg-color-light spalsh-why-choose"
          id="splash-why-choose"
        >
          <div className="container">
            <div className="section-heading heading-left">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-7">
                  <h2 className="title">Why choose us?</h2>
                </div>
                <div className="col-xl-4 col-lg-5 offset-xl-2">
                  <p>
                    Every project is built with such efforts that they are ready
                    to meet all of our clients’ expectations.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {FeatureData.slice(9, 12).map((data) => (
                <div className="col-xl-4 col-lg-6" key={data.id}>
                  <div className="why-buy-box">
                    <div className="heading">
                      <div className="icon">
                        <img
                          src={process.env.PUBLIC_URL + data.icon}
                          alt="Thumb"
                        />
                      </div>
                      <h5
                        className="title"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                      ></h5>
                    </div>
                    <p>{data.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="line-shape">
            <img
              src={process.env.PUBLIC_URL + "/images/others/line-6.png"}
              alt="Line"
            />
          </div>
        </div>
        <SplashCta />
        <SplashFooter />
      </main>
    </>
  );
};

export default Splash;
