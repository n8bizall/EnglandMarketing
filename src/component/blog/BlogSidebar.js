import React from "react";
import { Link } from "react-router-dom";
import WidgetPost from "./widget/WidgetPost";
import WidgetCategory from "./widget/WidgetCategory";
import {
  FaSearch,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BlogSidebar = () => {
  return (
    <div className="em-sidebar">
      <div className="widget widget-search">
        <h4 className="widget-title">Search</h4>
        <form action="#" className="blog-search">
          <input type="text" placeholder="Search…" />
          <button className="search-button">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="widget widget-categories">
        <h4 className="widget-title">Categories</h4>
        <WidgetCategory />
      </div>
      {/* <div className="widget widge-social-share">
        <div className="blog-share">
          <h5 className="title">Follow:</h5>
          <ul className="social-list list-unstyled">
            <li>
              <a
                href="https://facebook.com/england.marketing.2024/"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tiffany-england-39374b55/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default BlogSidebar;
