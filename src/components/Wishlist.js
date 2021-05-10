import React, { useContext} from 'react';
import '../App.css';
import { CartContext } from '../context/cart-context';
import {WishListContext} from '../context/wishlist-context';


export function Wishlist() {
    
    const {wishList, wishlistId} = useContext(WishListContext);


    return (
      <div>
          <div>
              Your Wishlist
          </div>
        
            <div class="card-container">
      {
          wishList.map((item)=> {
              return (
                  
                      <span class="card">
                           <div class="img-container"><img class="card-img" src={`${item.productId.image_url}`} alt="img"/></div>
                           <em>{item.productId.title}</em>
                            <p>Rs.{item.productId.price}</p>
                          <span>
                          <button class="btn btn-dark">Move to Cart</button>
                          
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