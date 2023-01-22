import "./LandingPage.css";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1 className="title">Videogames</h1>
      <Link to={"/home"}>
        <button>Start</button>
      </Link>
    </div>
  );
};

export default LandingPage;
