import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
};

const ProductSlice = createSlice({
  name: "prdouct",
  initialState: initialState,
  reducers: {
    add(state, action) {
      return { ...state, products: action.payload };
    },
    setLoading(state, action) {
      return { ...state, loading: action.payload };
    },
  },
});

export const { add, setLoading } = ProductSlice.actions;
export default ProductSlice.reducer;

export function getProducts() {
  return function getAsyncThunk(dispatch, state) {
    dispatch(setLoading(true));
    fetch("https://fakestoreapi.com/products")
      .then(async (res) => {
        const data = await res.json();
        dispatch(add(data));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setLoading(false));
        console.log("err from api calling ", err);
      });
  };
}
