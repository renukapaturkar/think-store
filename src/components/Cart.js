import React, { useContext} from 'react';
import '../App.css';
import { CartContext } from '../context/cart-context';




export function Cart() {
    
    const {cartItem, dispatch} = useContext(CartContext);
    

    return (
      <div>
        <div>
          <h2>Total: </h2>
        </div>
            <div class="card-container ">
      {
          cartItem.map((item)=> {
              return (
                  
                      <div class="card ">
                            <div class="img-container"><img class="card-img" src={`${item.image_url}`} alt="img"/></div>
                            <em>{item.title}</em>
                            <p>Rs.{item.price}</p>
                            <span>
                          <span>
                          <button class="btn-small" onClick={()=>dispatch({type:"INCREASE_QUANTITY", payload: item.id})}>+</button>
                          <span>1</span>
                          <button class="btn-small" onClick={()=>dispatch({type:"DECREASE_QUANTITY", payload: item.id})}>-</button>
                          </span>

                          
                      </span>
                      
                              
                          </div>

                      
                      
                      
                  
              );
          })
      }
      
      </div>
      <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>  
      </div>
  
  
  
  )
  
  }
  


  export default Cart;