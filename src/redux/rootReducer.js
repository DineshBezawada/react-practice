import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";

const rootReducer = combineReducers({
  products: productReducer,
});
export default rootReducer;
