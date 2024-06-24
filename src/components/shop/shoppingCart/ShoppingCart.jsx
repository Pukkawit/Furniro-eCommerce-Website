import React, { useEffect, useState } from "react";
import "./shoppingcart.scss";
import ProductsShoppingCart from "../productsShoppingCart/ProductsShoppingCart";
import LockIcon from "../../../assets/icons/LockIcon";
import { useRecoilState } from "recoil";
import { shoppingCart } from "../../../../public/atoms/shoppintcart/shoppingCart";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShoppingCart = () => {
  const [showShoppingCart, setShowShoppingCart] = useRecoilState(shoppingCart);
  const handleShowShoppingCart = () => {
    setShowShoppingCart(false);
  };

  const navigate = useNavigate();

  const [addedToCart, setAddedToCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/AddedToCart")
      .then((response) => response.json())
      .then((data) => setAddedToCart(data));
  }, []);

  const handleCheckout = () => {
    navigate("/checkOut/:id");
  };
  const handleCart = () => {
    navigate("/cart");
  };
  const handleComparison = () => {
    navigate("/productComparison/:id");
  };

  const convertPriceToNumber = (priceString) => {
    let cleanedString = priceString.replace(/[^0-9,.-]+/g, "");
    cleanedString = cleanedString.replace(/\.(?=\d{3}(\.|,|$))/g, "");
    cleanedString = cleanedString.replace(/,/g, ".");
    return parseFloat(cleanedString);
  };

  const totalAmount = addedToCart.reduce((sum, product) => {
    return sum + convertPriceToNumber(product.price);
  }, 0);

  const formatTotalAmount = (amount) => {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&.");
  };
  return (
    <>
      <div id="shoppingCart">
        <div className="heading">
          <h2>Shopping Cart</h2>
          <div className="lock-icon">
            <LockIcon fill1="#9F9F9F" fill2="#9F9F9F" height="18" width="18" />
          </div>
        </div>
        <div className="main">
          {addedToCart.map((product) => (
            <div className="carted-products" key={product.id}>
              <ProductsShoppingCart
                price={product.price}
                productName={product.productName}
                publicId={product.publicId}
                src={product.src}
              />
            </div>
          ))}
          <div className="subtotal-amount">
            <p className="sub-total">Subtotal</p>
            <p className="amount">Rs. {formatTotalAmount(totalAmount)}</p>
          </div>
        </div>
        <div className="shopping-cart-footer">
          <footer-btns>
            <button onClick={handleCart}>Cart</button>
            <button onClick={handleCheckout}>Checkout</button>
            <button onClick={handleComparison}>Comparison</button>
          </footer-btns>
        </div>
      </div>
      <div className="overlay" onClick={handleShowShoppingCart}></div>
    </>
  );
};
