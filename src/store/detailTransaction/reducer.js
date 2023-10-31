import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getDetailTransactionThunk } from "./actions";


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
  },
});

export const detailTransactionAction = {
  ...detailTransactionSlice.actions,
  getDetailTransactionThunk,
};
export const detailTransactionReducer = detailTransactionSlice.reducer;