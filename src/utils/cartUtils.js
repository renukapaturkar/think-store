import { AddToCart } from "../api/CartApi";


export const presentInCart = (productId, cartItem)=> {
    const ItemInCart = cartItem.find((item)=> item._id._id === productId)
    if(ItemInCart){
      return true;
    }
    return false; 
  }

  export   const cartAuth = (token,navigate,productDetail, cartId, dispatch) => {
    if(token){
      AddToCart(productDetail, cartId, dispatch)
    }else {
      navigate("/login")
    }
  }

