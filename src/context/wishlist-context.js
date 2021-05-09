import { createContext, useReducer } from "react";
import { reducerFunction } from "../Reducer/reducers";

const wishlistInitialValue = {
  wishList: [],
  wishlistId: null,
};

export const WishListContext = createContext();

export const Wishlistprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, wishlistInitialValue);
  return (
    <WishListContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WishListContext.Provider>
  );
};
