import React from "react";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div>
      <nav class="navigation">
        <span>
          <Link class="link heading" to="/">
            Think Store
          </Link>
        </span>
        <span>
          <Link class="link list-inline" to="/cart">
            <ion-icon class="badge" name="cart-outline"></ion-icon>
          </Link>
          <Link class="link list-inline" to="/wishlist">
            <ion-icon class="badge" name="heart-outline"></ion-icon>
          </Link>
          <Link class="link list-inline" to="/login">
            <ion-icon class="badge" name="person-outline"></ion-icon>
          </Link>
        </span>
      </nav>
    </div>
  );
};
