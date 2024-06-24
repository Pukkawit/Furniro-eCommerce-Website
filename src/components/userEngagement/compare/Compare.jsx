import React from "react";
import "../../userEngagement/userEngagement.scss";

const Compare = ({ compareAction }) => {
  return (
    <div id="action" onClick={compareAction}>
      <img src="../../src/assets/icons/compare-svgrepo-com 1.svg" alt="" />
      <p>Compare</p>
    </div>
  );
};

export default Compare;
