import React from "react";
import "./imagedescription.scss";

const ImageDescription = ({ number, title, description }) => {
  return (
    <div>
      <div className="white">
        <p>
          {number} &#x23AF;&#x23AF; {title}
        </p>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default ImageDescription;
