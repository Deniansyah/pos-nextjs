import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getUsersThunk } from "./actions";


const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    });
    builder.addCase(getUsersThunk.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message,
      };
    });
  },
});

export const usersAction = {
  ...usersSlice.actions,
  getUsersThunk,
};
export const usersReducer = usersSlice.reducer;