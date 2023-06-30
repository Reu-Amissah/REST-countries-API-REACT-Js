import React, { useContext } from "react";
import "../Styles/Landing.css";
import "../Styles/Mq.css";
// import { useLocation } from "react-router-dom";
import { DarkModeContext } from "./DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
// import { faMoonRegular } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const { toggleDarkMode } = useContext(DarkModeContext);
  // const [isDarkMode, setDarkMode] = useState(false);
  // Get the current route location
  // const location = useLocation();

  // const handleClick = () => {
  //   setDarkMode(!isDarkMode);

  //   const currentElementId = location.pathname === "/" ? "landing" : "details";
  //   const currentElement = document.getElementById(currentElementId);

  //   // Toggle the "dark-mode" class on the current element
  //   if (currentElement) {
  //     if (!isDarkMode) {
  //       currentElement.classList.add("dark-mode");
  //       const rootElement = document.getElementById("body");
  //       rootElement.classList.add("dark-mode");
  //     } else {
  //       currentElement.classList.remove("dark-mode");
  //       const rootElement = document.getElementById("body");
  //       rootElement.classList.remove("dark-mode");
  //     }
  //   }
  // };

  const icon = () => {
    if (isDarkMode) {
      return <span className="material-symbols-outlined">dark_mode</span>;
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
    <header className={isDarkMode ? "dark-mode" : ""}>
      <div className="header-container">
        <div className="header-items">
          <div className="header-title">Where in the world</div>
          <div className="toggle-button" onClick={toggleDarkMode}>
            {icon()}
            Dark Mode
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
