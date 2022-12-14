import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/CartSlice";

const Cart = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const data = new Set(state);

  console.log("data", data);

  if (state.length === 0) {
    return (
      <div className="loader">
        <h2>There are no item in your cart 😢😢</h2>
      </div>
    );
  }

  const handleClick = (from, item) => {
    if (from === "add") {
      dispatch(add(item));
    } else {
      dispatch(remove(item));
    }
  };

  const getTotal = () => {
    let total = 0;
    state.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  return (
    <>
      <div className="productDiv">
        {state.map((item, index) => (
          <div key={index} className="product">
            <div className="image">
              <img
                src={item.image}
                loading={"lazy"}
                height="130px"
                width={"130px"}
                alt={item.title}
              />
            </div>
            <p className="title">{item.title}</p>
            <p>$ {item.price}</p>
            <div className="btnDiv">
              <Button
                className="cartBtn"
                fullWidth
                color={"secondary"}
                variant={"outlined"}
                size="small"
                onClick={() => handleClick("remove", index)}
              >
                -
              </Button>
              <p className="cartBtn">1</p>
              <Button
                className="cartBtn"
                fullWidth
                variant={"outlined"}
                size="small"
                onClick={() => handleClick("add", item)}
              >
                +
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <p>Cart Total $ {getTotal()}</p>
        <Button variant={"outlined"} color={"success"}>
          Checkout
        </Button>
      </div>
    </>
  );
};

export default Cart;
