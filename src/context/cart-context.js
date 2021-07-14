import { createContext, useEffect, useReducer } from "react";
import { reducerFunction } from "../Reducer/reducers";

const initialValue = {
  products: [],
  cartItem: [],
  sortbyprice: "lowtohigh",
  sortbygenre: "all",
  cartId: "",
  cartTotal: 0,
  loader: false
};




export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialValue);
  useEffect(()=>{
    dispatch({type: "TOTAL_CART_PRICE"})
  }, [dispatch, state.cartItem])
  
  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
