import React, { useState } from "react";
import Menu from "./menuItems/Menu";
import RightNavIcons from "./rightNavIcons/RightNavIcons";
import SiteLogo from "./site-logo/SiteLogo";
import "./nav.scss";
import { navMenuLists } from "./menuItems/navMenuLists";
import { MdOutlineSegment } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";

const Nav = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div id="Nav">
      <SiteLogo />
      <Menu menuItems={navMenuLists} />
      <RightNavIcons />
      <div className="toggleMenu" onClick={toggleMenu}>
        {!isMenuOpen ? (
          <MdOutlineSegment size={28} className="open" />
        ) : (
          <RiCloseLargeLine size={20} className="close" />
        )}
      </div>
    </div>
  );
};

export default Nav;
