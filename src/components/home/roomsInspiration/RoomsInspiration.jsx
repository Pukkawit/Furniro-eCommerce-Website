import React, { useState } from "react";
import "./roomInspiration.scss";
import Carousel from "./carousel/Carousel";

const RoomsInspiration = () => {
  return (
    <div id="inspiration">
      <div className="title-left">
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button>Explore More</button>
      </div>
      <Carousel />
    </div>
  );
};

export default RoomsInspiration;
