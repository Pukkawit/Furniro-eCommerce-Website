import React from "react";
import "./browseRange.scss";
import { BrowseImageRange } from "../../../assets/cloudImages/cloudImages";
import { Image, Video, Transformation } from "cloudinary-react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const BrowseRange = () => {
  return (
    <div id="browseRange">
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div id="images">
        <div className="imageComp">
          <LazyLoadComponent>
            <Image cloudName="dseqhd3ht" publicId={BrowseImageRange.dining}>
              <Transformation crop="scale" width="200" angle="0" />
            </Image>
          </LazyLoadComponent>
          <h3>Dining</h3>
        </div>
        <div className="imageComp">
          <LazyLoadComponent>
            <Image cloudName="dseqhd3ht" publicId={BrowseImageRange.living}>
              <Transformation crop="scale" width="200" angle="0" />
            </Image>
          </LazyLoadComponent>
          <h3>Living</h3>
        </div>
        <div className="imageComp">
          <LazyLoadComponent>
            <Image cloudName="dseqhd3ht" publicId={BrowseImageRange.bedroom}>
              <Transformation crop="scale" width="200" angle="0" />
            </Image>
          </LazyLoadComponent>
          <h3>Bedroom</h3>
        </div>
      </div>
    </div>
  );
};

export default BrowseRange;
