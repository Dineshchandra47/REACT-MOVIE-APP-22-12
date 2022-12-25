import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div id="wrapper">
      <h1 id="page404" style={{ color: "#ffff", textAlign: "center" }}>
        <b>Page Not Found</b>
        <Link style={{ color: "skyblue", textAlign: "center", textDecoration:"none"}} to="/">Go to Home </Link>
      </h1>
    </div>
  );
};

export default PageNotFound;
