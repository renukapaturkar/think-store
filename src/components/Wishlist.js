import React, { useContext, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart-context";
import { WishListContext } from "../context/wishlist-context";
import { AddToCart } from "../api/CartApi";
import { RemoveFromWishlist } from "../api/RemoveFromWishlist";
import { presentInCart } from "../utils/cartUtils";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";

export function Wishlist() {
  const { cartId, cartItem, dispatch } = useContext(CartContext);
  const { wishList, wishlistId, WishlistDispatch } =
    useContext(WishListContext);
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      (async function () {
        const getUserWishlistData = await axios.get(
          "https://serene-lowlands-13656.herokuapp.com/wishlists"
        );
        WishlistDispatch({
          type: "FIND_WISHLISTID",
          payload: getUserWishlistData.data.WishlistData._id,
        });
        WishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: getUserWishlistData.data.WishlistData.wishlistArray,
        });
      })();
    }
  }, [token]);

  return (
    <div>
      <div>Your Wishlist</div>

      <div class="card-container">
        {wishList.map((item) => {
          return (
            <span class="card" key={item._id._id}>
              <div class="img-container">
                <img class="card-img" src={`${item._id.image_url}`} alt="img" />
              </div>
              <b>{item._id.title}</b>
              <em>
                {item._id.author}, {item._id.genre}
              </em>
              <b>&#8377; {item._id.price}</b>
              <div
                class="remove-badge"
                onClick={() =>
                  RemoveFromWishlist(item._id, wishlistId, WishlistDispatch)
                }
              >
                <ion-icon class="badge" name="close"></ion-icon>
              </div>
              <span>
                {presentInCart(item._id, cartItem) === false ? (
                  <button
                    class="btn btn-dark btn-dark-hover"
                    onClick={() => AddToCart(item, cartId, dispatch)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <Link to="/cart">
                    <button class="btn btn-dark btn-=dark-hover">
                      {" "}
                      Go To Cart
                    </button>
                  </Link>
                )}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Wishlist;
