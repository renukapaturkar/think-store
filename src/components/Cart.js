import React, { useContext, useEffect} from 'react';
import '../App.css';
import { CartContext } from '../context/cart-context';
import axios from 'axios'




export function Cart() {
    
    const {cartItem,cartId, dispatch} = useContext(CartContext);

    const increaseQuantity = async(productId, Quantity, cartId) =>{
        console.log(Quantity)
        const response = await axios.post(
            `http://localhost:3000/carts/${cartId}/${productId}`,
            {
              quantity: Quantity += 1 
            })
            console.log(Quantity)
            console.log(response.data.CartData.productsArray)

            dispatch({type:"INCREASE_QUANTITY", payload:response.data.CartData.productsArray})

    };

    const decreaseQuantity = async(productId, Quantity, cartId)=> {
        console.log(Quantity)
        const response = await axios.post( `http://localhost:3000/carts/${cartId}/${productId}`,            
        {
            quantity: Quantity -= 1 
          })
        console.log(Quantity)
        console.log(response.data.CartData.productsArray)

        dispatch({type:"DECREASE_QUANTITY", payload: response.data.CartData.productsArray})
    }


    return (
      <div>
        <div>
          <h2>Total: </h2>
        </div>
            <div class="card-container ">
      {
          cartItem.map((item)=> {
              return (
                  
                      <div class="card-horizontal" key={item._id}>
                            <div class="img-container img-horizontal-container"><img class="card-img" src={`${item.productId.image_url}`} alt="img"/></div>
                            <div class="content-container">

                            <div>
                            <h4>{item.productId.title}</h4>
                            <small>{item.productId.genre}, {item.productId.author}</small>
                            <p>Rs.{item.productId.price}</p>
                            </div>

                          <div class="remove-badge"><ion-icon class="badge" name="close"></ion-icon></div>
                          <span>
                          <button class="btn-small" onClick={()=>increaseQuantity(item._id, item.quantity, cartId)}>+</button>
                          <span>{item.quantity}</span>
                          <button class="btn-small" onClick={()=>decreaseQuantity(item._id, item.quantity, cartId)}>-</button>
                          </span>
                                
                                </div>


                          
                  
                      
                              
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