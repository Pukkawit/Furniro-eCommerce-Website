import React, { useState } from "react";
import "./StarRating.scss";

const StarRating = ({ rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (index, isHalf) => {
    if (isHalf) {
      setRating(index + 0.5);
    } else {
      setRating(index + 1);
    }
  };

  const handleMouseEnter = (index, isHalf) => {
    if (isHalf) {
      setHoverRating(index + 0.5);
    } else {
      setHoverRating(index + 1);
    }
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const renderStar = (index) => {
    const fill =
      (hoverRating || rating) >= index + 1
        ? "full"
        : (hoverRating || rating) >= index + 0.5
        ? "half"
        : "empty";
    return (
      <div
        key={index}
        className={`star ${fill}`}
        onClick={(e) => {
          const isHalf = e.nativeEvent.offsetX < e.target.clientWidth / 2;
          handleClick(index, isHalf);
        }}
        onMouseEnter={(e) => {
          const isHalf = e.nativeEvent.offsetX < e.target.clientWidth / 2;
          handleMouseEnter(index, isHalf);
        }}
        onMouseLeave={handleMouseLeave}
      >
        <svg viewBox="0 0 24 24">
          <path
            className="star-back"
            d="M12 17.27L18.18 21 15.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 8.46 13.97 5.82 21z"
          />
          <path
            className="star-front"
            d="M12 15.4L8.24 17.67 9.24 13.39 5.91 10.51 10.3 10.13 12 6.1 13.71 10.13 18.09 10.51 14.76 13.39 15.76 17.67z"
          />
        </svg>
      </div>
    );
  };

  return (
    <div className="star-rating">
      {[0, 1, 2, 3, 4].map((index) => renderStar(index))}
    </div>
  );
};

export default StarRating;
