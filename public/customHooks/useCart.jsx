import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { ourProductsImages } from "../../src/assets/cloudImages/cloudImages";
import { addedToCartState } from "../atoms/addedToCartState/addedToCartState";

const useCart = (publicId, productName) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [addsToCart, setAddsToCart] = useRecoilState(addedToCartState);

  useEffect(() => {
    let isMounted = true;

    const fetchAddedToCartStatus = async () => {
      try {
        const response = await axios.get("http://localhost:3001/AddedToCart");
        const addedToCartProducts = response.data;

        if (isMounted) {
          const isAdded = addedToCartProducts.some(
            (product) => product.publicId === publicId
          );
          setAddedToCart(isAdded);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAddedToCartStatus();

    return () => {
      isMounted = false;
    };
  }, [publicId, setAddedToCart]);

  const handleAddToCart = useCallback(async () => {
    const product = ourProductsImages.find(
      (product) => product.productID === publicId
    );

    if (!product) return;

    const Id = product.id;
    const cloudName = "dseqhd3ht";
    const price = product.price;
    const src = product.src;

    if (!addedToCart) {
      try {
        await axios.post("http://localhost:3001/AddedToCart", {
          id: Id,
          cloudName,
          publicId,
          productName,
          src,
          price,
        });
        setAddedToCart(true);
        setAddsToCart((oldAddsToCart) => [
          ...oldAddsToCart,
          {
            id: Id,
            cloudName: cloudName,
            publicId: publicId,
            productName: productName,
            src: src,
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    }
  }, [addedToCart, publicId, productName, setAddedToCart]);

  const handleDeleteFromCart = async () => {
    try {
      const response = await axios.get("http://localhost:3001/AddedToCart");
      const addedToCartProducts = response.data;
      console.log("Added to cart products:", addedToCartProducts);

      const productToDelete = addedToCartProducts.find(
        (product) => product.publicId === publicId
      );
      console.log("Product to be deleted:", productToDelete);

      if (productToDelete) {
        const deleteResponse = await axios.delete(
          `http://localhost:3001/AddedToCart/${productToDelete.id}`
        );
        console.log("Delete response:", deleteResponse);

        setAddedToCart(false);
        setAddsToCart((oldAddedToCart) =>
          oldAddedToCart.filter(
            (addedTocart) => addedTocart.publicId !== publicId
          )
        );
      } else {
        console.error("Product not found in addedToCartProducts");
      }
    } catch (error) {
      console.error("Error during deletion:", error);
    }
  };

  return { addedToCart, handleAddToCart, handleDeleteFromCart };
};

export default useCart;
