import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div
          key={1}
          className="navitem"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
          >
          Options
          {dropdown && <Dropdown />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;