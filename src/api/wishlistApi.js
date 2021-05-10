import axios from "axios";

export const AddToWishlist = async (item, wishlistId, WishlistDispatch) => {
  if (wishlistId === "") {
    const wishlistResponse = await axios.post(
      `https://serene-lowlands-13656.herokuapp.com/wishlists`,
      {
        wishlistArray: { _id: item._id, productId: item._id },
      }
    );
    WishlistDispatch({
      type: "FIND_WISHLISTID",
      payload: wishlistResponse.data.WishlistData._id,
    });

    WishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: wishlistResponse.data.WishlistData.wishlistArray,
    });
  } else {
    const wishlistResponse = await axios.post(
      `https://serene-lowlands-13656.herokuapp.com/wishlists/${wishlistId}`,
      {
        wishlistArray: { _id: item._id, productId: item._id },
      }
    );
    WishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: wishlistResponse.data.WishlistData.wishlistArray,
    });
  }
};
