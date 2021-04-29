export const reducerFunction = (state, action) => {
    switch(action.type){
        case "ADDTOCART":
            console.log(action.payload)
            return {
                    ...state, cartItem: [...action.payload]
                }
        case "FIND_CARTID":
            console.log(action.payload)
            return {
                ...state, cartId : action.payload
            }
    
                
            
        case "WISHLIST":
            return {
                ...state, cartItem: [...state.cartItem, action.payload]
            }
        case "INCREASE_QUANTITY":
            console.log(action.payload)
            return {
                ...state, cartItem:[...action.payload]
            };
        case "DECREASE_QUANTITY":
            return {
                ...state, cartItem:[...action.payload],
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


