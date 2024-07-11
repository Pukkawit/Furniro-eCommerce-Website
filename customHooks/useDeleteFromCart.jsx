// /path/to/your/hooks/useDeleteFromCart.js

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { addedToCartState } from "../public/atoms/addedToCartState/addedToCartState";

const useDeleteFromCart = (publicId) => {
  const [isMounted, setIsMounted] = useState(false);
  const [itemsInCart, setItemsInCart] = useRecoilState(addedToCartState);

  const handleDeleteFromCart = useCallback(async () => {
    if (!isMounted) return;

    try {
      const response = await axios.get("http://localhost:3001/AddedToCart");
      const addedToCartProducts = response.data;

      const productToDelete = addedToCartProducts.find(
        (product) => product.publicId === publicId
      );

      if (productToDelete) {
        await axios.delete(
          `http://localhost:3001/AddedToCart/${productToDelete.id}`
        );

        setItemsInCart((oldAddedToCart) =>
          oldAddedToCart.filter(
            (addedToCart) => addedToCart.publicId !== publicId
          )
        );
      } else {
        console.error("Product not found in addedToCartProducts");
      }
    } catch (error) {
      console.error("Error during deletion:", error);
    }
  }, [publicId, setItemsInCart, isMounted]);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return { handleDeleteFromCart };
};

export default useDeleteFromCart;
