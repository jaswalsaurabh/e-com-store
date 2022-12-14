import { Button, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/ProductSlice";

const ProductList = ({ state }) => {
  const dispatch = useDispatch();

  // const state = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleClick = (item) => {
    dispatch(add(item));
  };

  if (state.loading) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }

  const data = state.filterData.length > 0 ? state.filterData : state.products;

  return (
    <div className="productDiv">
      {data.map((item, index) => (
        <div key={index} className="product">
          <div className="image">
            <img
              loading={"lazy"}
              src={item.image}
              alt={item.title}
              height="150px"
              width={"200px"}
            />
          </div>
          <p className="title">{item.title}</p>
          <p>$ {item.price}</p>
          <Button
            fullWidth
            variant={"outlined"}
            onClick={() => handleClick(item)}
          >
            Add
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
