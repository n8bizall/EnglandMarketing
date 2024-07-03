import React from "react";
import { useParams } from "react-router-dom";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import CtaLayoutOne from "../component/cta/CtaLayoutSeo";
import SectionTitle from "../elements/section-title/SectionTitle";
import { slugify } from "../utils";
import ServiceData from "../data/service/ServiceMain.json";
import AboutTwo from "../component/about/AboutSEM";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import Tilty from "react-tilty";
import SplashFooter from "../common/footer/SplashFooter";

const allServiceData = ServiceData;

const ServiceDetails = () => {
  const params = useParams();
  const serviceSlug = params.slug;

  const getServiceData = allServiceData.filter(
    (data) => slugify(data.title) === serviceSlug
  );
  const detailsService = getServiceData[0];

  return (
    <>
      <SEO title="Service Details" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BcrumbBannerOne
          title={detailsService.title}
          paragraph={detailsService.description}
          styleClass=""
          mainThumb="/images/banner/banner-thumb-4.png"
        />
        <AboutTwo />

        <div className="section section-padding bg-color-light pb--70">
          <SectionTitle
            subtitle={detailsService.process.sectionSub}
            title={detailsService.process.sectionTitle}
            description={detailsService.process.para}
            textAlignment=""
            textColor="mb--90"
          />
          <div className="container">
            {detailsService.process.steps.map((data, index) => (
              <div
                key={index}
                className={`process-work ${
                  index % 2 === 1 ? "content-reverse" : ""
                }`}
              >
                <Tilty perspective={2000}>
                  <div className="thumbnail">
                    <img
                      src={process.env.PUBLIC_URL + data.thumb}
                      alt="Thumbnail"
                    />
                  </div>
                </Tilty>
                <div className="content">
                  <span className="subtitle">{data.subtitle}</span>
                  <h3 className="title">{data.title}</h3>
                  <p>{data.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
          <ul className="shape-group-17 list-unstyled">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"}
                alt="Bubble"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"}
                alt="Bubble"
              />
            </li>
            <li className="shape shape-3">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
                alt="Line"
              />
            </li>
            <li className="shape shape-4">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
                alt="Line"
              />
            </li>
            <li className="shape shape-5">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
                alt="Line"
              />
            </li>
            <li className="shape shape-6">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
                alt="Line"
              />
            </li>
          </ul>
        </div>
        <CtaLayoutOne />
        <SplashFooter parentClass="" />
      </main>
    </>
  );
};

export default ServiceDetails;
