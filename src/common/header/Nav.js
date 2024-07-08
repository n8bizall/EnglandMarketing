import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/seo"}>SEO MARKETING</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/sem"}>
            SEARCH ENGINE MARKETING
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/social-media-ads"}>
            SOCIAL MEDIA
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/web-mobile-logo-design"}>
            WEBSITES & LOGOS
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/blog-grid/"}>BLOG</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
