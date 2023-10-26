import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlBackend = process.env.NEXT_PUBLIC_URL_BACKEND;

const initialState = {
  data: null,
  role: null,
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const loginThunk = createAsyncThunk(
  "login/request",
  async ({ email, password, cb }) => {
    try {
      const response = await axios.post(`${urlBackend}/auth/login`, {
        email,
        password,
      });
      cb();
      return response.data.result;
    } catch (error) {
      throw error.response.data.result.message;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    }),
      builder.addCase(loginThunk.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          name: action.payload.name,
          data: action.payload.data,
          role: action.payload.role,
          isAuthenticated: true,
          isError: false,
          errorMessage: null,
        };
      }),
      builder.addCase(loginThunk.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: action.error.message,
        };
      });
  },
});

export const authAction = {
  ...authSlice.actions,
  loginThunk,
}
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;