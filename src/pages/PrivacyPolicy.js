import React from "react";
import SplashHeader from "../common/header/SplashHeader";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import SplashFooter from "../common/footer/SplashFooter";
import SplashCta from "../component/cta/SplashCta";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO title="Privacy Policy" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <SplashHeader />
        <BreadCrumbOne title="Privacy Policy" page="Privacy Policy" />
        <div className="section-padding privacy-policy-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="privacy-policy-content">
                  <div className="section-title">
                    <h5 className="title">
                      This Privacy policy was published on September 10th, 2021.
                    </h5>
                  </div>
                  <h4>Intro</h4>
                  <p>
                    We are committed to protecting your privacy and ensuring
                    that your personal information is handled in a safe and
                    responsible manner. This Privacy Policy outlines how we
                    collect, use, disclose, and safeguard your information when
                    you visit our website
                  </p>
                  <h4>About England Marketing</h4>
                  <p>
                    Want to contact us?{" "}
                    <a href="mailto:example@EnglandMarketing.com">
                      example@EnglandMarketing.com
                    </a>{" "}
                  </p>
                  <h4>When we collect personal data about you</h4>
                  <ul>
                    <li>Email is a crucial channel in any marketing.</li>
                  </ul>
                  <h4>Type of personal data collected</h4>
                  <p>
                    We may collect personal information that you voluntarily
                    provide to us when you register on the Site, place an order,
                    subscribe to our newsletter, respond to a survey, fill out a
                    form, or use certain other Site features. This may include:
                    Name, Email address, Mailing address, Phone number
                  </p>
                  <h4>The use of cookies and web beacons</h4>
                  <p className="mb--20">
                    We may log information using "cookies." Cookies are small
                    data files stored on your hard drive by a website. Cookies
                    help us make our Site and your visit better.
                  </p>
                  <p className="mb--20">
                    may log information using digital images called web beacons
                    on our Site or in our emails.
                  </p>
                  <p>
                    This information is used to make our Site work more
                    efficiently, as well as to provide business and marketing
                    information to the owners of the Site, and to gather such
                    personal data as browser type and operating system,
                    referring page, path through site, domain of ISP, etc. for
                    the purposes of understanding how visitors use our Site.
                    Cookies and similar technologies help us tailor our Site to
                    your personal needs, as well as to detect and prevent
                    security threats and abuse. If used alone, cookies and web
                    beacons do not personally identify you.
                  </p>
                  <h4>How long we keep your data</h4>
                  <p className="mb--20">
                    We store personal data for as long as we find it necessary
                    to fulfill the purpose for which the personal data was
                    collected, while also considering our need to answer your
                    queries or resolve possible problems. This helps us to
                    comply with legal requirements under applicable laws, to
                    attend to any legal claims/complaints, and for safeguarding
                    purposes.
                  </p>
                  <p>
                    We store personal data for as long as we find it necessary
                    to fulfill the purpose for which the personal data was
                    collected, while also considering our need to answer your
                    queries or resolve possible problems. This helps us to
                    comply with legal requirements under applicable laws, to
                    attend to any legal claims/complaints, and for safeguarding
                    purposes.
                  </p>
                  <h4>Sharing</h4>
                  <p>
                    We do not sell, trade, or rent your personal information to
                    others. We may share generic aggregated demographic
                    information not linked to any personal identification
                    information regarding visitors and users with our business
                    partners, trusted affiliates, and advertisers for the
                    purposes outlined above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SplashCta />
        <SplashFooter parentClass="" />
      </main>
    </>
  );
};

export default PrivacyPolicy;
