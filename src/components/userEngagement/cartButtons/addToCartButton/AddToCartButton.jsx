import React from "react";

const AddToCartButton = ({ action }) => {
  return (
    <>
      <button className="cart-button" onClick={action}>
        Add to Cart
      </button>
    </>
  );
};

export default AddToCartButton;
