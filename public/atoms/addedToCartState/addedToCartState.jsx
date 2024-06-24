import { atom, selector } from "recoil";

// Atom to store the addedToCart array
export const addedToCartState = atom({
  key: "addedToCartState",
  default: [],
});

// Selector to count the number of addedToCart items
export const addedToCartValueState = selector({
  key: "addedToCartValueState",
  get: ({ get }) => {
    const addedToCart = get(addedToCartState);
    return addedToCart.length;
  },
});

// src/recoil/atoms.js
