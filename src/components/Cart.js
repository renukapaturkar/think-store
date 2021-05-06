import React, { useContext, useEffect} from 'react';
import '../App.css';
import { CartContext } from '../context/cart-context';
import axios from 'axios'




export function Cart() {
    
    const {cartItem,cartId, dispatch} = useContext(CartContext);

    const increaseQuantity = async(productId, Quantity, cartId) =>{
        console.log(Quantity)
        const response = await axios.post(
            `https://serene-lowlands-13656.herokuapp.com/carts/${cartId}/${productId}`,
            {
              quantity: Quantity += 1 
            })
            console.log(Quantity)
            console.log(response.data.CartData.productsArray)

            dispatch({type:"INCREASE_QUANTITY", payload:response.data.CartData.productsArray})

    };

    const decreaseQuantity = async(productId, Quantity, cartId)=> {
        console.log(Quantity)
        const response = await axios.post( `https://serene-lowlands-13656.herokuapp.com/carts/${cartId}/${productId}`,            
        {
            quantity: Quantity -= 1 
          })
        console.log(Quantity)
        console.log(response.data.CartData.productsArray)

        dispatch({type:"DECREASE_QUANTITY", payload: response.data.CartData.productsArray})
    }

    const removeFromcart = async(productid, cartId) =>{
      const response = await axios.delete(`https://serene-lowlands-13656.herokuapp.com/carts/${cartId}/${productid}`, 
      {
        productsArray: {productId : productid}
      })
      console.log(response)
      dispatch({type:"REMOVE_FROM_CART", payload: response.data.CartData.productsArray})
    }


    return (
      <div>
        <div class="cart-container">

            <div class="card-container ">
      {
          cartItem.map((item)=> {
              return (
                  
                      <div class="card card-horizontal" key={item._id}>
                            <div class="img-container img-horizontal-container"><img class="card-img" src={`${item.productId.image_url}`} alt="img"/></div>
                            <div class="content-container">

                            <div>
                            <h4>{item.productId.title}</h4>
                            <small>{item.productId.genre}, {item.productId.author}</small>
                            <p>Rs.{item.productId.price}</p>
                            </div>

                          <div class="remove-badge" onClick={()=>removeFromcart(item._id, cartId)}><ion-icon class="badge" name="close"></ion-icon></div>
                          <span>
                          <button class="btn-small" onClick={()=>increaseQuantity(item._id, item.quantity, cartId)}>+</button>
                          <b>{item.quantity}</b>
                          <button class="btn-small" onClick={()=>decreaseQuantity(item._id, item.quantity, cartId)}>-</button>
                          </span>
                                
                                </div>


                        </div>
                          

                      
                      
                      
                  
              );
          })
      }
      </div>

      <div class="pricing-container">

          <h4>Price Details </h4>
          <div>
          <span>Total MRP</span>
          <span>0.00</span>
          </div>
          <div>
          <span>Total Amount</span>
          <span>0.00</span>
          </div>
          <div>
            <button class="btn btn-dark">Place Order</button>
          </div>
          
        </div>
      
      </div>
      
      </div>
  
  
  
  )
  
  }
  


  export default Cart;