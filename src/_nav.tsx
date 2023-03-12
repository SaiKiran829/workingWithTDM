import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { sidebarJson } from "./Json/navbarJson";
import { BsFillStarFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Icon } from "@blueprintjs/core";
import { TidiumFull, TidiumLogo } from "./assets/Tidium";

const Nav = () => {
  const [isExpanded, setExpendState] = useState(false);
  const [navJason, setNavJason] = useState(sidebarJson);
  return (
    <div
      className={
        isExpanded ? "sidebarContainer open" : "sidebarContainer collapsed"
      }
    >
      <div className={`brandingSection ${isExpanded ? "open" : "closed"}`}>
        <h2 className="logo">{isExpanded ? <TidiumFull /> : <TidiumLogo />}</h2>

        {/* <FaBars
          className="sidebarToggle"
          
        /> */}
        <span className="toggler" onClick={() => setExpendState(!isExpanded)}>
          {isExpanded ? (
            <Icon icon="chevron-left" className="sidebarToggle" />
          ) : (
            <Icon icon="chevron-right" className="sidebarToggle" />
          )}
        </span>
      </div>
      <ul className="navItems">
        {navJason.map((item, value) => {
          return (
            <li key={value}>
              <NavLink key={value} to={item.path} className="menu-item">
                <Icon icon={item.icon} />
                {isExpanded && item.name}
              </NavLink>
              {/* <span>
                  {isExpanded && (
                    <BsFillStarFill
                      style={{
                        color: "Yellow",
                        marginRight: "20px",
                        width: "30px",
                        marginTop: "10px",
                      }}
                    />
                  )}
                </span> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
