import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";

const Datas = [
  {
    id: 1,
    title: "Expanding Market Reach",
    para: "As a niche craft brewery, reaching a wider audience was a constant struggle. England Marketing stepped in with a creative social media campaign that showcased our unique brewing process and the stories behind our beers. They organized virtual brewery tours and engaged beer enthusiasts through interactive polls and contests. The result was phenomenal – our online following tripled, and we started receiving orders from across the country. England Marketing helped us tap into markets we never thought possible!",
  },
  {
    id: 2,
    title: "Crisis Management and Reputation Repair",
    para: "When our company faced a PR crisis, we were at a loss on how to handle the backlash. England Marketing's crisis management expertise on social media was a lifesaver. They quickly crafted a transparent communication plan, addressing customer concerns and showcasing our corrective actions. Their strategic use of social media turned the tide in our favor, and we saw a significant improvement in customer sentiment within weeks. England Marketing not only helped us regain our reputation but also strengthened our relationship with our customers.",
  },
  {
    id: 3,
    title: "Driving Website Traffic",
    para: "Our website was getting very little traffic, which impacted our sales. England Marketing devised a compelling social media strategy that included regular blog posts, infographics, and video content linked back to our site. They also implemented targeted ads that brought in the right audience. The results were astounding – a 300% increase in website visits and a 45% boost in sales conversions. Thanks to England Marketing, our online presence is now stronger than eve",
  },
  {
    id: 4,
    title: "Launching New Products",
    para: "We were nervous about launching our new skincare line, unsure of how it would be received. England Marketing took charge of our social media launch campaign, creating buzz through teasers, influencer reviews, and live unboxing events. Their strategy created a huge anticipation and excitement around our products. On launch day, we sold out within hours! The campaign’s success exceeded our expectations and set a new benchmark for our future launches.",
  },
  {
    id: 5,
    title: "Increasing Event Attendance",
    para: "Our annual tech conference was struggling with low attendance. England Marketing transformed our promotional efforts by leveraging social media. They created engaging event content, partnered with industry influencers, and ran targeted ad campaigns to attract attendees. They even managed live updates and interactive sessions during the event. The conference saw a 50% increase in attendance compared to previous years, and the online engagement was off the charts. England Marketing turned our event into a major success!",
  },
];

const AboutSocialMedia = () => {
  return (
    <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
      <div className="container">
        <SectionTitle
          subtitle="Here are some problems we solve"
          title="Why should you work with us?"
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
