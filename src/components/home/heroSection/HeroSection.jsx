import React from "react";
import { heroSectionBg } from "../../../assets/cloudImages/cloudImages";
import { Image, Video, Transformation } from "cloudinary-react";
import "./heroSection.scss";
import NewArrival from "./newArrival/NewArrival";

const HeroSection = () => {
  return (
    <div id="heroSection">
      <div className="bg-img">
        <Image cloudName="dseqhd3ht" publicId={heroSectionBg.background}>
          <Transformation crop="scale" angle="0" />
        </Image>
      </div>
      <NewArrival />
    </div>
  );
};

export default HeroSection;
