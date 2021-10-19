import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ForNotFor = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center fornotfor">
      <h1>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
      <h2>Page Not Found</h2>
      <br />
      <br />
      <Link to="/" className="link">
        <h2> Go to HomePage</h2>
      </Link>
    </div>
  );
};

export default ForNotFor;
