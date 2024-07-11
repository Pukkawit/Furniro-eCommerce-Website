import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./productsshoppingcart.scss";
import DeleteFromCartIcon from "../../../assets/icons/deleteFromCartIcon/DeleteFromCartIcon";
import Modal from "../../modal/Modal";
import Overlay from "../../backdrop-overlay/Overlay";
import { useRecoilState } from "recoil";
import { shoppingCart } from "../../../../public/atoms/shoppingcart/shoppingCart";
import useDeleteFromCart from "../../../../customHooks/useDeleteFromCart";

const ProductsShoppingCart = ({ publicId, productName, src, price }) => {
  const [showModal, setShowModal] = useState(false);
  const { handleDeleteFromCart } = useDeleteFromCart(publicId);
  const [showShoppingCart, setShowShoppingCart] = useRecoilState(shoppingCart);

  const deleteFromCart = () => {
    handleDeleteFromCart();
    hideModal();
  };

  const deleteConfirmation = () => {
    setShowModal(true);
  };
  const hideModal = () => {
    setShowModal(false);
    setShowShoppingCart(false);
  };
  return (
    <div id="productsShoppingCart">
      {showModal && <Overlay />}
      <div className="image-bg">
        <LazyLoadImage alt={"Soffa"} src={src} width={"90%"} />
      </div>
      <div className="name-qty-amt">
        <h4>{productName}</h4>
        <p>
          1 x <span className="amount">{price}</span>
        </p>
      </div>
      <div className="delete-from-cart" onClick={deleteConfirmation}>
        <DeleteFromCartIcon width="16" height="16" fill="#9F9F9F" />
      </div>
      {showModal && (
        <Modal
          heading={"Delete Item From Cart"}
          main={"Do you wish to delete this Item from your cart?"}
          actionBtn1={hideModal}
          actionBtn2={deleteFromCart}
          productName={productName}
        />
      )}
    </div>
  );
};

export default ProductsShoppingCart;
