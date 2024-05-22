import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  return (
    <div>
      <header className="header fixed-nav">
        <a href="/">
          <img className="logo" alt="eb7 logo" src="../img/logo.jpg" />
        </a>
        <nav className="main-nav">
          {/* Conditionally render based on menuOpen state */}
          <ul className={`main-nav-list ${menuOpen ? "show" : ""}`}>
            <li>
              <a
                className={`main-nav-link ${
                  location.pathname === "/" && "active"
                }`}
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`main-nav-link ${
                  location.pathname === "/ofertat" && "active"
                }`}
                href="/ofertat"
              >
                Ofertat
              </a>
            </li>
            <li>
              <a
                className={`main-nav-link ${
                  location.pathname === "/info" && "active"
                }`}
                href="/info"
              >
                Rreth EB7
              </a>
            </li>
            <li>
              <a
                className={`main-nav-link ${
                  location.pathname === "/kontakt" && "active"
                }`}
                href="/kontakt"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
        {/* Button to toggle menu visibility */}
        <div className="btn-mobile-nav" onClick={toggleMenu}>
          {menuOpen ? (
            <ClearIcon
              sx={{ color: "whiteee" }}
              className="icon-mobile-nav-menu"
            />
          ) : (
            <MenuIcon
              sx={{ color: "whiteee" }}
              className="icon-mobile-nav-menu"
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default Nav;
