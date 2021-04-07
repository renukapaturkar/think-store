import React, { useContext} from 'react';
import '../App.css';
import { CartContext } from '../context/cart-context';
import productImg from '../images/productImg.jpg';



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
                  
                      <span class="card card-horizontal">
                          <img class="card-img" src={productImg} alt="img"/>
                          <div key={item.id}>

                          <h4>{item.name}</h4>
                          <p>{item.price}</p>
                          <span>
                          
                          <span>
                          <button class="btn btn-small" onClick={()=>dispatch({type:"INCREASE_QUANTITY", payload: item.id})}>+</button>
                          <span>{item.quantity}</span>
                          <button class="btn btn-small" onClick={()=>dispatch({type:"DECREASE_QUANTITY", payload: item.id})}>-</button>
                          </span>
                          <button class="btn icon-btn"  onClick={()=>dispatch({type:"REMOVE_FROM_CART", payload: item})}>X</button>
                      </span>
                      
                              
                          </div>

                      </span>
                      
                      
                  
              );
          })
      }
      
      </div>
        
      </div>
  
  
  
  )
  }
  


  export default Cart;