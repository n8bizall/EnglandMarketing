import React from "react";
import TestimonialData from "../../data/testimonial/TestimonialData.json";

const allData = TestimonialData;

const TestimonialItem = ({ colSize, itemShow, startIndex = 0 }) => {
  // Calculate the end index ensuring it doesn't exceed the length of the array
  const endIndex = Math.min(startIndex + itemShow, allData.length);

  return (
    <>
      {allData.slice(startIndex, endIndex).map((data, index) => (
        <div className={`${colSize}`} key={index}>
          <div className="testimonial-grid">
            <span className="social-media">
              <img src={process.env.PUBLIC_URL + data.from} alt="Yelp" />
            </span>
            <p>{data.description}</p>
            <div className="author-info">
              <div className="thumb">
                <img
                  src={process.env.PUBLIC_URL + data.authorimg}
                  alt="Google Review"
                />
              </div>
              <div className="content">
                <span className="name">{data.authorname}</span>
                <span className="designation">{data.authordesig}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialItem;
