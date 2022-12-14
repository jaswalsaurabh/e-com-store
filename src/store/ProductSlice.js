import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filterData: [],
  loading: false,
  categories: [],
  prices: [],
  ratings: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    handleSearch(state, action) {
      let temp = [];
      if (action.payload) {
        temp = state.products.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
      return { ...state, filterData: temp };
    },
    add(state, action) {
      return { ...state, products: action.payload };
    },
    setRatings(state, action) {
      return { ...state, ratings: action.payload };
    },
    setCategories(state, action) {
      return { ...state, categories: action.payload };
    },
    setPrices(state, action) {
      return { ...state, prices: action.payload };
    },
    setLoading(state, action) {
      return { ...state, loading: action.payload };
    },
  },
});

export const {
  add,
  setLoading,
  setCategories,
  setPrices,
  setRatings,
  handleSearch,
} = ProductSlice.actions;
export default ProductSlice.reducer;

export function getProducts() {
  return function getAsyncThunk(dispatch, state) {
    dispatch(setLoading(true));
    fetch("https://fakestoreapi.com/products")
      .then(async (res) => {
        const data = await res.json();
        let cat = new Set();
        let price = new Set();
        data.forEach((item) => {
          cat.add(item.category);
          price.add(item.price);
        });
        cat = [...cat];
        price = [...price];
        price = price.sort((a, b) => a - b);
        dispatch(setCategories(cat));
        dispatch(setPrices(price));
        dispatch(add(data));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setLoading(false));
        console.log("err from api calling ", err);
      });
  };
}
