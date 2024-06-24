import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ViewProductPage from "./view-product-page/ViewProductPage";
import { ourProductsImages } from "../../assets/cloudImages/cloudImages";
import PageHeader from "../pageHeader/PageHeader";
import Products from "../home/ourProducts/Products";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Pagination from "../pagination/Pagination";
import FeaturesComposition from "../featuresComposition/FeaturesComposition";

const Shop = () => {
  const { publicId } = useParams();
  const viewedProduct = ourProductsImages.find(
    (product) => product.productID === publicId
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [currentButtonGroup, setCurrentButtonGroup] = useState([1, 2, 3]);
  const productsPerPage = 16;

  const totalPages = Math.ceil(ourProductsImages.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = ourProductsImages.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextGroup = () => {
    const nextGroupStart = currentButtonGroup[2] + 1;
    const nextGroupEnd = Math.min(nextGroupStart + 2, totalPages);
    const newGroup = Array.from(
      { length: nextGroupEnd - nextGroupStart + 1 },
      (_, i) => nextGroupStart + i
    );
    setCurrentButtonGroup(newGroup);
    setCurrentPage(nextGroupStart);
  };

  const handlePrevGroup = () => {
    const prevGroupStart = Math.max(currentButtonGroup[0] - 3, 1);
    const prevGroupEnd = prevGroupStart + 2;
    const newGroup = Array.from(
      { length: prevGroupEnd - prevGroupStart + 1 },
      (_, i) => prevGroupStart + i
    );
    setCurrentButtonGroup(newGroup);
    setCurrentPage(prevGroupStart);
  };

  return (
    <div>
      {viewedProduct ? (
        <ViewProductPage product={viewedProduct} />
      ) : (
        <>
          <PageHeader page="Shop" role="Compare" />
          <div id="ourProducts">
            <h2>Our Products</h2>
            <div id="products-catalogue">
              {currentProducts.map((product) => (
                <LazyLoadComponent key={product.id}>
                  <Products
                    cloudName="dseqhd3ht"
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
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            currentButtonGroup={currentButtonGroup}
            handleNextGroup={handleNextGroup}
            handlePrevGroup={handlePrevGroup}
          />
          <FeaturesComposition />
        </>
      )}
    </div>
  );
};

export default Shop;
