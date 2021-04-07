import React, { useContext, useState } from 'react';

import '../App.css';
import productImg from '../images/productImg.jpg';
import { CartContext } from '../context/cart-context';



const productList = [
    {
      id: 1,
      name: "The Alchemist",
      price: 1000,
      quantity: 1
    },
    {
      id: 2,
      name: "pant",
      price: 2000,
      quantity: 1
    },
    {
      id: 3,
      name: "shoes",
      price: 2500,
      quantity: 1
    },
    {
      id: 4,
      name: "topi",
      price: 1200,
      quantity: 1
    }
  ];
  
  
  
  function ProductListing(){
   const {cartItem, dispatch} = useContext(CartContext);
  
  
   const addToCartHandler = (id) => {
    dispatch({ type: "ADDTOCART", payload: id });
   }

   const addToWishlisthandler = (item) =>{
       dispatch({type: "WISHLIST", payload: item});
   }
  
    console.log(cartItem);
    return (
        <div class="card-container">
        {
            productList.map((item)=> {
                return (
                    
                        <span class="card">
                            <img class="card-img" src={productImg} alt="img"/>
                            <h4>{item.name}</h4>
                            <p>{item.price}</p>
                            <span>
                            <button class="btn btn-dark btn-dark-hover" onClick={()=>addToCartHandler(item)}>Add to Cart</button>
                            <button class="btn btn-dark btn-dark-hover" onClick={()=>addToWishlisthandler(item)}>Wishlist</button>
                            </span>
                        </span>
                        
                        
                    
                );
            })
        }
        
        </div>
  
  
    )
    
        
    
  }


 

export default ProductListing;
