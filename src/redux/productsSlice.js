import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts?.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts?.fulfilled, (state, action) => {
        state.products = action?.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts?.rejected, (state, action) => {
        state.loading = false;
        state.products = null;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
