import React from "react";
import { Link } from "react-router-dom";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

export default function Header() {
  return (
    <div className="p-7 bg-blue-500 text-white text-3xl font-bold top-0 fixed w-full">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/" className="hover:underline hover:text-blue-200 pr-6">Fidget Spinner World</Link>
          <Link id="cart" to="/cart" className="hover:underline hover:text-blue-200 pl-6">
            Cart
          </Link>
        </div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}
