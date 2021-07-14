import {AddToWishlist} from "../api/wishlistApi";
import { RemoveFromWishlist } from "../api/RemoveFromWishlist";

  export const wishlistDataHandler = (item, wishList, wishlistId, WishlistDispatch) => {
    if(wishList.some((product)=> product._id._id === item._id ) === false){
      AddToWishlist(item,wishlistId,WishlistDispatch)
    }else {
      RemoveFromWishlist(item,wishlistId, WishlistDispatch)
      
    }
}

export const presentInWishlist = (id, wishList,products)=> {
  const ItemInWishlist = wishList.find((item)=>item._id._id === id);
  if(ItemInWishlist){
    if(products.some((product)=> product._id === ItemInWishlist._id)){
      return "badge-liked";
    }return "badge-unliked";
    
  }
}


export const wishlistAuth = (token,navigate,item,wishList,wishlistId,WishlistDispatch) => {
  if(token){
    wishlistDataHandler(item,wishList,wishlistId,WishlistDispatch)
  }else {
    navigate("/login")
  }
}