import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
export default function Menu() {
  return (
    <div className="menu">
      <h3 className="menu--title">BLACK BEHAVIOUR</h3>
      <div className="menu--nav">
        <NavLink className="menu--link" to="/courses">
          OUR COURSES
        </NavLink>
        <NavLink className="menu--link" to="/about-us">
          ABOUT US
        </NavLink>
        <NavLink className="menu--link" to="/contact">
          GET IN TOUCH
        </NavLink>
      </div>
    </div>
  );
}
