import React from "react";
import "./underConstruction.scss";
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  let reDirect = useNavigate();

  return (
    <div id="construction">
      <button
        onClick={() => {
          reDirect("/contact");
        }}
      >
        Contact us
      </button>
    </div>
  );
};

export default UnderConstruction;
