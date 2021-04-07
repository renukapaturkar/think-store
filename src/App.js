import React from 'react';
import './App.css';
import {useState} from 'react';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';




function App() {
  const [route, setRoute] = useState("Products");
  
  return (
    <div className="App">
    <div class="app-body">
    <nav class="navigation">
      <span><a  class="link heading" href="#">
        Elysian
      </a></span>
      <ul>
        
          <li class="list-non-bullet list-inline" onClick={()=> setRoute("Products") }>Products</li>
        
          <li class="list-non-bullet list-inline" onClick={()=> setRoute("Cart") }>Cart</li>
        
          <li class="list-non-bullet list-inline"  onClick={()=> setRoute("Wishlist") }>Wishlist</li>
        
      </ul>
    </nav>
    {route === "Products" && <ProductListing/>}
    {route === "Cart" && <Cart/>}
    {route === "Wishlist" && <Wishlist/>}
    </div>
    </div>
  );
}

export default App;
