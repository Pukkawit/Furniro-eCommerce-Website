import axios from "axios";
import "./rightnavicons.scss";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  likedValueState,
  likesStates,
} from "../../../../public/atoms/likedStates/likedStates";
import "./rightnavicons.scss";
import {
  addedToCartState,
  addedToCartValueState,
} from "../../../../public/atoms/addedToCartState/addedToCartState";
import { ShoppingCart } from "../../shop/shoppingCart/ShoppingCart";
import { shoppingCart } from "../../../../public/atoms/shoppingcart/shoppingCart";

const RightNavIcons = () => {
  const [likes, setLikes] = useRecoilState(likesStates);
  const likedValue = useRecoilValue(likedValueState);

  const [showShoppingCart, setShowShoppingCart] = useRecoilState(shoppingCart);

  const handleShowShoppingCart = () => {
    setShowShoppingCart(true);
  };

  const [addedToCart, setAddedToCart] = useRecoilState(addedToCartState);
  const addedToCartValue = useRecoilValue(addedToCartValueState);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/Likes");
        setLikes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLikes();
  }, [setLikes]);

  useEffect(() => {
    const fetchAddedToCart = async () => {
      try {
        const response = await axios.get("http://localhost:3001/AddedToCart");
        setAddedToCart(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAddedToCart();
  }, [setAddedToCart]);

  return (
    <div id="iconsStyle">
      <img
        className="right-icons"
        src="../src/assets/icons/user-alert.svg"
        alt=""
      />
      <img
        className="right-icons"
        src="../src/assets/icons/search.svg"
        alt=""
      />
      <div className="liked">
        <img
          className="right-icons"
          src="../src/assets/icons/heart.svg"
          alt=""
        />
        {likedValue > 0 && <div className="likedValue">{likedValue}</div>}
      </div>
      <div className="added-to-cart" onClick={handleShowShoppingCart}>
        <img
          className="right-icons"
          src="../src/assets/icons/cart.svg"
          alt=""
        />
        {addedToCartValue > 0 && (
          <div className="cartValue">{addedToCartValue}</div>
        )}
      </div>
      {showShoppingCart && <ShoppingCart />}
    </div>
  );
};

export default RightNavIcons;
