export const reducerFunction = (state, action) => {
    switch(action.type){
        case "ADDTOCART":
            console.log(action.payload)
            if(state.cartItem.some((item)=> item.id === action.payload._id)){
                const  newArray = state.cartItem.map((item)=> {
                    return item.id === action.payload._id ? {...item, quantity: item.quantity + 1} : item
                });
                return {
                    ...state, cartItem: newArray,
                };

            }else {
                return {
                    ...state, cartItem: [...state.cartItem, action.payload]
                }
                
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

        case "SORT_BY_PRICE":
            
            return {
                ...state,sortbyprice : action.payload
            }
        
        case "SORT_BY_GENRE":
            console.log(action.payload)
            return{
                ...state, sortbygenre: action.payload
            }

            

        default:
            return state;
    }
}


