import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getProductThunk, deleteProductThunk, createProductThunk, getProductByIdThunk, updateProductThunk } from "./actions";


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
    builder.addCase(deleteProductThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(createProductThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(getProductByIdThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(updateProductThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
  },
});

export const productAction = {
  ...productSlice.actions,
  getProductThunk,
  deleteProductThunk,
  createProductThunk,
  getProductByIdThunk,
  updateProductThunk,
};
export const productReducer = productSlice.reducer;