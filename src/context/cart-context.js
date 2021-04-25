import {createContext, useReducer} from 'react';
import  {reducerFunction} from '../Reducer/reducers';

const initialValue = {cartItem: [],
sortbyprice:"lowtohigh",
sortbygenre: "all"};

export const CartContext = createContext();




export const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    return(
        <CartContext.Provider value={{...state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}