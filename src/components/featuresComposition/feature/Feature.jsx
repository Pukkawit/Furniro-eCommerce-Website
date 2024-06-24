import React from "react";
import "./feature.scss";

const Feature = ({ imgSrc, title, description }) => {
  return (
    <div id="feature">
      <img src={imgSrc} alt="" />
      <div className="title">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
