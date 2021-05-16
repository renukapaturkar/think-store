

export const presentInCart = (productId, cartItem)=> {
    const ItemInCart = cartItem.find((item)=> item._id === productId);
    if(ItemInCart){
      return true;
    }
    return false; 
  }

