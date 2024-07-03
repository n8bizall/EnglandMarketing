import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import CtaLayoutServices from "../component/cta/CtaLayoutServices";
import SectionTitle from "../elements/section-title/SectionTitle";
import ServiceProp from "../component/service/ServiceProp";
import ServiceData from "../data/service/ServiceMain.json";
import { slugify } from "../utils";
import SplashFooter from "../common/footer/SplashFooter";

const allData = ServiceData;

const ServiceVirtualManager = () => {
  const designData = allData.filter(
    (data) => slugify(data.cate ? data.cate : "") === "design"
  );
  const developmentData = allData.filter(
    (data) => slugify(data.cate ? data.cate : "") === "development"
  );
  const marketingData = allData.filter(
    (data) => slugify(data.cate ? data.cate : "") === "online-marketing"
  );
  const businessData = allData.filter(
    (data) => slugify(data.cate ? data.cate : "") === "business"
  );
  const technologyData = allData.filter(
    (data) => slugify(data.cate ? data.cate : "") === "technology"
  );
  const strategyData = allData.filter(
    (data) => slugify(data.cate ? data.cate : "") === "content-strategy"
  );

  return (
    <>
      <SEO title="Service One" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BcrumbBannerOne
          title="Virtual Marketing Manager"
          paragraph="Have you always wanted a marketing manager but couldn't find the right fit?"
          styleClass=""
        />
        <div className="service-scroll-navigation-area">
          {/* Service Nav */}

          <nav
            id="onepagenav"
            className="service-scroll-nav navbar onepagefixed"
          >
            <div className="container">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="#section1">
                    Design
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section2">
                    Development
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section3">
                    Online Marketing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section4">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section5">
                    Technology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section6">
                    Content Strategy
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="section section-padding" id="section1">
            <div className="container">
              <SectionTitle
                subtitle="Service"
                title="Design"
                description=""
                textAlignment="heading-left"
                textColor=""
              />
              <div className="row">
                <ServiceProp
                  colSize="col-lg-4 col-md-6"
                  serviceStyle="service-style-2"
                  serviceData={designData}
                />
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light" id="section2">
            <div className="container">
              <SectionTitle
                subtitle="Service"
                title="Development"
                description=""
                textAlignment="heading-left"
                textColor=""
              />
              <div className="row">
                <ServiceProp
                  colSize="col-lg-4 col-md-6"
                  serviceStyle="service-style-2"
                  serviceData={developmentData}
                />
              </div>
            </div>
          </div>

          <div className="section section-padding" id="section3">
            <div className="container">
              <SectionTitle
                subtitle="Service"
                title="Online Marketing"
                description=""
                textAlignment="heading-left"
                textColor=""
              />
              <div className="row">
                <ServiceProp
                  colSize="col-lg-4 col-md-6"
                  serviceStyle="service-style-2"
                  serviceData={marketingData}
                />
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light" id="section4">
            <div className="container">
              <SectionTitle
                subtitle="Service"
                title="Business"
                description=""
                textAlignment="heading-left"
                textColor=""
              />
              <div className="row">
                <ServiceProp
                  colSize="col-lg-4 col-md-6"
                  serviceStyle="service-style-2"
                  serviceData={businessData}
                />
              </div>
            </div>
          </div>

          <div className="section section-padding" id="section5">
            <div className="container">
              <SectionTitle
                subtitle="Service"
                title="Technology"
                description=""
                textAlignment="heading-left"
                textColor=""
              />
              <div className="row">
                <ServiceProp
                  colSize="col-lg-4 col-md-6"
                  serviceStyle="service-style-2"
                  serviceData={technologyData}
                />
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light" id="section6">
            <div className="container">
              <SectionTitle
                subtitle="Service"
                title="Content strategy"
                description=""
                textAlignment="heading-left"
                textColor=""
              />
              <div className="row">
                <ServiceProp
                  colSize="col-lg-4 col-md-6"
                  serviceStyle="service-style-2"
                  serviceData={strategyData}
                />
              </div>
            </div>
          </div>
        </div>
        <CtaLayoutServices />
        <SplashFooter parentClass="" />
      </main>
    </>
  );
};

export default ServiceVirtualManager;
