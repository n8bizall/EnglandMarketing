import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";

const Datas = [
  {
    id: 1,
    title: "Audience Engagement",
    para: "Social media provides a direct channel to engage with your audience. It's a dynamic platform where you can build relationships, foster brand loyalty, and receive real-time feedback",
  },
  {
    id: 2,
    title: "Brand Visibility and Awareness",
    para: "Social media is a powerful tool for increasing brand visibility. It allows you to showcase your products or services, share your brand story, and reach a broader audience through targeted content and campaigns.",
  },
  {
    id: 3,
    title: "Driving Website Traffic",
    para: "Engaging content on social media can drive traffic to your website, increasing the likelihood of conversions. Social platforms serve as a bridge between your audience and your website, facilitating seamless navigation and being a catalyst for your SEO efforts.",
  },
  {
    id: 4,
    title: "Staying Competitive",
    para: "In today's digital landscape, a strong social media presence is not just good to have, it is essential for staying competitive. Businesses that actively leverage social platforms not only reach wider audiences but also stay top-of-mind among their target demographic.",
  },
];

const AboutSocialMedia = () => {
  return (
    <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
      <div className="container">
        <SectionTitle
          subtitle="Here are some problems we solve"
          title="Why choose England Marketing?"
          description=""
          textAlignment="heading-left heading-light-left mb--100"
          textColor=""
        />

        <div className="row">
          {Datas.map((data) => (
            <div className="col-lg-4" key={data.id}>
              <div className="about-quality">
                <h3 className="sl-number">{data.id}</h3>
                <h5 className="title">{data.title}</h5>
                <p>{data.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/circle-1.png"}
            alt="Circle"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-3.png"}
            alt="Circle"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"}
            alt="Circle"
          />
        </li>
      </ul>
    </div>
  );
};

export default AboutSocialMedia;
