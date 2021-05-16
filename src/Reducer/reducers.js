export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "DATA_FROM_DATABASE":
      return {
        ...state,
        products: [...action.payload],
      };
    case "ADDTOCART":
      return {
        ...state,
        cartItem: [...action.payload],
      };
    case "FIND_CARTID":
      return {
        ...state,
        cartId: action.payload,
      };
    case "FIND_WISHLISTID":
      return {
        ...state,
        wishlistId: action.payload,
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: [...action.payload],
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItem: [...action.payload],
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItem: [...action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItem: [...action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: [...action.payload],
      };

    case "SORT_BY_PRICE":
      return {
        ...state,
        sortbyprice: action.payload,
      };

    case "SORT_BY_GENRE":
      return {
        ...state,
        sortbygenre: action.payload,
      };

    case "TOTAL_CART_PRICE":
      const totalPrice = state.cartItem.reduce((acc, cartItem) => {
        const totalItemPrice = cartItem.productId.price * cartItem.quantity;
        return acc + totalItemPrice;
      }, 0);
      return {
        ...state,
        cartTotal: totalPrice,
      };


    default:
      return state;
  }
};
