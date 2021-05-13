import React, { useContext} from 'react';
import '../App.css';
import {CartContext} from '../context/cart-context';
import {WishListContext} from '../context/wishlist-context';
import {AddToCart} from '../api/CartApi';
import { RemoveFromWishlist } from '../api/RemoveFromWishlist';


export function Wishlist() {
    const {cartId, dispatch} = useContext(CartContext);
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
                           <em>{item.productId.title}</em>
                            <p>Rs.{item.productId.price}</p>
                            <div class="remove-badge" onClick={()=>RemoveFromWishlist(item, wishlistId, WishlistDispatch)}><ion-icon class="badge" name="close"></ion-icon></div>
                          <span>
                          <button class="btn btn-dark" onClick={()=>AddToCart(item,cartId, dispatch)}>Move to Cart</button>
                          
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