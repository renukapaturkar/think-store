import axios from 'axios';
import { toastText } from "../utils/toast";


export const RemoveFromWishlist = async(item,wishlistId, WishlistDispatch) => {
    const response = await axios.delete(`https://serene-lowlands-13656.herokuapp.com/wishlists/${wishlistId}/${item._id}`,
    {
        wishlistArray: {_id: item._id}
    });
    WishlistDispatch({type: "REMOVE_FROM_WISHLIST", payload: response.data.WishlistData.wishlistArray});
    toastText("Removed from Wishlist");
}