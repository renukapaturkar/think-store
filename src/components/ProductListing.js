import React, { useContext, useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import "../App.css";
import { CartContext } from "../context/cart-context";
import {WishListContext} from "../context/wishlist-context";
import axios from "axios";
import {AddToWishlist} from "../api/wishlistApi"
import {AddToCart} from "../api/CartApi";

function ProductListing() {
  const { cartItem, sortbyprice, sortbygenre, cartId, dispatch } = useContext(
    CartContext
  );
  const {wishlistId, WishlistDispatch} = useContext(WishListContext);
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




  const sortByPrice = (e) => {
    if (e.target.value === "lowtohigh") {
      dispatch({ type: "SORT_BY_PRICE", payload: e.target.value });
    } else {
      dispatch({ type: "SORT_BY_PRICE", payload: e.target.value });
    }
  };

  const sortPrice = (products, sortbyprice) => {
    if (sortbyprice === "lowtohigh") {
      return products.sort((a, b) => a.price - b.price);
    }
    return products.sort((a, b) => b.price - a.price);
  };

  const filterResults = sortPrice(products, sortbyprice);

  const presentInCart = (productId)=> {
    const ItemInCart = cartItem.find((item)=> item._id === productId);
    if(ItemInCart){
      return true;
    }
    return false; 
  }

  const sortByGenre = (e) => {
    if (e.target.value === "allgenre") {
      dispatch({ type: "SORT_BY_GENRE", payload: e.target.value });
    } else if (e.target.value === "fiction") {
      dispatch({ type: "SORT_BY_GENRE", payload: e.target.value });
    } else if (e.target.value === "self help") {
      dispatch({ type: "SORT_BY_GENRE", payload: e.target.value });
    } else if (e.target.value === "business") {
      dispatch({ type: "SORT_BY_GENRE", payload: e.target.value });
    }
  };

  const sortGenre = (products, sortbygenre) => {
    if (sortbygenre === "allgenre") {
      return products.filter((product) => product);
    } else if (sortbygenre === "fiction") {
      return products.filter(
        (product) => product.genre.toLowerCase() === sortbygenre
      );
    } else if (sortbygenre === "self help") {
      return products.filter(
        (product) => product.genre.toLowerCase() === sortbygenre
      );
    } else if (sortbygenre === "business") {
      return products.filter(
        (product) => product.genre.toLowerCase() === sortbygenre
      );
    } else {
      return products;
    }
  };

  const genreFilter = sortGenre(filterResults, sortbygenre);

  return (
    <div class="container">
      <div class="filter-container">
        <div>
          <b>Filters</b>
        </div>
        <div>
          <b>Genre</b>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="allgenre"
              name="Genre"
              value="allgenre"
              onClick={(e) => sortByGenre(e)}
              
            />
            <label for="allgenre">All</label>
          </div>

          <div>
            <input
              type="radio"
              id="fiction"
              name="Genre"
              value="fiction"
              onClick={(e) => sortByGenre(e)}
            />
            <label for="fiction">Fiction</label>
          </div>

          <div>
            <input
              type="radio"
              id="self help"
              name="Genre"
              value="self help"
              onClick={(e) => sortByGenre(e)}
            />
            <label for="self help">Self-Help</label>
          </div>
          <div>
            <input
              type="radio"
              id="business"
              name="Genre"
              value="business"
              onClick={(e) => sortByGenre(e)}
            />
            <label for="business">Business</label>
          </div>
        </div>
      </div>

      <div class="main-container">
        <div class="sortby-container">
          <select onChange={(e) => sortByPrice(e)}>
            <option value="lowtohigh">Sort by : Low to High</option>
            <option value="hightolow">Sort by : High to Low</option>
          </select>
        </div>
        <div class="card-container">
          {genreFilter.map((item) => {
            return (
              <span class="card" key={item._id}>
                <div class="img-container">
                  <img class="card-img" src={`${item.image_url}`} alt="img" />
                </div>
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
                    class="wishlist-badge"
                    onClick={() => AddToWishlist(item,wishlistId,WishlistDispatch)}
                  >
                    <ion-icon class="badge" name="heart"></ion-icon>
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
