import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getCategoriesThunk, getCategoriesFiftyThunk, deleteCategoriesThunk, createCategoriesThunk, getCategoriesByIdThunk, updateCategoriesThunk } from "./actions";


const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesThunk.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(getCategoriesThunk.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    });
    builder.addCase(getCategoriesThunk.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message,
      };
    });
    builder.addCase(getCategoriesFiftyThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(deleteCategoriesThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(createCategoriesThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(getCategoriesByIdThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(updateCategoriesThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
  },
});

export const categoriesAction = {
  ...categoriesSlice.actions,
  getCategoriesThunk,
  getCategoriesFiftyThunk,
  deleteCategoriesThunk,
  createCategoriesThunk,
  getCategoriesByIdThunk,
  updateCategoriesThunk,
};
export const categoriesReducer = categoriesSlice.reducer;