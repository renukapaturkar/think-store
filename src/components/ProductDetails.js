import React, { useContext } from "react";
import "../css/ProductDetails.css";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UseProductDetails } from "../Hooks/UseProductDetails";
import { CartContext } from "../context/cart-context";
import { WishListContext } from "../context/wishlist-context";
import { presentInWishlist } from "../utils/wishlistUtils";
import { cartAuth, presentInCart } from "../utils/cartUtils";
import { LoaderSpinner } from "./LoaderSpinner";
import { useAuth } from "../context/AuthProvider";
import { wishlistAuth } from "../utils/wishlistUtils";

export const ProductDetails = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const productDetail = UseProductDetails(id);
  const { products, cartItem, cartId, dispatch, loader } =
    useContext(CartContext);
  const { wishList, wishlistId, WishlistDispatch } = useContext(WishListContext);

  return (
    <div>
      {loader && <LoaderSpinner />}
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
                className={`wishlist-badge wishlist-icon ${presentInWishlist(
                  productDetail._id,
                  wishList,
                  products
                )}`}
                onClick={() =>
                  wishlistAuth(
                    token,
                    navigate,
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
                  class="btn btn-large btn-dark btn-dark-hover"
                  onClick={() =>
                    cartAuth(token, navigate, productDetail, cartId, dispatch)
                  }
                >
                  Add to Cart
                </button>
              ) : (
                <Link to="/cart">
                  <button class="btn btn-large btn-dark btn-dark-hover">
                    {" "}
                    Go To Cart
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
