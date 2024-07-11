import React from "react";
import "./overlay.scss";
import Share from "../userShare/Share";
import Compare from "../compare/Compare";
import Like from "../like/Like";
import AddToCartButton from "../cartButtons/addToCartButton/AddToCartButton";

import ViewProductButton from "../cartButtons/viewProduct/ViewProductButton";
import { useNavigate } from "react-router-dom";
import useCart from "../../../../customHooks/useCart";

const Overlay = ({
  actionLike,
  actionLikeValue,
  publicId,
  productName,
  src,
  price,
}) => {
  const { addedToCart, handleAddToCart } = useCart(
    publicId,
    productName,
    src,
    price
  );
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/shop/${publicId}`);
  };

  const handleCompareProduct = () => {
    navigate(`/productComparison/${publicId}`);
  };

  return (
    <div id="overlayUserEngagement">
      <div className="cart-buttons">
        {!addedToCart ? (
          <AddToCartButton action={handleAddToCart} />
        ) : (
          <ViewProductButton actionViewProduct={handleViewProduct} />
        )}
        <div className="actions">
          <Share />
          <Compare compareAction={handleCompareProduct} />
          <Like action={actionLike} actionValue={actionLikeValue} />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
