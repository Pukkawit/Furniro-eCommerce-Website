import React from "react";
import "./CategoriesBlog.scss";

const CategoriesBlog = () => {
  return (
    <div>
      <div className="category">
        <h3>Category</h3>
      </div>
      <div className="categories-data">
        <p>Crafts</p>
        <p className="num">2</p>
        <p>Design</p>
        <p className="num">8</p>
        <p>Handmade</p>
        <p className="num">7</p>
        <p>Interior</p>
        <p className="num">1</p>
        <p>Wood</p>
        <p className="num">6</p>
      </div>
    </div>
  );
};

export default CategoriesBlog;
