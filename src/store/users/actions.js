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
