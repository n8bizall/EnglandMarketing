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
import HeaderOne from "../common/header/HeaderOne";

const allData = ServiceData;

const ServiceTechnology = () => {
  const technologyData = allData.filter(
    (data) => slugify(data.cate ? data.cate : "") === "technology"
  );

  return (
    <>
      <SEO title="Service One" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BcrumbBannerOne
          title="Best solutions for your business"
          paragraph="Checkout our full array of services"
          styleClass=""
        />
        <div className="service-scroll-navigation-area">
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
                  serviceData={technologyData}
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

export default ServiceTechnology;
