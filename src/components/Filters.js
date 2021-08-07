import React from 'react';
import '../App.css';
import {useContext} from 'react';
import { CartContext } from '../context/cart-context';
import {sortByGenre} from '../utils/sort';

export const Filters = () => {
    const {dispatch} = useContext(CartContext);
    return (
        


      <div class="filter-container">
      <div>
        <b>Filters</b>
      </div>
      <div>
        <b>Genre</b>
      </div>
      <div>
        <div>
          <input
            type="radio"
            id="allgenre"
            name="Genre"
            value="allgenre"
            onClick={(e) => sortByGenre(e, dispatch)}
            
          />
          <label for="allgenre">All</label>
        </div>

        <div>
          <input
            type="radio"
            id="fiction"
            name="Genre"
            value="fiction"
            onClick={(e) => sortByGenre(e, dispatch)}
          />
          <label for="fiction">Fiction</label>
        </div>

        <div>
          <input
            type="radio"
            id="self help"
            name="Genre"
            value="self help"
            onClick={(e) => sortByGenre(e, dispatch)}
          />
          <label for="self help">Selfhelp</label>
        </div>
        <div>
          <input
            type="radio"
            id="business"
            name="Genre"
            value="business"
            onClick={(e) => sortByGenre(e, dispatch)}
          />
          <label for="business">Business</label>
        </div>
      </div>


    </div>
    )
}