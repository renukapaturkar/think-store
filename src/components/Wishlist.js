import React, { useContext} from 'react';
import '../App.css';
import { CartContext } from '../context/cart-context';
import productImg from '../images/productImg.jpg';

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
                          <img class="card-img" src={productImg} alt="img"/>
                          <h4>{item.name}</h4>
                          <p>{item.price}</p>
                          <span>
                          <button class="btn btn-dark btn-dark-hover">Add to Cart</button>
                          <button class="btn btn-dark btn-dark-hover">Remove</button>
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