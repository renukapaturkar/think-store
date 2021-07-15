import React, { useContext, useEffect } from "react";
import "../App.css";
import "../css/cart.css";
import { CartContext } from "../context/cart-context";
import axios from "axios";
import { toastText } from "../utils/toast";
import { useAuth } from "../context/AuthProvider";

export function Cart() {
  const { cartItem, cartId, cartTotal, dispatch } = useContext(CartContext);
  const { token } = useAuth();
  console.log(token);
  console.log("cartId", cartId);

  useEffect(() => {
    if (token) {
      (async function () {
        const getUserCartData = await axios.get(
          "https://serene-lowlands-13656.herokuapp.com/carts"
        );
        if (getUserCartData.status === 200) {
          console.log(getUserCartData);
          dispatch({
            type: "FIND_CARTID",
            payload: getUserCartData.data.CartData._id,
          });
          dispatch({
            type: "GET_USER_CART_DATA",
            payload: getUserCartData?.data.CartData.productsArray,
          });
        }
      })();
    }
  }, [token]);

  const increaseQuantity = async (productId, quantity, cartId) => {
    console.log("productId", productId, "cartId", cartId);

    const q = (quantity += 1);
    console.log(q);
    const response = await axios.post(
      `https://serene-lowlands-13656.herokuapp.com/carts/${cartId}/${productId}`,
      {
        quantity: q,
      }
    );

    dispatch({
      type: "INCREASE_QUANTITY",
      payload: response.data.CartData.productsArray,
    });
  };

  const decreaseQuantity = async (productId, quantity, cartId) => {
    if (quantity > 1) {
      const q = (quantity -= 1);
      const response = await axios.post(
        `https://serene-lowlands-13656.herokuapp.com/carts/${cartId}/${productId}`,
        {
          quantity: q,
        }
      );

      dispatch({
        type: "DECREASE_QUANTITY",
        payload: response.data.CartData.productsArray,
      });
    }
  };

  const removeFromCart = async (productid, cartId) => {
    const response = await axios.delete(
      `https://serene-lowlands-13656.herokuapp.com/carts/${cartId}/${productid}`,
      {
        productsArray: { _id: productid },
      }
    );

    if (response.status === 200) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: response?.data.CartData.productsArray,
      });

      toastText("Removed from cart");
    }
  };

  return (
    <div>
      <div class="cart-container">
        <div class="card-container ">
          {cartItem.map((item) => {
            return (
              <div class="card card-horizontal" key={item._id._id}>
                <div class="img-container img-horizontal-container">
                  <img
                    class="card-img"
                    src={`${item._id.image_url}`}
                    alt="img"
                  />
                </div>
                <div class="content-container">
                  <div>
                    <div>
                      <h4>{item._id.title}</h4>
                    </div>
                    <div>
                      <em>
                        {item._id.author}, {item._id.genre}
                      </em>
                    </div>
                    <div>
                      <b>&#8377; {`${item._id.price * item.quantity}`}</b>
                    </div>
                  </div>

                  <span>
                    <button
                      class="btn-small"
                      onClick={() =>
                        increaseQuantity(item._id._id, item.quantity, cartId)
                      }
                    >
                      +
                    </button>
                    <b>{item.quantity}</b>
                    <button
                      class="btn-small"
                      onClick={() =>
                        decreaseQuantity(item._id._id, item.quantity, cartId)
                      }
                    >
                      -
                    </button>
                    <span> | </span>
                    <span>
                      <span
                        class="remove-button"
                        onClick={() => removeFromCart(item._id._id, cartId)}
                      >
                        Remove
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div class="order-container">
          <h4>Price Details </h4>
          <div class="pricing-container">
            <div>
              <div>Total Amount</div>
              <div>Delivery</div>
              <div>Total Payable</div>
            </div>
            <div>
              <div>&#8377; {cartTotal}</div>
              <div>FREE</div>
              <div>&#8377; {cartTotal}</div>
            </div>
            <div></div>
          </div>
          <button class="btn btn-dark">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
