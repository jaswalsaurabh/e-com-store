import { Button, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/ProductSlice";
import StarRateIcon from "@mui/icons-material/StarRate";

const ProductList = ({ state }) => {
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cart);

  console.log("cartState", cartState);

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
          <div className="priceDiv">
            <p>$ {item.price}</p>
            <p>
              {item.rating.rate}{" "}
              <span className="rating">
                <StarRateIcon />
              </span>{" "}
            </p>
          </div>
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
