import React from "react";
import "../Styles/Header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-items">
          <div className="header-title">Where in the world</div>
          <div className="dark-mode-toggle">
            <span class="material-symbols-outlined">dark_mode</span>
            Dark Mode
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
