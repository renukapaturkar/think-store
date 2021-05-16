import React, { useContext } from "react";
import "../css/ProductDetails.css";
import "../App.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UseProductDetails } from "../Hooks/UseProductDetails";
import { CartContext } from "../context/cart-context";
import { WishListContext } from "../context/wishlist-context";
import { wishlistDataHandler, presentInWishlist } from "../utils/wishlistUtils";
import { AddToCart } from "../api/CartApi";
import { presentInCart } from "../utils/cartUtils";

export const ProductDetails = () => {
  const { id } = useParams();
  const productDetail = UseProductDetails(id);
  const { products, cartItem, cartId, dispatch } = useContext(CartContext);
  const { wishlistId, wishList, WishlistDispatch } = useContext(
    WishListContext
  );
  return (
    <div>
      {productDetail.length !== 0 && (
        <div class="productdetail-container">
          <div class="imagedetail-container">
            <div class="image-container">
              <img
                class="img-detail"
                src={`${productDetail.image_url}`}
                alt="img"
              />

              <div
                class={`wishlist-badge wishlist-icon  ${presentInWishlist(
                  productDetail._id,
                  wishList,
                  products
                )}`}
                onClick={() =>
                  wishlistDataHandler(
                    productDetail,
                    wishList,
                    wishlistId,
                    WishlistDispatch
                  )
                }
              >
                <ion-icon class="badge-lg" name="heart"></ion-icon>
              </div>
            </div>
          </div>

          <div class="details-container">
            <h1>{productDetail.title}</h1>
            <span>
              <div>
                <b>By {productDetail.author}</b>
                <b> | {productDetail.genre}</b>

                <div>
                  <h3>Rs.{productDetail.price}</h3>
                </div>
              </div>
            </span>

            <div>
              <p>{productDetail.description}</p>
            </div>

            <div class="bookformat-container">
              {productDetail.book_format.map(function (format) {
                return (
                  <span class="bookformat">
                    <span>{format}</span>
                    <span> | Rs.{productDetail.price}</span>
                  </span>
                );
              })}
            </div>
            <div>
              {presentInCart(productDetail._id, cartItem) === false ? (
                <button
                  class="btn btn-large btn-dark"
                  onClick={() => AddToCart(productDetail, cartId, dispatch)}
                >
                  Add to Cart
                </button>
              ) : (
                <Link to="/cart" class={`link btn btn-a btn-large btn-dark`}>
                  Go To Cart
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
