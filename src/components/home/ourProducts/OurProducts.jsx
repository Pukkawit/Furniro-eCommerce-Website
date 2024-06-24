import React, { useState } from "react";
import Products from "./Products";
import { ourProductsImages } from "../../../assets/cloudImages/cloudImages";
import "./ourProducts.scss";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const OurProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  return (
    <div id="ourProducts">
      <h2>Our Products</h2>
      <div id="products-catalogue">
        {ourProductsImages.slice(0, visibleProducts).map((product) => (
          <LazyLoadComponent key={product.id}>
            <Products
              cloudName="dseqhd3ht"
              key={product.id}
              publicId={product.productID}
              productName={product.productName}
              desc={product.desc}
              price={product.price}
              status={product.status}
              discount={product.discount}
            />
          </LazyLoadComponent>
        ))}
      </div>
      {visibleProducts < ourProductsImages.length && (
        <button onClick={handleShowMore}>Show more</button>
      )}
    </div>
  );
};

export default OurProducts;
