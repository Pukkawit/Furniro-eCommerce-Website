import React, { useEffect, useState } from "react";
import PageHeader from "../../pageHeader/PageHeader";
import FeaturesComposition from "../../featuresComposition/FeaturesComposition";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./checkout.scss";

const Checkout = () => {
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

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
      <PageHeader page="Checkout" role="Checkout" />

      <Formik
        initialValues={{
          firslastNametName: "",
          lastName: "",
          companyName: "",
          countryRegion: "",
          streetAddress: "",
          townCity: "",
          province: "",
          zipCode: "",
          phone: "",
          email: "",
          additionalInfo: "",
          paymentOption: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div id="Container">
              <div className="form">
                <h1>Billing Details</h1>
                <div className="form-2-col">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" />
                    {touched.firstName && errors.firstName && (
                      <div className="error">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" />
                    {touched.lastName && errors.lastName && (
                      <div className="error">{errors.lastName}</div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <Field name="companyName" />
                </div>
                <div className="form-group">
                  <label htmlFor="countryRegion">Country/Region</label>
                  <Field
                    component="select"
                    id="countryRegion"
                    name="countryRegion"
                  >
                    <option value="NY">Sri Lanka</option>
                    <option value="NY">New York</option>
                    <option value="SF">San Francisco</option>
                    <option value="CH">Chicago</option>
                    <option value="OTHER">Other</option>
                  </Field>
                </div>
                <div className="form-group">
                  <label htmlFor="streetAddress">Street address</label>
                  <Field name="streetAddress" />
                </div>
                <div className="form-group">
                  <label htmlFor="townCity">Town/City</label>
                  <Field name="townCity" />
                </div>
                <div className="form-group">
                  <label htmlFor="province">Province</label>
                  <Field component="select" id="province" name="province">
                    <option value="WP">Western Province</option>
                    <option value="NY">New York</option>
                    <option value="SF">San Francisco</option>
                    <option value="CH">Chicago</option>
                    <option value="OTHER">Other</option>
                  </Field>
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code</label>
                  <Field name="zipCode" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <Field name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field name="email" />
                  {touched.email && errors.email && (
                    <div className="error">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="additionalInfo"></label>
                  <Field
                    name="additionalInfo"
                    component="textarea"
                    placeholder="Additional Information"
                  />
                </div>
              </div>
              <div className="product-info">
                <div className="product-subtotal">
                  <div className="product">
                    <h4>Product</h4>
                    {addedToCart.map((product) => (
                      <p key={product.id}>
                        {product.productName} <span>x</span>{" "}
                        <span className="quantity">{quantity}</span>
                      </p>
                    ))}
                    <p className="subT">Subtotal</p>
                    <p className="total">Total</p>
                  </div>
                  <div className="subtotal">
                    <h4>Subtotal</h4>
                    {addedToCart.map((product) => (
                      <p key={product.id}>{product.price}</p>
                    ))}
                    <p className="subT">
                      Rs. {formatSubTotalAmount(subTotalAmount)}
                    </p>
                    <p className="total">
                      Rs. {formatSubTotalAmount(subTotalAmount)}
                    </p>
                  </div>
                </div>
                <div className="payment-options">
                  <div className="privacy-policy">
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      className="radio-group"
                    >
                      <div className="direct-bank-transfer">
                        <label htmlFor="paymentOption" className="radioButton">
                          <Field
                            type="radio"
                            name="paymentOption"
                            value="Direct Bank Transfer"
                            checked={true}
                          />
                          <p className="option">Direct Bank Transfer</p>
                        </label>
                        <p className="directBankTransferInfo">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      </div>
                      <div className="list-options">
                        <div className="direct-bank-transfer">
                          <label
                            htmlFor="paymentOption"
                            className="radioButton"
                          >
                            <Field
                              type="radio"
                              name="paymentOption"
                              value="Direct Bank Transfer"
                            />
                            <p className="option">Direct Bank Transfer</p>
                          </label>
                        </div>
                        <div className="direct-bank-transfer">
                          <label
                            htmlFor="paymentOption"
                            className="radioButton"
                          >
                            <Field
                              type="radio"
                              name="paymentOption"
                              value="Cash On Delivery"
                            />
                            <p className="option">Cash On Delivery</p>
                          </label>
                        </div>
                      </div>
                      <p>
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our{" "}
                        <span>privacy policy.</span>
                      </p>
                      <button type="button">Place Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <FeaturesComposition />
    </div>
  );
};

export default Checkout;
