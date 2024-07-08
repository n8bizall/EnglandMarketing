import React, { useState } from "react";
import Logo from "../../elements/logo/Logo";
import Nav from "../../common/header/Nav";
import OffcanvasMenu from "./OffcanvasMenu";
import StickyHeader from "./StickyHeader";
import SwitcherHeader from "../../elements/switcher/SwitcherHeader";
import MobileMenu from "./MobileMenu";

const HeaderOne = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const OffcanvasHandleClose = () => setShowOffcanvas(false);
  const OffcanvasHandleShow = () => setShowOffcanvas(true);

  const sticky = StickyHeader(100);

  const MobileMenuHandler = () => {
    const mobileMenu = document.querySelector(".mobilemenu-popup");
    const body = document.querySelector("body");

    if (mobileMenu && body) {
      mobileMenu.classList.toggle("show");
      body.classList.toggle("mobilemenu-show");

      const menuItems = document.querySelectorAll(
        ".mobilemenu-popup .menu-item-has-children > a"
      );
      menuItems.forEach((item) => {
        item.addEventListener("click", function (event) {
          // event.preventDefault();

          const submenu = this.parentElement.querySelector(".em-submenu");
          if (submenu) {
            submenu.classList.toggle("active");
            this.classList.toggle("open");
          }
        });
      });
    }
  };

  return (
    <>
      <header className="header em-header header-style-1">
        <div className={`em-mainmenu ${sticky ? "em-sticky" : ""}`}>
          <div className="container">
            <div className="header-navbar">
              <div className="header-logo">
                <Logo
                  limage="/images/logohorizontal.jpg"
                  dimage="/images/logohorizontal.jpg"
                  simage="/images/logohorizontal.jpg"
                />
              </div>
              <div className="header-main-nav">
                <Nav />
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="sidemenu-btn d-lg-block d-none">
                    <button className="btn-wrap" onClick={OffcanvasHandleShow}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                  <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                    <button className="btn-wrap" onClick={MobileMenuHandler}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                  <li className="my_switcher d-block d-lg-none">
                    <SwitcherHeader />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffcanvasMenu
        offcanvasShow={showOffcanvas}
        offcanvasHide={OffcanvasHandleClose}
      />
      <MobileMenu MobileHandler={MobileMenuHandler} />
    </>
  );
};

export default HeaderOne;
