import React from "react";
import "../nav.scss";
import { useNavigate } from "react-router-dom";

const SiteLogo = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };
  return (
    <div className="styleSiteLogo" onClick={home} style={{ cursor: "pointer" }}>
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
