import { createContext, useReducer } from "react";
import { reducerFunction } from "../Reducer/reducers";

const wishlistInitialValue = {
  wishList: [],
  wishlistId: "",
};

export const WishListContext = createContext();
 
export const WishlistProvider = ({ children }) => {
  const [state, WishlistDispatch] = useReducer(reducerFunction, wishlistInitialValue);
  return (
    <WishListContext.Provider value={{ ...state,WishlistDispatch }}>
      {children}
    </WishListContext.Provider>
  );
};
