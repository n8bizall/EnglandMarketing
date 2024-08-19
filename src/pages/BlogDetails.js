import React from "react";
import { useParams } from "react-router-dom";
import HeaderOne from "../common/header/HeaderOne";
import BlogData from "../data/blog/BlogData.json";

import BlogSidebar from "../component/blog/BlogSidebar";
import BlogAuthor from "../component/blog/BlogAuthor";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import SplashFooter from "../common/footer/SplashFooter";

const allBlogData = BlogData;

const BlogDetails = () => {
  const params = useParams();
  const blogId = parseInt(params.id);

  const getBlogData = allBlogData.filter((blog) => blog.id === blogId);
  const detailsBlog = getBlogData[0];

  return (
    <>
      <SEO title={detailsBlog.title} />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                <div className="single-blog">
                  <div className="single-blog-content blog-grid">
                    <div className="author">
                      <div className="author-thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}/${detailsBlog.author_avatar}`}
                          alt="Blog Author"
                        />
                      </div>
                      <div className="info">
                        <h6 className="author-name">
                          {detailsBlog.author_name}
                        </h6>
                        <ul className="blog-meta list-unstyled">
                          <li>{detailsBlog.post_date}</li>
                          <li>{detailsBlog.read_time}</li>
                        </ul>
                      </div>
                    </div>
                    {detailsBlog.body.map((data, i) => (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: data }}
                      ></div>
                    ))}
                  </div>
                </div>
                <BlogAuthor data={detailsBlog} />
                {/* <Comment /> */}
              </div>
              <div className="col-lg-4">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>

        <SplashFooter parentClass="" />
      </main>
    </>
  );
};

export default BlogDetails;
