import axios from 'axios';


export const RemoveFromWishlist = async(item,wishlistId, WishlistDispatch) => {
    const response = await axios.delete(`https://serene-lowlands-13656.herokuapp.com/wishlists/${wishlistId}/${item._id}`,
    {
        wishlistArray: {productId: item._id}
    });
    console.log(response)
    WishlistDispatch({type: "REMOVE_FROM_WISHLIST", payload: response.data.WishlistData.wishlistArray})
}