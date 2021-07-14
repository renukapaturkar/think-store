import axios from "axios";
import { toastText } from "../utils/toast";

export const AddToCart = async (item, cartId, dispatch) => {
  if (cartId === "") {
    const cartResponse = await axios.post(
      "https://serene-lowlands-13656.herokuapp.com/carts",
      {
        productsArray: { _id: item._id, quantity: 1 },
      }
    );
    console.log("cartID", cartResponse.data.CartData._id)

    dispatch({
      type: "FIND_CARTID",
      payload: cartResponse.data.CartData._id,
    });
    dispatch({
      type: "ADD_TO_CART",
      payload: cartResponse.data.CartData.productsArray,
    });
    toastText("Added to Cart!");

  } else {
    const cartResponse = await axios.post(
      `https://serene-lowlands-13656.herokuapp.com/carts/${cartId}`,
      {
        productsArray: { _id: item._id, quantity: 1 },
      }
    );
    dispatch({
      type: "ADD_TO_CART",
      payload: cartResponse.data.CartData.productsArray,
    });
    toastText("Added to Cart!");

  }
};
