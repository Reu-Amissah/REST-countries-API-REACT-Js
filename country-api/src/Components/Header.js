import React from "react";
import "../Styles/Landing.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
// import { faMoonRegular } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!isDarkMode);
    const rootElement = document.getElementById("body");
    rootElement.classList.toggle("dark-mode");
    const landingElement = document.getElementById("landing");
    landingElement.classList.toggle("dark-mode");
  };

  {
    /*---TOGGLE ICON FOR DARK-MODE FUNX--- */
  }
  const icon = () => {
    if (isDarkMode) {
      return <span class="material-symbols-outlined">dark_mode</span>;
    } else {
      return (
        <FontAwesomeIcon
          icon={faMoon}
          style={{ width: "20px", height: "20px", paddingRight: "8px" }}
        ></FontAwesomeIcon>
      );
    }
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-items">
          <div className="header-title">Where in the world</div>
          <div className="toggle-button" onClick={handleClick}>
            {icon()}
            Dark Mode
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
