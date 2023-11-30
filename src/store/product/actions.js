import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getProductThunk = createAsyncThunk(
  "getProduct/request",
  async (query, { getState }) => {
    const {searchBy, search, sortBy, sort, limit, page, categories_name} = query

    try {
      const token = getState().auth.data;
      const response = await http(token).get(
        `/product${searchBy ? "?searchBy=" + searchBy : "?searchBy"}${search ? "&search=" + search : "&search"}${sortBy ? "&sortBy=" + sortBy : "&sortBy"}${sort ? "&sort=" + sort : "&sort"}${limit ? "&limit=" + limit : "&limit"}${page ? "&page=" + page : "&page"}${categories_name ? "&categories_name=" + categories_name : "&categories_name"}`
      );
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);
