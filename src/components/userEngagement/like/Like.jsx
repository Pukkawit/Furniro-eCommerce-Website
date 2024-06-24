import React, { useState } from "react";
import "../../userEngagement/userEngagement.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Like = ({ action, actionValue }) => {
  return (
    <div id="action" onClick={action}>
      {actionValue ? (
        <FaHeart size={12} color="red" />
      ) : (
        <FaRegHeart size={12} color="#fff" />
      )}
      <p>Like</p>
    </div>
  );
};

export default Like;
