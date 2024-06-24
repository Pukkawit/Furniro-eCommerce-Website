import React from "react";
import { Link } from "react-router-dom";
import "./error_URL.scss";
const Error_URL = () => {
  return (
    <div>
      <div className="error-div">
        <h1>:/</h1>
        <h3>Oops! Looks like this url is invalid...</h3>
        <p>Error 404 - the requested URL was not found on the server.</p>
        <Link to="/">
          Return to the <span> Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default Error_URL;
