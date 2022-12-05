import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../favicon.svg";

const Navbar = () => {
  const state = useSelector((state) => state.cart);
  console.log("state", state);
  return (
    <nav className="navbar">
      <Link className="logo" to={"/"}>
        Your Cart
      </Link>
      <div className="linkDiv">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/cart"}>
          Cart {state.length}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
