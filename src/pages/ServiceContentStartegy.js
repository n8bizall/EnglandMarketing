import React from "react";
import BcrumbBannerTwo from "../elements/breadcrumb/BcrumbBannerTwo";
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

const ServiceContentStrategy = () => {
  const strategyData = allData.filter(
    (data) => slugify(data.cate ? data.cate : "") === "content-strategy"
  );

  return (
    <>
      <SEO title="Service One" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <SplashHeader />
        <BcrumbBannerTwo
          title="Content Strategy For Any Size Business"
          paragraph="A well-crafted content strategy is essential for businesses of all sizes. It involves planning, creating, and distributing valuable and consistent content to attract and retain a clearly defined audience."
          styleClass=""
        />
        <div className="service-scroll-navigation-area">
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

export default ServiceContentStrategy;
