import React, { useContext} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {CartContext} from '../context/cart-context';
import {WishListContext} from '../context/wishlist-context';
import {AddToCart} from '../api/CartApi';
import { RemoveFromWishlist } from '../api/RemoveFromWishlist';
import { presentInCart } from "../utils/cartUtils";


export function Wishlist() {
    const {cartId,cartItem, dispatch} = useContext(CartContext);
    const {wishList, wishlistId, WishlistDispatch} = useContext(WishListContext);


    return (
      <div>
          <div>
              Your Wishlist
          </div>
        
            <div class="card-container">
      {
          wishList.map((item)=> {
              return (
                  
                      <span class="card" key={item.productId._id}>
                           <div class="img-container"><img class="card-img" src={`${item.productId.image_url}`} alt="img"/></div>
                           <b>{item.productId.title}</b>
                           <em>{item.productId.author}, {item.productId.genre}</em>
                            <b>&#8377; {item.productId.price}</b>
                            <div class="remove-badge" onClick={()=>RemoveFromWishlist(item, wishlistId, WishlistDispatch)}><ion-icon class="badge" name="close"></ion-icon></div>
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
                 <button class="btn btn-dark btn-=dark-hover"> Go To Cart</button>
                </Link>
              )}
                          
                          </span>
                      </span>
                      
                      
                  
              );
          })
      }
      
      </div>
        
      </div>
  
  
  
  )
  }
  


  export default Wishlist;