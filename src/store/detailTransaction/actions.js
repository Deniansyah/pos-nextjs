import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getDetailTransactionThunk = createAsyncThunk(
  "getDetailTransaction/request",
  async (id, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`/detail-transaction/by/${id}`);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const createDetailTransactionThunk = createAsyncThunk(
  "createDetailTransaction/request",
  async (updatedCart, {getState}) => {
    try {
      const token = getState().auth.data;
      await http(token).post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/detail-transaction-arr`, updatedCart);
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const getPopularProductThunk = createAsyncThunk(
  "getPopularProduct/request",
  async (query, { getState }) => {
    const {limit, page} = query

    try {
      const token = getState().auth.data;
      const response = await http(token).get(
        `/detail-transaction/popular-product${limit ? "?limit=" + limit : "?limit"}${page ? "&page=" + page : "&page"}`
      );
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const getTodaysOrderedThunk = createAsyncThunk(
  "getTodaysOrdered/request",
  async (params, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`/detail-transaction/ordered/today`);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const getYesterdaysOrderedThunk = createAsyncThunk(
  "getYesterdaysOrdered/request",
  async (params, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`/detail-transaction/ordered/yesterday`);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);