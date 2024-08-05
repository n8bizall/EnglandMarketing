import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import TestimonialPropOne from "./TestimonialPropOne";

const TestimonialSocial = () => {
  return (
    <div className="section section-padding">
      <div className="container">
        <SectionTitle
          title="From getting started..."
          description="To every detail we will handle all of your social media management."
          textAlignment="heading-left"
          textColor=""
        />
        <div className="row">
          <TestimonialPropOne colSize="col-lg-4" itemShow={3} startIndex={6} />
        </div>
      </div>
      <ul className="shape-group-4 list-unstyled">
        <li className="shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble4Small.png"}
            alt="Bubble"
          />
        </li>
      </ul>
    </div>
  );
};

export default TestimonialSocial;
