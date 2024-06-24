import React from "react";
import Feature from "../featuresComposition/feature/Feature";
import "./featuresComposition.scss";

const FeaturesComposition = () => {
  return (
    <div id="featuresComposition">
      <div className="features">
        <Feature
          title={"High Quality"}
          imgSrc={"../../../src/assets/icons/trophy.svg"}
          description={"crafted from top materials"}
        />
        <Feature
          title={"Warranty Protection"}
          imgSrc={"../../../src/assets/icons/guarantee.svg"}
          description={"Over 2 years"}
        />
        <Feature
          title={"Free Shipping"}
          imgSrc={"../../../src/assets/icons/shipping.svg"}
          description={"Order over 150 $"}
        />
        <Feature
          title={"24 / 7 Support"}
          imgSrc={"../../../src/assets/icons/customer-support.svg"}
          description={"Dedicated support"}
        />
      </div>
    </div>
  );
};

export default FeaturesComposition;
