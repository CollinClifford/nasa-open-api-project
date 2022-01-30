import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <nav>
      <div className="yo">
        <ul id="accordionSidebar">
          <li className="name">
            <Link to="/">Collin'S NASA project</Link>
          </li>
          <li a>
            <NavLink exact activeClassName="active" to="/dashboard">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/pod">
              Astrology Picture of the Day
            </NavLink>
          </li>
          {/* <li>
            <NavLink exact activeClassName="active" to="/neows">
              Near Earth Objects
            </NavLink>
          </li> */}
          <li>
            <NavLink exact activeClassName="active" to="/marsrover">
              Mars Rover Photos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
