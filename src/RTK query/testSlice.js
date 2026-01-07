import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testData: [],
  error: null,
  loading: false,
};

const testSlice = createSlice({
  name: "testData",
  initialState,

  reducers: {
    addData: (state, action) => {
      state.testData.push(action.payload);
    },

    clearData: (state) => {
      state.testData = [];
    },
  },
});

export const { addData, clearData } = testSlice.actions;
export default testSlice.reducer;
