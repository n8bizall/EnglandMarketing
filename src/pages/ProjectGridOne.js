import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import WebCta from "../component/cta/WebCta";
import ProjectOne from "../component/project/ProjectOne";
import SplashFooter from "../common/footer/SplashFooter";

const ProjectGridOne = () => {
  return (
    <>
      <SEO title="Project Two Column" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BcrumbBannerOne
          title="Our Projects"
          paragraph="We deliver tailored social media marketing solutions that drive brand awareness, manage crises, launch products, increase website traffic, and enhance event attendance, achieving remarkable growth for our clients.
                "
          styleClass=""
          mainThumb="/images/banner/banner-thumb-1.png"
        />
        <ProjectOne />
        <WebCta />
        <SplashFooter parentClass="" />
      </main>
    </>
  );
};

export default ProjectGridOne;
