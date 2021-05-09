import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/cart-context";
import { BrowserRouter as Router } from "react-router-dom";
import { WishlistProvider } from "./context/wishlist-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
