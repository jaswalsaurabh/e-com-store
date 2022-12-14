import React from "react";
import FilterComp from "./FilterComp";
import ProductList from "./ProductList";
import "./comp.css";

const ProductPage = ({state}) => {
  return (
    <div className="productPage">
      <FilterComp />
      <ProductList state={state} />
    </div>
  );
};

export default ProductPage;
