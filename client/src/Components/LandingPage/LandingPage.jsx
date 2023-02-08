import "./LandingPage.css";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="buttonContent">
      <Link to={"/home"}>
        <button className="startButton">
          P L A Y
          <div id="clip">
            <div id="leftTop" className="corner"></div>
            <div id="rightBottom" className="corner"></div>
            <div id="rightTop" className="corner"></div>
            <div id="leftBottom" className="corner"></div>
          </div>
          <span id="rightArrow" className="arrow"></span>
          <span id="leftArrow" className="arrow"></span>
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
