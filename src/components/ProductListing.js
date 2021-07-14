import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { CartContext } from "../context/cart-context";
import { WishListContext } from "../context/wishlist-context";
import axios from "axios";

import { Filters } from "./Filters";
import { sortPrice, sortGenre } from "../utils/sort";
import { SortBy } from "./SortBy";
import { wishlistAuth, wishlistDataHandler} from "../utils/wishlistUtils";
import {LoaderSpinner} from "./LoaderSpinner";
import { useAuth } from "../context/AuthProvider";

function ProductListing() {
  const {token} = useAuth();
  const {
    products,
    cartItem,
    sortbyprice,
    sortbygenre,
    cartId,
    loader,
    dispatch,
  } = useContext(CartContext);
  const { wishlistId, wishList, WishlistDispatch } = useContext(
    WishListContext
  );

  const navigate = useNavigate();


  const presentInWishlist = (itemid) => {
    console.log("itemid",itemid)
    const wishlistItem = wishList.find((item)=> item._id._id ===itemid)
    console.log(wishlistItem, "wishlistItem")
    if(wishlistItem){
      if(products.some((product)=>product._id === wishlistItem._id._id)){
        return "badge-liked"
      }
      return "badge-unliked"
    }

  }


  

  useEffect(() => {
    (async function () {
      try {
       dispatch({type: "SHOW_LOADER"})
        const response = await axios.get(
          "https://serene-lowlands-13656.herokuapp.com/products"
        );

        dispatch({
          type: "DATA_FROM_DATABASE",
          payload: response.data.product,
        });
        dispatch({type: "SHOW_LOADER"})
        
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
        {loader && <LoaderSpinner/>}
          {genreFilter.map((item) => {
            return (
              <span class="card" key={item._id}>
                {console.log("item._id", item._id)}
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
                    class={`wishlist-badge ${presentInWishlist(item._id)}`}
                    onClick={() =>wishlistAuth(token,navigate,item,wishList,wishlistId,WishlistDispatch)
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
