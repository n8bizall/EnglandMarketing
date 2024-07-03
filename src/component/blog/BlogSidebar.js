import React from "react";
import WidgetCategory from "./widget/WidgetCategory";
import { FaSearch } from "react-icons/fa";

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
    </div>
  );
};

export default BlogSidebar;
