import React from "react";
import "../Styles/Header.css";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!isDarkMode);
    const rootElement = document.getElementById("body");
    rootElement.classList.toggle("dark-mode");
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-items">
          <div className="header-title">Where in the world</div>
          <div className="toggle-button" onClick={handleClick}>
            <span class="material-symbols-outlined">dark_mode</span>
            Dark Mode
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
