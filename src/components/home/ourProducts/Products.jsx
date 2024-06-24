import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import "./product.scss";
import Overlay from "../../userEngagement/overLay/Overlay";
import { ourProductsImages } from "../../../assets/cloudImages/cloudImages";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { likesStates } from "../../../../public/atoms/likedStates/likedStates";

const Products = ({
  cloudName,
  publicId,
  productName,
  desc,
  price,
  discount,
  status,
}) => {
  const [overlayUserEngagement, setOverlayUserEngagement] = useState(false);
  const [liked, setLiked] = useState(false);
  const setLikes = useSetRecoilState(likesStates);

  useEffect(() => {
    let isMounted = true; // Track if component is mounted

    const fetchLikedStatus = async () => {
      try {
        const response = await axios.get("http://localhost:3001/Likes");
        const likedProducts = response.data;

        if (isMounted) {
          const isLiked = likedProducts.some(
            (product) => product.publicId === publicId
          );
          setLiked(isLiked);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLikedStatus();

    return () => {
      isMounted = false; // Set to false on unmount
    };
  }, [publicId]);

  const handleLikes = async () => {
    const product = ourProductsImages.find(
      (product) => product.productID === publicId
    );

    if (!product) return;

    const cloudName = "dseqhd3ht";

    if (!liked) {
      try {
        // Post liked product
        await axios.post("http://localhost:3001/Likes", {
          id: cloudName,
          publicId: publicId,
          productName: productName,
        });
        setLiked(true);
        setLikes((oldLikes) => [
          ...oldLikes,
          { id: cloudName, publicId: publicId, productName: productName },
        ]);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.get("http://localhost:3001/Likes");
        const likedProducts = response.data;

        // Find the product to be deleted
        const likedProduct = likedProducts.find(
          (product) => product.publicId === publicId
        );

        if (likedProduct) {
          await axios.delete(`http://localhost:3001/Likes/${likedProduct.id}`);
          setLiked(false);
          setLikes((oldLikes) =>
            oldLikes.filter((like) => like.publicId !== publicId)
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  function handleUserEngagementAdd() {
    setOverlayUserEngagement(true);
  }

  function handleUserEngagementRemove() {
    setOverlayUserEngagement(false);
  }

  return (
    <div
      id="product"
      onMouseOver={handleUserEngagementAdd}
      onMouseOut={handleUserEngagementRemove}
    >
      {overlayUserEngagement ? (
        <Overlay
          actionLike={handleLikes}
          actionLikeValue={liked}
          publicId={publicId}
          productName={productName}
        />
      ) : null}
      {status >= "0" ? (
        <div className="status statusBlue">
          <p>{status}</p>
        </div>
      ) : null}
      {status < "0" ? (
        <div className="status statusRed">
          <p>{status}</p>
        </div>
      ) : null}
      {status === "New" ? (
        <div className="status statusGreen">
          <p>{status}</p>
        </div>
      ) : null}

      <Image cloudName={cloudName} publicId={publicId} loading="lazy" />

      <div className="info">
        <div className="left">
          <h3>{productName}</h3>
          <p>{desc}</p>
          <h4>{price}</h4>
        </div>
        <p className="discounted">
          <strike>{discount}</strike>
        </p>
      </div>
    </div>
  );
};

export default Products;
