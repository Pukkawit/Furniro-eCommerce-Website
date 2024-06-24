import React from "react";
import PageHeader from "../../pageHeader/PageHeader";
import "./productComparison.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FeaturesComposition from "../../featuresComposition/FeaturesComposition";
import { useParams } from "react-router-dom";

const ProductComparison = () => {
  const { Id } = useParams();

  return (
    <div>
      <PageHeader page={"Product Comparison"} role={"Comparison"} />
      <div className="comparison">
        <div className="instruction">
          <h3>Go to Product page for more Products</h3>
          <div className="view-more">
            <div className="button">View More</div>
          </div>
        </div>
        <div className="product">
          <div className="image">
            <LazyLoadImage src="https://res.cloudinary.com/dseqhd3ht/image/upload/v1718821782/Asgaard_sofa_3_j7dxaq.jpg" />
          </div>
          <div className="information">
            <div className="title">
              <h4>Asgaard Sofa</h4>
            </div>
            <div className="price">
              <p>Rs. 250,000.00</p>
            </div>
            <div className="rating">
              <p className="rating-figure">4.7</p>
              <div className="star">
                <img src="../../../src/assets/icons/star-full.svg" alt="" />
                <img src="../../../src/assets/icons/star-full.svg" alt="" />
                <img src="../../../src/assets/icons/star-full.svg" alt="" />
                <img src="../../../src/assets/icons/star-full.svg" alt="" />
                <img src="../../../src/assets/icons/star-half.svg" alt="" />
              </div>
              <span>
                <p>204 Reviews</p>
              </span>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="image">
            <LazyLoadImage src="https://res.cloudinary.com/dseqhd3ht/image/upload/v1718786625/Outdoor_sofa_set_2_r23iut.png" />
          </div>
          <div className="information">
            <div className="title">
              <h4>Asgaard Sofa</h4>
            </div>
            <div className="price">
              <p>Rs. 224,000.00</p>
            </div>
            <div className="rating">
              <p className="rating-figure">4.2</p>
              <div className="star">
                <img src="../../../src/assets/icons/star-full.svg" alt="" />
                <img src="../../../src/assets/icons/star-full.svg" alt="" />
                <img src="../../../src/assets/icons/star-full.svg" alt="" />
                <img src="../../../src/assets/icons/star-full.svg" alt="" />
                <img src="../../../src/assets/icons/star-half.svg" alt="" />
              </div>
              <span>
                <p>204 Reviews</p>
              </span>
            </div>
          </div>
        </div>
        <div className="add-a-product">
          <h4>Add A Product</h4>
          <select name="addAProduct" id="addAProduct">
            <option value="">Choose a Product</option>
          </select>
        </div>
      </div>
      <div className="technical-info">
        <div className="general table-section">
          <table>
            <thead>
              <tr>
                <th>General</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sales Package</td>
                <td>1 sectional sofa</td>
                <td>1 Three Seater, 2 Single Seater</td>
              </tr>
              <tr>
                <td>Model Number</td>
                <td>TFCBLIGRBL6SRHS</td>
                <td>DTUBLIGRBL568</td>
              </tr>
              <tr>
                <td>Secondary Materiale</td>
                <td>Solid Wood</td>
                <td>Solid Wood</td>
              </tr>
              <tr>
                <td>Configuration</td>
                <td>L-shaped</td>
                <td>L-shaped</td>
              </tr>
              <tr>
                <td>Upholstery Material</td>
                <td>Fabric + Cotton</td>
                <td>Fabric + Cotton</td>
              </tr>
              <tr>
                <td>Upholstery Color</td>
                <td>Bright Grey & Lion</td>
                <td>Bright Grey & Lion</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="product table-section">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Material</td>
                <td>Foam</td>
                <td>Matte</td>
              </tr>
              <tr>
                <td>Finish Type</td>
                <td>Bright Grey & Lion</td>
                <td>Bright Grey & Lion</td>
              </tr>
              <tr>
                <td>Adjustable Headrest</td>
                <td>Nod</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Maximum Load Capacity</td>
                <td>280 KG</td>
                <td>300 KGd</td>
              </tr>
              <tr>
                <td>Origin of Manufacture</td>
                <td>India</td>
                <td>India</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="dimensions table-section">
          <table>
            <thead>
              <tr>
                <th>Dimensions</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Width</td>
                <td>265.32 cm</td>
                <td>265.32 cm</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>76 cm</td>
                <td>76 cm</td>
              </tr>
              <tr>
                <td>Depth</td>
                <td>167.76 cm</td>
                <td>167.76 cm</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>45 KG</td>
                <td>65 KG</td>
              </tr>
              <tr>
                <td>Seat Height</td>
                <td>41.52 cm</td>
                <td>41.52 cm</td>
              </tr>
              <tr>
                <td>Leg Height</td>
                <td>5.46 cm</td>
                <td>5.46 cm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="warranty table-section">
          <table>
            <thead>
              <tr>
                <th>Warranty</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Warranty Summary</td>
                <td>1 Year Manufacturing Warranty</td>
                <td>1.2 Year Manufacturing Warranty</td>
              </tr>
              <tr>
                <td>Warranty Service Type</td>
                <td>
                  For Warranty Claims or Any Product Related Issues Please Email
                  at operations@trevifurniture.com
                </td>
                <td>
                  For Warranty Claims or Any Product Related Issues Please Email
                  at support@xyz.com
                </td>
              </tr>
              <tr>
                <td>Covered in Warranty</td>
                <td>Warranty Against Manufacturing Defect</td>
                <td>
                  Warranty of the product is limited to manufacturing defects
                  only.
                </td>
              </tr>
              <tr>
                <td>Not Covered in Warranty</td>
                <td>
                  4The Warranty Does Not Cover Damages Due To Usage Of The
                  Product Beyond Its Intended Use And Wear & Tear In The Natural
                  Course Of Product Usage.
                </td>
                <td>
                  The Warranty Does Not Cover Damages Due To Usage Of The
                  Product Beyond Its Intended Use And Wear & Tear In The Natural
                  Course Of Product Usage.
                </td>
              </tr>
              <tr>
                <td>Domestic Warranty</td>
                <td>1 Year</td>
                <td>3 Months</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button>Add To Cart</button>
                </td>
                <td>
                  <button>Add To Cart</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <FeaturesComposition />
    </div>
  );
};

export default ProductComparison;
