import React from "react";
import "./overlay.scss";

const Overlay = ({ actionOverlay }) => {
  return (
    <div
      className="overlay"
      onClick={actionOverlay ? actionOverlay : null}
    ></div>
  );
};

export default Overlay;
