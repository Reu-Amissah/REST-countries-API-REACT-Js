import React from "react";
import "../Styles/Landing.css";

const LandingPage = () => {
  return (
    <section className="landing-page" id="landing">
      <div className="search-item">
        <input placeholder="Search for a country..."></input>
        <select>
          <option>Hello</option>
          <option>Hi</option>
        </select>
      </div>
      <div className="items-div">
        <div className="item">item1</div>
        <div className="item">item2</div>
        <div className="item">item3</div>
        <div className="item">item4</div>
        <div className="item">item5</div>
        <div className="item">item6</div>
        <div className="item">item7</div>
      </div>
    </section>
  );
};

export default LandingPage;
