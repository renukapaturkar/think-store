import React from 'react';
import '../App.css';
import {useContext} from 'react';
import { CartContext } from '../context/cart-context';
import {sortByPrice} from '../utils/sort';

export const SortBy = () => {
    const {dispatch} = useContext(CartContext);
    return(
        <div class="sortby-container">
        <select onChange={(e) => sortByPrice(e, dispatch)}>
          <option value="lowtohigh">Sort by : Low to High</option>
          <option value="hightolow">Sort by : High to Low</option>
        </select>
      </div>
    )
}