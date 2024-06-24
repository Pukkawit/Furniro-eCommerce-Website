import { atom, selector } from "recoil";

// Atom to store the likes array
export const likesStates = atom({
  key: "likesStates",
  default: [],
});

// Selector to count the number of liked items
export const likedValueState = selector({
  key: "likedValueState",
  get: ({ get }) => {
    const likes = get(likesStates);
    return likes.length;
  },
});
