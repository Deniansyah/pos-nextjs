import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getCategoriesThunk } from "./actions";


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
  },
});

export const categoriesAction = {
  ...categoriesSlice.actions,
  getCategoriesThunk,
};
export const categoriesReducer = categoriesSlice.reducer;