import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { addedToCartState } from "../public/atoms/addedToCartState/addedToCartState";
import { ourProductsImages } from "../src/assets/cloudImages/cloudImages";

const useAddToCart = (publicId, productName) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [itemsInCart, setItemsInCart] = useRecoilState(addedToCartState);

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
        setItemsInCart((oldAddsToCart) => [
          ...oldAddsToCart,
          {
            id: Id,
            cloudName: cloudName,
            publicId: publicId,
            productName: productName,
            src: src,
            price: price,
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    }
  }, [addedToCart, publicId, productName, setAddedToCart, setItemsInCart]);

  return { addedToCart, handleAddToCart };
};

export default useAddToCart;
