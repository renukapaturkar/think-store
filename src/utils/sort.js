
export const sortByPrice = (e, dispatch) => {
    
    if (e.target.value === "lowtohigh") {
      dispatch({ type: "SORT_BY_PRICE", payload: e.target.value });
    } else {
      dispatch({ type: "SORT_BY_PRICE", payload: e.target.value });
    }
  };

export const sortPrice = (products, sortbyprice) => {
    if (sortbyprice === "lowtohigh") {
      return products.sort((a, b) => a.price - b.price);
    }
    return products.sort((a, b) => b.price - a.price);
  };


export const sortByGenre = (e, dispatch) => {
    if (e.target.value === "allgenre") {
      dispatch({ type: "SORT_BY_GENRE", payload: e.target.value });
    } else if (e.target.value === "fiction") {
      dispatch({ type: "SORT_BY_GENRE", payload: e.target.value });
    } else if (e.target.value === "self help") {
      dispatch({ type: "SORT_BY_GENRE", payload: e.target.value });
    } else if (e.target.value === "business") {
      dispatch({ type: "SORT_BY_GENRE", payload: e.target.value });
    }
  };

export const sortGenre = (products, sortbygenre) => {
    if (sortbygenre === "allgenre") {
      return products.filter((product) => product);
    } else if (sortbygenre === "fiction") {
      return products.filter(
        (product) => product.genre.toLowerCase() === sortbygenre
      );
    } else if (sortbygenre === "self help") {
      return products.filter(
        (product) => product.genre.toLowerCase() === sortbygenre
      );
    } else if (sortbygenre === "business") {
      return products.filter(
        (product) => product.genre.toLowerCase() === sortbygenre
      );
    } else {
      return products;
    }
  };
