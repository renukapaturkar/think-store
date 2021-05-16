import React, { useContext, useEffect } from "react";
import "../App.css";
import "../css/cart.css";
import { CartContext } from "../context/cart-context";
import axios from "axios";
import { toastText } from "../utils/toast";

export function Cart() {
  const { cartItem, cartId, cartTotal, dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "TOTAL_CART_PRICE" });
  }, [cartItem]);

  const increaseQuantity = async (productId, Quantity, cartId) => {
    const response = await axios.post(
      `https://serene-lowlands-13656.herokuapp.com/carts/${cartId}/${productId}`,
      {
        quantity: (Quantity += 1),
      }
    );

    dispatch({
      type: "INCREASE_QUANTITY",
      payload: response.data.CartData.productsArray,
    });
  };

  const decreaseQuantity = async (productId, Quantity, cartId) => {
    if (Quantity > 1) {
      const response = await axios.post(
        `https://serene-lowlands-13656.herokuapp.com/carts/${cartId}/${productId}`,
        {
          quantity: (Quantity -= 1),
        }
      );

      dispatch({
        type: "DECREASE_QUANTITY",
        payload: response.data.CartData.productsArray,
      });
    }
  };

  const removeFromcart = async (productid, cartId) => {
    const response = await axios.delete(
      `https://serene-lowlands-13656.herokuapp.com/carts/${cartId}/${productid}`,
      {
        productsArray: { productId: productid },
      }
    );
    console.log(response);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: response.data.CartData.productsArray,
    });
    toastText("Added to Wishlist!");
  };

  return (
    <div>
      <div class="cart-container">
        <div class="card-container ">
          {cartItem.map((item) => {
            return (
              <div class="card card-horizontal" key={item._id}>
                <div class="img-container img-horizontal-container">
                  <img
                    class="card-img"
                    src={`${item.productId.image_url}`}
                    alt="img"
                  />
                </div>
                <div class="content-container">
                  <div>
                    <div><h4>{item.productId.title}</h4></div>
                    <div><em>
                    {item.productId.author}, {item.productId.genre}
                    </em></div>
                    <div><b>&#8377; {`${item.productId.price * item.quantity}`}</b></div>
                  </div>


                  <span>
                    <button
                      class="btn-small"
                      onClick={() =>
                        increaseQuantity(item._id, item.quantity, cartId)
                      }
                    >
                      +
                    </button>
                    <b>{item.quantity}</b>
                    <button
                      class="btn-small"
                      onClick={() =>
                        decreaseQuantity(item._id, item.quantity, cartId)
                      }
                    >
                      -
                    </button>
                    <span> | </span>
                    <span> 
                   <span class="remove-button" onClick={() => removeFromcart(item._id, cartId)}>Remove</span>
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
          <div>
            
          </div>
        </div>
        <button class="btn btn-dark">Place Order</button>
        </div>

      </div>
    </div>
  );
}

export default Cart;
