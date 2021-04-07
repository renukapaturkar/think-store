import {createContext, useReducer} from 'react';

const initialValue = {cartItem: []};

export const CartContext = createContext();

const reducerFunction = (state, action) => {
    switch(action.type){
        case "ADDTOCART":
                return {
                    ...state, cartItem: [...state.cartItem, action.payload]
                }
            
        case "WISHLIST":
            return {
                ...state, cartItem: [...state.cartItem, action.payload]
            }
        case "INCREASE_QUANTITY":
            const Quantity = state.cartItem.map((item) => {
                return item.id === action.payload ? {...item, quantity: item.quantity + 1} : item;
            });
            return {
                ...state, cartItem: Quantity,
            };
        case "DECREASE_QUANTITY":
            const quantityDecrease = state.cartItem.map((item) => {
                return item.id === action.payload ? {...item, quantity: item.quantity - 1} : item;
            });
            const zeroQuantity = quantityDecrease.filter((item)=> item.quantity !== 0 )
            return {
                ...state, cartItem: zeroQuantity,
            };
        case "REMOVE_FROM_CART":
            const removeItem = state.cartItem.filter((item)=> item.id !== action.payload.id)
            return {
                ...state, cartItem : removeItem
            }

        default:
            return state;
    }
}


export const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    return(
        <CartContext.Provider value={{...state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}