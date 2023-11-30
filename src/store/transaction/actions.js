import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getTransactionThunk = createAsyncThunk(
  "getTransaction/request",
  async (query, { getState }) => {
    const { searchBy, search, sortBy, sort, limit, page, cInitUser, cInitTrans } = query;

    try {
      const token = getState().auth.data;
      const response = await http(token).get(
        `/transaction${searchBy ? "?searchBy=" + searchBy : "?searchBy"}${search ? "&search=" + search : "&search"}${cInitUser ? "&cInitUser=" + cInitUser : "&cInitUser"}${cInitTrans ? "&cInitTrans=" + cInitTrans : "&cInitTrans"}${sortBy ? "&sortBy=" + sortBy : "&sortBy"}${sort ? "&sort=" + sort : "&sort"}${limit ? "&limit=" + limit : "&limit"}${page ? "&page=" + page : "&page"}`
      );
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);
