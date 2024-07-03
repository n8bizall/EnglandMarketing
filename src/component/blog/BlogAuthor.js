import React from "react";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedin,
  FaInstagram,
  FaVimeoV,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BlogAuthor = ({ data }) => {
  return (
    <div className="blog-author">
      <div className="author">
        <div className="author-thumb">
          <img
            src={process.env.PUBLIC_URL + `/${data.author_avatar}`}
            alt="Blog Author"
          />
        </div>
        <div className="info">
          <h5 className="title">{data.author_name}</h5>
          <p>{data.author_para}</p>
          <ul className="social-share list-unstyled">
            <li>
              <a href={data.social[0].facebook} target="_blank">
                <FaFacebookF />
              </a>
            </li>

            <li>
              <a href={data.social[0].linkedin} target="_blank">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogAuthor;
