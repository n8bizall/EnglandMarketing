import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import TestimonialPropOne from "./TestimonialPropOne";

const TestimonialSEO = () => {
  return (
    <div className="section section-padding">
      <div className="container">
        <SectionTitle
          title=" From traditional strategies... "
          description="To cutting-edge digital solutions, our journey is a testament to adaptability and growth."
          textAlignment="heading-left"
          textColor=""
        />
        <div className="row">
          <TestimonialPropOne colSize="col-lg-4" itemShow={3} startIndex={0} />
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

export default TestimonialSEO;
