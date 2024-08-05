import React from "react";
import FormOne from "../contact/FormOne";
import Accordion from "react-bootstrap/Accordion";
import {
  FaCompress,
  FaMoneyCheck,
  FaLaptopCode,
  FaBullseye,
} from "react-icons/fa";

const AboutSEM = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us">
              <div className="section-heading heading-left">
                <span className="subtitle">SEM</span>
                <h3 className="title">Why choose us?</h3>
              </div>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaCompress /> Strategy
                  </Accordion.Header>
                  <Accordion.Body>
                    Each campaign is meticulously crafted to maximize your
                    visibility, attract your key target audiences, and drive
                    measurable leads and results. Thorough keyword research
                    allows me to target the most reliable and active keywords
                    being searched online for your type of business. The setup
                    of an SEM campaign might just be the most important and
                    difficult part of the program - and we have spent decades
                    mastering this chore.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaMoneyCheck /> Budget Management
                  </Accordion.Header>
                  <Accordion.Body>
                    Your advertising budget is a precious resource, and I treat
                    it as such. I manage budgets effectively, allocating funds
                    where they deliver the most impact. Continuous monitoring
                    and A/B Testing ensures that your Return on Investment (ROI)
                    is maximized throughout the campaign. Through usage of
                    Pixels and tags, I am able to easily track success and
                    adjust as needed.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FaBullseye /> Target Audience
                  </Accordion.Header>
                  <Accordion.Body>
                    SEM is about reaching the right audience at the right time.
                    I utilize advanced targeting options to hone in on specific
                    demographics, locations, and user behaviors. This precision
                    ensures that your ads are presented to those who are most
                    likely to convert into customers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <FaLaptopCode /> Landing Page
                  </Accordion.Header>
                  <Accordion.Body>
                    A seamless user experience is critical for max conversions.
                    Our team will optimize landing pages to align with ad
                    messaging, providing a cohesive journey for users from click
                    to conversion. This strategic approach enhances the
                    effectiveness of your campaigns. We ensure that this key
                    part of your campaign is successful.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="contact-form-box shadow-box mb--30">
              <h3 className="title">Get a free SEM quote</h3>
              <FormOne />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSEM;
