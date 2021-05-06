import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <div className="App">
      <div class="app-body">
        <nav class="navigation">
          <span>

            <Link class="link heading" to='/'>Elysian</Link>
          </span>
          <span>
            {/* <Link class="link list-inline" to="/">
              Products
            </Link> */}
            <Link class="link list-inline" to="/cart">
            <ion-icon class="badge" name="cart-outline"></ion-icon>
            </Link>
            <Link class="link list-inline" to="/wishlist">
            <ion-icon class="badge" name="heart-outline"></ion-icon>
            </Link>
          </span>
        </nav>

        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
