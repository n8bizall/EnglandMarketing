import React from "react";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import CtaLayoutServices from "../component/cta/CtaLayoutServices";
import SectionTitle from "../elements/section-title/SectionTitle";
import ServiceProp from "../component/service/ServiceProp";
import ServiceData from "../data/service/ServiceMain.json";
import { slugify } from "../utils";
import SplashFooter from "../common/footer/SplashFooter";
import SplashHeader from "../common/header/SplashHeader";

const allData = ServiceData;

const ServiceOnlineMarketing = () => {
  const marketingData = allData.filter(
    (data) => slugify(data.cate ? data.cate : "") === "online-marketing"
  );

  return (
    <>
      <SEO title="Service One" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <SplashHeader />
        <BcrumbBannerOne
          title="Best solutions for your business"
          paragraph="Checkout our full array of services"
          styleClass=""
        />
        <div className="service-scroll-navigation-area">
          {/* Service Nav */}

          {/* <nav
            id="onepagenav"
            className="service-scroll-nav navbar onepagefixed"
          >
            <div className="container">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="#section1">
                    Online Marketing
                  </a>
                </li>
              </ul>
            </div>
          </nav> */}

          <div className="section section-padding" id="section1">
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
        </div>
        <CtaLayoutServices />
        <SplashFooter parentClass="" />
      </main>
    </>
  );
};

export default ServiceOnlineMarketing;
