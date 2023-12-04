import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getUsersThunk = createAsyncThunk(
  "getUsers/request",
  async (query, { getState }) => {
    const {searchBy, search, sortBy, sort, limit, page, role} = query

    try {
      const token = getState().auth.data;
      const response = await http(token).get(
        `/users${searchBy ? "?searchBy=" + searchBy : "?searchBy"}${search ? "&search=" + search : "&search"}${sortBy ? "&sortBy=" + sortBy : "&sortBy"}${sort ? "&sort=" + sort : "&sort"}${limit ? "&limit=" + limit : "&limit"}${page ? "&page=" + page : "&page"}${role ? "&role=" + role : "&role"}`
      );
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  "deleteUser/request",
  async (id, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).delete(`${process.env.NEXT_PUBLIC_URL_BACKEND}/users/${id}`);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const createUserThunk = createAsyncThunk(
  "createUser/request",
  async (formData, {getState}) => {
    try {
      const token = getState().auth.data;
      const data = await http(token).post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/users`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const getUserByIdThunk = createAsyncThunk(
  "getUserById/request",
  async (id, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/users/${id}`);
      return response.data.results
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const updateUserThunk = createAsyncThunk(
  "updateUser/request",
  async ({formData, id}, { getState }) => {
    try {
      const token = getState().auth.data;
      const data = await http(token).patch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/users/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data
    } catch (err) {
      throw err.response.data.message;
    }
  }
)