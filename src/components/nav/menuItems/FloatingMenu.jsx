import React from "react";
import { navMenuLists } from "./navMenuLists";
import Menu from "./Menu";
import "./floatingMenu.scss";
import RightNavIcons from "../rightNavIcons/RightNavIcons";

const FloatingMenu = ({ isMenuOpen }) => {
  return (
    <div
      id="floatingMenu"
      className={`floating-menu ${isMenuOpen ? "open" : "closed"}`}
    >
      <Menu menuItems={navMenuLists} />
      <RightNavIcons />
    </div>
  );
};

export default FloatingMenu;
