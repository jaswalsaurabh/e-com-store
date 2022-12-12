import React from "react";
import FilterComp from "./FilterComp";
import ProductList from "./ProductList";
import "./comp.css";

const ProductPage = () => {
  return (
    <div className="productPage">
      <FilterComp />
      <ProductList />
    </div>
  );
};

export default ProductPage;
