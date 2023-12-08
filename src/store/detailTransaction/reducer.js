import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getDetailTransactionThunk, createDetailTransactionThunk, getPopularProductThunk, getTodaysOrderedThunk, getYesterdaysOrderedThunk } from "./actions";


const detailTransactionSlice = createSlice({
  name: "detailTransaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetailTransactionThunk.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(getDetailTransactionThunk.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    });
    builder.addCase(getDetailTransactionThunk.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message,
      };
    });
    builder.addCase(createDetailTransactionThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(getPopularProductThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(getTodaysOrderedThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(getYesterdaysOrderedThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
  },
});

export const detailTransactionAction = {
  ...detailTransactionSlice.actions,
  getDetailTransactionThunk,
  createDetailTransactionThunk,
  getPopularProductThunk,
  getTodaysOrderedThunk,
  getYesterdaysOrderedThunk,
};
export const detailTransactionReducer = detailTransactionSlice.reducer;