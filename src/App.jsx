import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import { handleSearch } from "./store/ProductSlice";

const App = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function throttle(cb, s) {
    let time;
    return function (...args) {
      if (time) clearTimeout(time);
      time = setTimeout(() => {
        cb(...args);
      }, s);
    };
  }

  const handleChange = throttle((e) => {
    const { value } = e.target;
    dispatch(handleSearch(value));
  }, 350);

  return (
    <div>
      <BrowserRouter>
        <Navbar handleChange={handleChange} />
        <Routes>
          <Route path="/" element={<ProductPage state={state} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
