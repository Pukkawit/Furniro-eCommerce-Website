import React from "react";
import "./furniroFuniture.scss";
import { Image, Video, Transformation } from "cloudinary-react";
import { furniroFuniture } from "../../../assets/cloudImages/cloudImages";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";

const FurniroFurniture = () => {
  return (
    <div id="furniroFuniture">
      <h5>Share your setup with</h5>
      <h2>#FurniroFurniture</h2>
      <div className="images">
        <div className="leftBlock">
          <div className="block1">
            <LazyLoadComponent>
              <Image
                cloudName="dseqhd3ht"
                publicId={furniroFuniture.funiroFurniture1}
              >
                <Transformation crop="scale" width="200" angle="0" />
              </Image>
            </LazyLoadComponent>
            <LazyLoadComponent>
              <Image
                cloudName="dseqhd3ht"
                publicId={furniroFuniture.funiroFurniture2}
              >
                <Transformation crop="scale" width="200" angle="0" />
              </Image>
            </LazyLoadComponent>
          </div>
          <div className="block2">
            <LazyLoadComponent>
              <Image
                cloudName="dseqhd3ht"
                publicId={furniroFuniture.funiroFurniture6}
              >
                <Transformation crop="scale" width="200" angle="0" />
              </Image>
            </LazyLoadComponent>
            <LazyLoadComponent>
              <Image
                cloudName="dseqhd3ht"
                publicId={furniroFuniture.funiroFurniture7}
              >
                <Transformation crop="scale" width="200" angle="0" />
              </Image>
            </LazyLoadComponent>
          </div>
        </div>

        <div className="middleBlock">
          <LazyLoadComponent>
            <Image
              cloudName="dseqhd3ht"
              publicId={furniroFuniture.funiroFurniture3}
            >
              <Transformation crop="scale" width="200" angle="0" />
            </Image>
          </LazyLoadComponent>
        </div>

        <div className="rightBlock">
          <div className="block3">
            <LazyLoadComponent>
              <Image
                cloudName="dseqhd3ht"
                publicId={furniroFuniture.funiroFurniture4}
              >
                <Transformation crop="scale" width="200" angle="0" />
              </Image>
            </LazyLoadComponent>
            <LazyLoadComponent>
              <Image
                cloudName="dseqhd3ht"
                publicId={furniroFuniture.funiroFurniture5}
              >
                <Transformation crop="scale" width="200" angle="0" />
              </Image>
            </LazyLoadComponent>
          </div>
          <div className="block4">
            <LazyLoadComponent>
              <Image
                cloudName="dseqhd3ht"
                publicId={furniroFuniture.funiroFurniture8}
              >
                <Transformation crop="scale" width="200" angle="0" />
              </Image>
            </LazyLoadComponent>
            <LazyLoadComponent>
              <Image
                cloudName="dseqhd3ht"
                publicId={furniroFuniture.funiroFurniture9}
              >
                <Transformation crop="scale" width="200" angle="0" />
              </Image>
            </LazyLoadComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurniroFurniture;
