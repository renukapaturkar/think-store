export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "ADDTOCART":
      console.log(action.payload);
      return {
        ...state,
        cartItem: [...action.payload],
      };
    case "FIND_CARTID":
      console.log(action.payload);
      return {
        ...state,
        cartId: action.payload,
      };
    case "FIND_WISHLISTID":
      console.log("find wishlist id", action.payload);
      return {
        ...state,
        wishlistId: action.payload,
      };

    case "ADD_TO_WISHLIST":
      console.log(action.payload);
      return {
        ...state,
        wishList: [...action.payload],
      };
    case "INCREASE_QUANTITY":
      console.log(action.payload);
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
      console.log("remove payload", action.payload);
      return {
        ...state,
        cartItem: [...action.payload],
      };

    case "SORT_BY_PRICE":
      return {
        ...state,
        sortbyprice: action.payload,
      };

    case "SORT_BY_GENRE":
      console.log(action.payload);
      return {
        ...state,
        sortbygenre: action.payload,
      };

    default:
      return state;
  }
};
