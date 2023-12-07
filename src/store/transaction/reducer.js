import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getTransactionThunk, getTransactionByIdThunk, createTransactionThunk, deleteTransactionThunk, getAllTodaysTotalsThunk, getAllYesterdaysTotalsThunk } from "./actions";


const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactionThunk.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(getTransactionThunk.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    });
    builder.addCase(getTransactionThunk.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message,
      };
    });
    builder.addCase(getTransactionByIdThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(createTransactionThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(deleteTransactionThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(getAllTodaysTotalsThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(getAllYesterdaysTotalsThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
  },
});

export const transactionAction = {
  ...transactionSlice.actions,
  getTransactionThunk,
  getTransactionByIdThunk,
  createTransactionThunk,
  deleteTransactionThunk,
  getAllTodaysTotalsThunk,
  getAllYesterdaysTotalsThunk,
};
export const transactionReducer = transactionSlice.reducer;