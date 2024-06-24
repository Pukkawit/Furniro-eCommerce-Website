import React, { useEffect, useState } from "react";
import "./cartPage.scss";
import FeaturesComposition from "../../featuresComposition/FeaturesComposition";
import PageHeader from "../../pageHeader/PageHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CartPage = () => {
  const [addedToCart, setAddedToCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/AddedToCart")
      .then((response) => response.json())
      .then((data) => setAddedToCart(data));
  }, []);

  const quantity = 1;

  const convertPriceToNumber = (priceString) => {
    let cleanedString = priceString.replace(/[^0-9,.-]+/g, "");
    cleanedString = cleanedString.replace(/\.(?=\d{3}(\.|,|$))/g, "");
    cleanedString = cleanedString.replace(/,/g, ".");
    return parseFloat(cleanedString);
  };

  const subTotalAmount = addedToCart.reduce((sum, product) => {
    return sum + convertPriceToNumber(product.price);
  }, 0);

  const formatSubTotalAmount = (amount) => {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&.");
  };

  return (
    <div>
      <PageHeader page={"Cart"} role={"Cart"} />
      <div className="content">
        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {addedToCart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="image-bg">
                      <LazyLoadImage src={product.src} />
                    </div>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <div className="number">{quantity}</div>
                  </td>
                  <td>
                    <div className="subtotal">
                      Rs.{" "}
                      {formatSubTotalAmount(
                        convertPriceToNumber(product.price) * quantity
                      )}
                      <img
                        src="../../../../src/assets/icons/delete-filled.svg"
                        alt=""
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart">
          <h3>Cart Totals</h3>
          <div className="totals">
            <div className="total-title">
              <p className="subtotal">Subtotal</p>
              <p className="total">Total</p>
            </div>
            <div className="total-figures">
              <p className="subtotal-amount">
                Rs. {formatSubTotalAmount(subTotalAmount)}
              </p>
              <p className="total-amount">
                Rs. {formatSubTotalAmount(subTotalAmount)}
              </p>
            </div>
          </div>
          <button>Check Out</button>
        </div>
      </div>
      <FeaturesComposition />
    </div>
  );
};

export default CartPage;
