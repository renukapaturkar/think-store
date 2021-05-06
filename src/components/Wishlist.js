import React, { useContext} from 'react';
import '../App.css';
import { CartContext } from '../context/cart-context';


export function Wishlist() {
    const { cartItem } = useContext(CartContext);
    return (
      <div>
          <div>
              Your Wishlist
          </div>
        
            <div class="card-container">
      {
          cartItem.map((item)=> {
              return (
                  
                      <span class="card">
                           <div class="img-container"><img class="card-img" src={`${item.image_url}`} alt="img"/></div>
                           <em>{item.title}</em>
                            <p>Rs.{item.price}</p>
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