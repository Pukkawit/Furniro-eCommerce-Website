import React from "react";
import "./pageHeader.scss";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ page, role }) => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div id="pageHeader">
      <div className="container">
        <img src="../../src/assets/icons/Meubel House_Logos-05.svg" alt="" />
        <h1>{page}</h1>
        <div className="nav">
          <span className="nav-menu home" onClick={handleHome}>
            Home
          </span>
          <img src="../../src/assets/icons/right-angle.svg" alt="" />
          <span className="nav-menu">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
