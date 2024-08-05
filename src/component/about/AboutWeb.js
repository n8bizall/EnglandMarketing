import React from "react";
import FormOne from "../contact/FormOne";
import Accordion from "react-bootstrap/Accordion";
import {
  FaGlobe,
  FaMoneyCheck,
  FaLaptopCode,
  FaBullseye,
} from "react-icons/fa";

const AboutWeb = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us">
              <div className="section-heading heading-right">
                <span className="subtitle">Need to get online?</span>
                <h3 className="title">Why choose us?</h3>
              </div>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaGlobe /> Global Accessibility
                  </Accordion.Header>
                  <Accordion.Body>
                    A website provides a 24/7 online presence, allowing
                    potential customers from your area (or anywhere in the
                    world) to access information about your business at any
                    time. It breaks down geographical barriers, expanding your
                    reach beyond local markets and beyond your current
                    clientele.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaMoneyCheck />
                    Showcase Your Products or Services
                  </Accordion.Header>
                  <Accordion.Body>
                    Your website serves as a virtual storefront, enabling you to
                    showcase your products or services in perfect detail.
                    High-quality visuals, engaging content, and user-friendly
                    navigation all contribute to a positive online experience
                    for your potential & return clients.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FaBullseye /> Marketing and Branding Hub
                  </Accordion.Header>
                  <Accordion.Body>
                    A website is a central hub for your marketing efforts. It
                    allows you to integrate various pixels and back-end code
                    that aids your entire marketing strategy, including SEO,
                    content marketing, social media, SEM & more. The ultimate
                    end- goal is driving traffic to your website, and keeping
                    them there through engaging material and a positive user
                    experience.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <FaLaptopCode /> Customer Engagement and Interaction
                  </Accordion.Header>
                  <Accordion.Body>
                    Interactive features like contact forms, live chat, and
                    social media integration facilitate direct engagement with
                    your audience and help to connect your online presence in
                    fruitful ways. A website provides a platform for customers
                    to inquire, provide feedback, and interact with your
                    business in real-time.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutWeb;
