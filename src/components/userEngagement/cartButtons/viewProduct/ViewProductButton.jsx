import React from "react";

const ViewProductButton = ({ actionViewProduct }) => {
  return (
    <>
      <button className="view-product-button" onClick={actionViewProduct}>
        View
      </button>
    </>
  );
};

export default ViewProductButton;
