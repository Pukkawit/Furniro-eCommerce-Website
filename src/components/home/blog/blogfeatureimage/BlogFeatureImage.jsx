import React from "react";
import "./blogFeatureImage.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BlogFeatureImage = ({ imgSrc, role, date, category, title, excerpt }) => {
  return (
    <div id="BlogFeatureImage">
      <div className="left">
        <div className="feature-image-roles">
          <div className="feature-image">
            <LazyLoadImage src={imgSrc} effect="blur" />
          </div>
          <div className="role-date-category">
            <div className="role item">
              <img src="../../../src/assets/icons/admin-users.svg" alt="" />
              <p>{role}</p>
            </div>
            <div className="date item">
              <img src="../../../src/assets/icons/calendar.svg" alt="" />
              <p>{date}</p>
            </div>
            <div className="category item">
              <img src="../../../src/assets/icons/tag.svg" alt="" />
              <p>{category}</p>
            </div>
          </div>
        </div>
        <div className="excerpt">
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogFeatureImage;
