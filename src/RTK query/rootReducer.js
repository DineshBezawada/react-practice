import { combineReducers } from "@reduxjs/toolkit";
import testReducer from "../features/test/testSlice";
import { productsApi } from "../services/productsApi";

const rootReducer = combineReducers({
  testData: testReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export default rootReducer;
