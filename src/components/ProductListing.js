import React, { useContext, useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import "../App.css";
import { CartContext } from "../context/cart-context";
import {WishListContext} from "../context/wishlist-context";
import axios from "axios";
import {AddToWishlist} from "../api/wishlistApi"
import {AddToCart} from "../api/CartApi";
import { RemoveFromWishlist } from "../api/RemoveFromWishlist";
import {Filters} from './Filters';
import {sortPrice,sortGenre } from '../utils/sort';
import { SortBy } from "./SortBy";


function ProductListing() {
  const { cartItem, sortbyprice, sortbygenre, cartId, dispatch } = useContext(
    CartContext
  );
  const {wishlistId,wishList, WishlistDispatch} = useContext(WishListContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://serene-lowlands-13656.herokuapp.com/products"
        );
        setProducts(response.data.product);
      } catch (error) {
        console.log("error");
      }
    })();
  }, []);

  const presentInCart = (productId)=> {
    const ItemInCart = cartItem.find((item)=> item._id === productId);
    if(ItemInCart){
      return true;
    }
    return false; 
  }

  const wishlistDataHandler = (item, wishList) => {
      if(wishList.some((product)=> product._id === item._id ) === false){
        AddToWishlist(item,wishlistId,WishlistDispatch)
      }else {
        RemoveFromWishlist(item,wishlistId, WishlistDispatch)
      }
  }

  const presentInWishlist = (productId, wishList)=> {
    const ItemInWishlist = wishList.find((item)=> item._id === productId);
    if(ItemInWishlist){
      if(products.some((product)=> product._id === ItemInWishlist._id)){
        return "badge-liked";
      }return "badge-unliked";
      
    }
  }

  const filterResults = sortPrice(products, sortbyprice);

  const genreFilter = sortGenre(filterResults, sortbygenre);

  return (
    <div class="container">
      <Filters/>

      <div class="main-container">
        <SortBy/>
        <div class="card-container">
          {genreFilter.map((item) => {
            return (
              <span class="card" key={item._id}>
                <Link to={`/${item._id}`}>
                <div class="img-container">
                  <img class="card-img" src={`${item.image_url}`} alt="img" />
                </div>
                </Link>

                <h5>{item.title}</h5>
                <small>{item.genre}, {item.author}</small>
                <p>Rs.{item.price}</p>
                <span>
                  {
                    presentInCart(item._id) === false ? (
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
                  }

                  <div
                  
                    class={`wishlist-badge ${presentInWishlist(item._id, wishList)}`}
                    onClick={() => wishlistDataHandler(item, wishList)}
                  > <ion-icon class="badge" name="heart"></ion-icon>
                   

                    
                  </div>
                </span>
              </span>
            );
          })}
        </div>
      </div>


    </div>
  );
}

export default ProductListing;
