import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getUsersThunk, deleteUserThunk, createUserThunk, getUserByIdThunk, updateUserThunk } from "./actions";


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
    builder.addCase(deleteUserThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(createUserThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(getUserByIdThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(updateUserThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
  },
});

export const usersAction = {
  ...usersSlice.actions,
  getUsersThunk,
  deleteUserThunk,
  createUserThunk,
  getUserByIdThunk,
  updateUserThunk,
};
export const usersReducer = usersSlice.reducer;