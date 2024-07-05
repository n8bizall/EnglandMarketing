import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
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
        {/* <li className="menu-item-has-children">
          <Link>
            OUR EXPERTISE <FaAngleDown />
          </Link>
          <ul className="em-submenu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/service-content-strategy"}>
                Content Strategy
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/service-development"}>
                Development
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/service-online-marketing"}>
                Online Marketing
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/service-technology"}>
                Technoloy
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/service-business"}>
                Business
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/service-design"}>
                Design
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/service-virtual-manager"}>
                Virtual Marketing Manager
              </Link>
            </li>
          </ul>
        </li> */}

        {/* <li className="menu-item-has-children">
          <Link to="#">
            Pages <FaAngleDown />
          </Link>
          <ul className="em-submenu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/our-office"}>
                Our Office
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/case-study"}>
                Case Study
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/case-details/whitehorse"}>
                Case Study Details
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/team"}>Team</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/team-details/jane-cooper"}>
                Team Details
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/our-clients"}>
                Our Clients
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/testimonials"}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/pricing-table"}>
                Pricing Table
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/typography"}>
                Typography
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/404"}>404 Page</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/coming-soon"}>
                Coming Soon
              </Link>
            </li>
          </ul>
        </li> */}
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/blog-grid/"}>BLOG</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
