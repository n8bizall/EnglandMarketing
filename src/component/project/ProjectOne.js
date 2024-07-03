import React, { useState, useEffect } from "react";
import ProjectPropOne from "./itemProp/ProjectPropOne";
import SectionTitle from "../../elements/section-title/SectionTitle";
import ProjectData from "../../data/project/ProjectData.json";

const AllData = ProjectData;

const ProjectOne = ({ parentClass, colSize, itemShow, columnGap }) => {
  // eslint-disable-next-line
  const [getAllItems] = useState(AllData);
  // eslint-disable-next-line
  const [visiableProject] = useState(itemShow ? itemShow : 6);

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id <= visiableProject));
  }, [getAllItems, visiableProject]);

  return (
    <>
      <div
        className={`section section-padding-2 ${
          parentClass ? parentClass : ""
        }`}
      >
        <div className="container">
          <SectionTitle
            subtitle="Our Project"
            title="Some of our <br>
                        finest work."
            textAlignment="heading-left mb--40"
            textColor=""
          />

          <div className={`row ${columnGap ? columnGap : "row-35"}`}>
            {visibleItems.map((data) => (
              <div className={colSize ? colSize : "col-md-6"} key={data.id}>
                <ProjectPropOne projectStyle="" portfolio={data} />
              </div>
            ))}
          </div>
        </div>
        <ul className="shape-group-7 list-unstyled">
          <li className="shape shape-1">
            <img
              src={process.env.PUBLIC_URL + "/images/others/circle-2.png"}
              alt="circle"
            />
          </li>
          <li className="shape shape-2">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-15.png"}
              alt="Line"
            />
          </li>
          <li className="shape shape-3">
            <img
              src={process.env.PUBLIC_URL + "/images/others/bubble-13.png"}
              alt="Line"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProjectOne;
