import { elementAcceptingRef } from "@mui/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      return [...state, action.payload];
    },
    remove(state, action) {
      return state.filter((item, index) => index !== action.payload);
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
