import React, { useState } from "react";
import HeroSection from "./heroSection/HeroSection";
import BrowseRange from "./BrowseRange/BrowseRange";
import OurProducts from "./ourProducts/OurProducts";
import RoomsInspiration from "./roomsInspiration/RoomsInspiration";
import FurniroFurniture from "./furniroFurniture/FurniroFurniture";

const Home = () => {
  const [displayHome, setDisplayHome] = useState(true);

  return (
    <div>
      <HeroSection />
      <BrowseRange />
      <OurProducts />
      <RoomsInspiration />
      <FurniroFurniture />
    </div>
  );
};

export default Home;
