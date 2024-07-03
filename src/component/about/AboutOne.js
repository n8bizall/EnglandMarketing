import React from "react";

const AboutOne = () => {
  return (
    <section className="section section-padding-equal bg-color-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us">
              <div className="section-heading heading-left mb-0">
                <h2 className="title mb--40">​Why does SEO Matter?</h2>
                <p>
                  Visibility and Traffic: SEO ensures your website appears
                  prominently in search engine results, exponentially increasing
                  visibility and attracting organic traffic that lasts and
                  grows.{" "}
                </p>
                <p>
                  Credibility and Trust: Users tend to trust websites that
                  appear at the top of their search results. Nobody scrolls too
                  far down to find a local business anymore. Effective SEO not
                  only boosts your visibility but also establishes credibility
                  and trust among your audience using powerful consistency,
                  reputation management & targeted content creation.{" "}
                </p>
                <p>
                  Cost-Effectiveness: Compared to paid advertising, SEO provides
                  a sustainable and cost-effective way to drive long-term
                  results. Especially with my prices! It's truly an investment
                  into the ongoing success of your entire business and online
                  presence.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="contact-form-box">
              <h3 className="title">Get a free SEO quote now</h3>
              <ul>
                <li>Keyword research</li>
                <li>Website setup for SEO </li>
                <li>Reputation Management</li>
                <li>SEO outside connections</li>
                <li>Content Writing & Blog Creation & Distribution</li>
                <li>
                  Google My Business (maps) Profile Optimization & Business
                  Listings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-6 list-unstyled">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt="line"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
            alt="line"
          />
        </li>
      </ul>
    </section>
  );
};

export default AboutOne;
