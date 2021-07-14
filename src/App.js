import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route} from "react-router-dom";
import ProductListing from "./components/ProductListing";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { NavigationBar } from "./components/NavigationBar";
import { ProductDetails } from "./components/ProductDetails";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import {PrivateRoute} from './components/PrivateRoute';
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <PrivateRoute path="/cart" element={<Cart />} />
        <PrivateRoute path="/wishlist" element={<Wishlist />} />
        <Route path=":id" element={<ProductDetails/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="userprofile" element={<UserProfile/>}/>
      </Routes>
      <ToastContainer/> 
    </div>
  );
}

export default App;
