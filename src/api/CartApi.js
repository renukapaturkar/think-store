import axios from "axios";

export const AddToCart = async (item, cartId, dispatch) => {
  if (cartId === "") {
    const cartResponse = await axios.post(
      "https://serene-lowlands-13656.herokuapp.com/carts",
      {
        productsArray: { _id: item._id, productId: item._id, quantity: 1 },
      }
    );

    dispatch({
      type: "FIND_CARTID",
      payload: cartResponse.data.CartData._id,
    });
    dispatch({
      type: "ADDTOCART",
      payload: cartResponse.data.CartData.productsArray,
    });

  } else {
    const cartResponse = await axios.post(
      `https://serene-lowlands-13656.herokuapp.com/carts/${cartId}`,
      {
        productsArray: { _id: item._id, productId: item._id, quantity: 1 },
      }
    );
    dispatch({
      type: "ADDTOCART",
      payload: cartResponse.data.CartData.productsArray,
    });

  }
};
