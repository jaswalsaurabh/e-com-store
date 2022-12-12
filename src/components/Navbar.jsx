import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const Navbar = () => {
  const state = useSelector((state) => state.cart);
  console.log("state", state);
  return (
    <nav className="navbar">
      <Link className="logo" to={"/"}>
        Your Cart
      </Link>
      <div className="searchDiv" >
        <input className="searchInput" type={"text"} placeholder="search.." />
      </div>
      <div className="linkDiv">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/cart"}>
          Cart{" "}
          <Badge badgeContent={state.length} color="primary">
            <ShoppingCartIcon color={"action"} />
          </Badge>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
