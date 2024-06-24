import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menuItems.scss";
import "../../nav/nav.scss";

const Menu = ({ menuItems, helpMenuItems }) => {
  return (
    <div>
      <ul id="menuItems">
        {menuItems
          ? menuItems.map((route) => {
              return (
                <li
                  style={{
                    display:
                      route.navName === "Error-URL" ||
                      route.navName === "Product-Page" ||
                      route.navName === "ViewProduct"
                        ? "none"
                        : "block",
                  }}
                  key={route.id}
                >
                  <Link to={route.path}>{route.navName}</Link>
                </li>
              );
            })
          : null}
        {helpMenuItems
          ? helpMenuItems.map((route) => {
              return (
                <li key={route.id}>
                  <Link to={route.path}>{route.text}</Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Menu;
