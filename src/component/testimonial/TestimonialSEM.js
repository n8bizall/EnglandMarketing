import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import TestimonialPropOne from "./TestimonialPropOne";

const TestimonialSEM = () => {
  return (
    <div className="section section-padding-equal">
      <div className="container">
        <SectionTitle
          title="From getting started to ongoing campaigns..."
          description="We've have a history of driving positive outcomes with SEM. Explore my success stories to check out the impact I've had on businesses just like yours."
          textAlignment="heading-left"
          textColor=""
        />
        <div className="row">
          <TestimonialPropOne colSize="col-lg-4" itemShow={3} startIndex={3} />
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

export default TestimonialSEM;
