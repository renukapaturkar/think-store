import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import ProductListing from "./components/ProductListing";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
