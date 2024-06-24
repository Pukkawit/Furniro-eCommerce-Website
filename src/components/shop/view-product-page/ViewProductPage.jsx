import React, { useState } from "react";
import "./view-product-page.scss";
import { useNavigate } from "react-router-dom";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import StarRating from "../star-rating/StarRating";
import Products from "../../home/ourProducts/Products";

const ViewProductPage = ({ product }) => {
  const [largeSize, setLargeSize] = useState(true);
  const [extraLargeSize, setExtraLargeSize] = useState(false);
  const [extraSmallsize, setExtraSmallSize] = useState(false);

  function handleLargeSize() {
    setLargeSize(true);
    setExtraLargeSize(false);
    setExtraSmallSize(false);
  }
  function handleExtraLargeSize() {
    setLargeSize(false);
    setExtraLargeSize(true);
    setExtraSmallSize(false);
  }
  function handleExtraSmallSize() {
    setLargeSize(false);
    setExtraLargeSize(false);
    setExtraSmallSize(true);
  }

  const navigate = useNavigate();
  const [rating, setRating] = useState(5);
  const handleNavToHome = () => {
    navigate("/");
  };
  let [quantity, setQuantity] = useState(1);

  const [descriptionNav, setDescriptionNav] = useState(true);
  const [additionalInfoNav, setAdditionalInfoNav] = useState(false);
  const [reviewsNav, setReviewsNav] = useState(false);

  const displayDescription = () => {
    setDescriptionNav(true);
    setAdditionalInfoNav(false);
    setReviewsNav(false);
  };
  const displayAdditionalInfo = () => {
    setDescriptionNav(false);
    setAdditionalInfoNav(true);
    setReviewsNav(false);
  };
  const displayReviews = () => {
    setDescriptionNav(false);
    setAdditionalInfoNav(false);
    setReviewsNav(true);
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const subtractQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };
  const handleNavToShop = () => {
    navigate("/shop");
  };

  const handleLargePics = () => {};

  return (
    <div id="productPage">
      <div className="header">
        <div className="product-page-navigation">
          <ul className="product-page-navigation-menu">
            <li onClick={handleNavToHome}>
              <span className="product-page-navigation-menu-name">Home</span>
            </li>
            <li onClick={handleNavToShop}>
              <span>
                <img
                  src="../../../../../../../../../src/assets/icons/right-angle.svg"
                  alt=""
                />
              </span>
              <span className="product-page-navigation-menu-name">Shop</span>
            </li>
            <li>
              <span>
                <img
                  src="../../../../../../../../../src/assets/icons/right-angle.svg"
                  alt=""
                />
              </span>
              <span className="product-page-navigation-menu-name active">
                {product.productName}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="main">
        <div className="top-section">
          <div className="product-images">
            <div className="thumbnails">
              {product.thumbnails &&
                product.thumbnails.map((thumbnail) => (
                  <div
                    className="thumbnail"
                    key={thumbnail.id}
                    onClick={handleLargePics}
                  >
                    <LazyLoadImage
                      alt={thumbnail.thumbnail}
                      src={thumbnail.src}
                    />
                  </div>
                ))}
            </div>
            <div className="large-pics">
              {product.largePics &&
                product.largePics.map((largePic) => (
                  <div className="large-pic" key={largePic.id}>
                    <LazyLoadImage alt={largePic.largePic} src={largePic.src} />
                  </div>
                ))}
            </div>
          </div>
          <div className="description">
            <div className="description-top">
              <h2 className="product-name">{product.productName}</h2>
              <p className="price">{product.price}</p>
              <div className="star-rating-container">
                <StarRating rating={rating} setRating={setRating} />
                <div className="customer-reviews">
                  {product.noOfCustomerReviews} customer Reviews
                </div>
              </div>
              <small className="brief-description">
                {product.briefDescription}
              </small>
            </div>
            <div className="description-bottom">
              <div className="size-section">
                <p className="description-bottom-size">Size</p>
                <div className="sizes">
                  {largeSize ? (
                    <div
                      className="large size highlighted"
                      onClick={handleLargeSize}
                    >
                      L
                    </div>
                  ) : (
                    <div className="large size " onClick={handleLargeSize}>
                      L
                    </div>
                  )}

                  {extraLargeSize ? (
                    <div
                      className="extra-large size highlighted"
                      onClick={handleExtraLargeSize}
                    >
                      XL
                    </div>
                  ) : (
                    <div
                      className="extra-large size "
                      onClick={handleExtraLargeSize}
                    >
                      XL
                    </div>
                  )}
                  {extraSmallsize ? (
                    <div
                      className="extra-small size highlighted"
                      onClick={handleExtraSmallSize}
                    >
                      XS
                    </div>
                  ) : (
                    <div
                      className="extra-small size"
                      onClick={handleExtraSmallSize}
                    >
                      XS
                    </div>
                  )}
                </div>
              </div>
              <div className="colors-section">
                <p className="description-bottom-color">Color</p>
                <div className="colors">
                  <div className="purple color"></div>
                  <div className="black color"></div>
                  <div className="brown color"></div>
                </div>
              </div>
              <div className="product-actions">
                <div className="quantity-buttons">
                  <div
                    className="subtract-quantity quantity-button"
                    onClick={subtractQuantity}
                  >
                    -
                  </div>
                  <div className="number-of-quantities">{quantity}</div>
                  <div
                    className="add-quantity quantity-button"
                    onClick={addQuantity}
                  >
                    +
                  </div>
                </div>
                <div className="cart-buttons">
                  <button className="add-remove-from-cart">Add To Cart</button>
                  <button className="add-remove-from-cart">
                    <span>+</span> Compare
                  </button>
                </div>
              </div>
              <div className="technical-info">
                {product.technicalInfo &&
                  product.technicalInfo.map((info) => (
                    <ul key={info.id}>
                      <li>
                        <span className="info-title">SKU</span>:
                        <span className="info-value">{info.sku}</span>
                      </li>
                      <li>
                        <span className="info-title">Category</span>:
                        <span className="info-value">{info.category}</span>
                      </li>
                      <li>
                        <span className="info-title">Tags</span>:
                        <span className="info-value">
                          {info.tags.join(", ")}
                        </span>
                      </li>
                      <li>
                        <span className="info-title">Share</span>:
                        <span className="social-shares">
                          <img
                            src="../../../../src/assets/icons/facebook_share.svg"
                            alt=""
                          />
                          <img
                            src="../../../../src/assets/icons/linkedn_share.svg"
                            alt=""
                          />
                          <img
                            src="../../../../src/assets/icons/twitter_share.svg"
                            alt=""
                          />
                        </span>
                      </li>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="description-additionalInfo-reviews">
          <div className="navigation">
            <ul className="nav-menu">
              {descriptionNav ? (
                <li onClick={displayDescription} className="active">
                  Description
                </li>
              ) : (
                <li onClick={displayDescription}>Description</li>
              )}
              {additionalInfoNav ? (
                <li onClick={displayAdditionalInfo} className="active">
                  Additional Information
                </li>
              ) : (
                <li onClick={displayAdditionalInfo}>Additional Information</li>
              )}
              {reviewsNav ? (
                <li onClick={displayReviews} className="active">
                  Reviews[{product.noOfCustomerReviews}]
                </li>
              ) : (
                <li onClick={displayReviews}>
                  Reviews[{product.noOfCustomerReviews}]
                </li>
              )}
            </ul>
          </div>
          <div className="content">
            {descriptionNav && (
              <div className="description">
                {product.fullDescription &&
                  product.fullDescription.map((content) => (
                    <div key={content.id}>
                      {content.paragraphs &&
                        content.paragraphs.map((paragraph) => (
                          <div className="content-div" key={paragraph.id}>
                            <p>{paragraph.paragraph}</p>
                          </div>
                        ))}
                      <div className="more-description-images">
                        {content.descriptionPhotos &&
                          content.descriptionPhotos.map((photo) => (
                            <div className="image-bg" key={photo.id}>
                              <LazyLoadImage
                                src={photo.src}
                                alt={photo.photo}
                                effect="blur"
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
            {additionalInfoNav && (
              <div className="content-div">
                <div className="additional-info"></div>
              </div>
            )}
            {reviewsNav && (
              <div className="content-div">
                <div className="reviews"></div>
              </div>
            )}
            <div className="related-products-section">
              <h2>Related Products</h2>
              <div className="related-products">
                {product.relatedProducts &&
                  product.relatedProducts.map((eachRelatedProduct) => {
                    return (
                      <div key={eachRelatedProduct.id}>
                        <LazyLoadComponent>
                          <Products
                            cloudName="dseqhd3ht"
                            publicId={eachRelatedProduct.productID}
                            productName={eachRelatedProduct.productName}
                            desc={eachRelatedProduct.desc}
                            price={eachRelatedProduct.price}
                            status={eachRelatedProduct.status}
                            discount={eachRelatedProduct.discount}
                          />
                        </LazyLoadComponent>
                      </div>
                    );
                  })}
              </div>
              <button>Show more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductPage;
