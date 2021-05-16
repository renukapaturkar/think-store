import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { CartContext } from "../context/cart-context";
import { WishListContext } from "../context/wishlist-context";
import axios from "axios";

import { Filters } from "./Filters";
import { sortPrice, sortGenre } from "../utils/sort";
import { SortBy } from "./SortBy";
import { wishlistDataHandler, presentInWishlist } from "../utils/wishlistUtils";

function ProductListing() {
  const {
    products,
    cartItem,
    sortbyprice,
    sortbygenre,
    cartId,
    dispatch,
  } = useContext(CartContext);
  const { wishlistId, wishList, WishlistDispatch } = useContext(
    WishListContext
  );

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://serene-lowlands-13656.herokuapp.com/products"
        );
        dispatch({
          type: "DATA_FROM_DATABASE",
          payload: response.data.product,
        });
      } catch (error) {
        console.log("error");
      }
    })();
  }, []);

  const filterResults = sortPrice(products, sortbyprice);

  const genreFilter = sortGenre(filterResults, sortbygenre);

  return (
    <div class="page-container">
    <SortBy />
    <div class="container">
      <Filters />

      <div class="main-container">
        
        <div class="card-container">
          {genreFilter.map((item) => {
            return (
              <span class="card" key={item._id}>
                <Link to={`/${item._id}`}>
                  <div class="img-container">
                    <img class="card-img" src={`${item.image_url}`} alt="img" />
                  </div>
                </Link>
                <div class="product-page-details">
                <div><b>{item.title}</b></div>
                <em>
                {item.author}, {item.genre} 
                </em>
                <div><b>&#8377; {item.price}</b></div>

                </div>

                <span>
                  {/* {
                    presentInCart(item._id,cartItem) === false ? (
                      <button
                      class="btn btn-absolute btn-dark"
                      onClick={() => AddToCart(item, cartId, dispatch)}
                    >
                      Add to Cart
                    </button>
                    ):
                    (
                      <Link to='/cart'
                      class={`link btn btn-a btn-absolute btn-dark`}>Go To Cart</Link>
                    )
                  } */}

                  <div
                    class={`wishlist-badge ${presentInWishlist(
                      item._id,
                      wishList,
                      products
                    )}`}
                    onClick={() =>
                      wishlistDataHandler(
                        item,
                        wishList,
                        wishlistId,
                        WishlistDispatch
                      )
                    }
                  >
                    {" "}
                    <ion-icon class="badge" name="heart"></ion-icon>
                  </div>
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductListing;
