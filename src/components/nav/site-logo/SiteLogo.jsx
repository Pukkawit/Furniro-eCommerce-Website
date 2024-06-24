import React from "react";
import "../nav.scss";

const SiteLogo = () => {
  return (
    <div className="styleSiteLogo">
      <img
        className="logoSize"
        src="../src/assets/icons/Meubel House_Logos-05.svg"
        alt="website-logo"
      />
      <h1 className="siteName">Furniro</h1>
    </div>
  );
};

export default SiteLogo;
