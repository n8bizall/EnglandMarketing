import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import CtaLayoutOne from "../component/cta/CtaLayoutSeo";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import BlogSidebar from "../component/blog/BlogSidebar";
import BlogListOne from "../component/blog/BlogListOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import SplashFooter from "../common/footer/SplashFooter";

const BlogGridView = () => {
  return (
    <>
      <SEO title="Blog Grid" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BreadCrumbOne title="Blogs" page="Blog" />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                <BlogListOne />
              </div>
              <div className="col-lg-4">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
        <CtaLayoutOne />
        <SplashFooter parentClass="" />
      </main>
    </>
  );
};

export default BlogGridView;
