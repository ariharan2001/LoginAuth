import React, { useState } from "react";
import { optionDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "../style/Dropdown.css"; 

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "options-submenu clicked" : "options-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {optionDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;