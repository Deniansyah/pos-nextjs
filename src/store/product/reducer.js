import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getProductThunk } from "./actions";


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductThunk.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(getProductThunk.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    });
    builder.addCase(getProductThunk.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message,
      };
    });
  },
});

export const productAction = {
  ...productSlice.actions,
  getProductThunk,
};
export const productReducer = productSlice.reducer;