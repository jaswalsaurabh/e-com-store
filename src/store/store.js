import { configureStore} from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    products: ProductSlice,
    cart:CartSlice ,
  },
});

export default store;
