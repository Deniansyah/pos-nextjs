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

export const getTransactionByIdThunk = createAsyncThunk(
  "getTransactionById/request",
  async (id, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/transaction/${id}`);
      return response.data.results;
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const createTransactionThunk = createAsyncThunk(
  "createTransaction/request",
  async (formDataTransaction, {getState}) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/transaction`, formDataTransaction);
      return response
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const deleteTransactionThunk = createAsyncThunk(
  "deleteTransaction/request",
  async (id, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).delete(`${process.env.NEXT_PUBLIC_URL_BACKEND}/transaction/${id}`);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const getAllTodaysTotalsThunk = createAsyncThunk(
  "getAllTodaysTotals/request",
  async (params, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`/transaction/today`);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const getAllYesterdaysTotalsThunk = createAsyncThunk(
  "getAllYesterdaysTotals/request",
  async (params, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`/transaction/yesterday`);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const getTodaysCustomersThunk = createAsyncThunk(
  "getTodaysCustomers/request",
  async (params, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`/transaction/customer/today`);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const getYesterdaysCustomersThunk = createAsyncThunk(
  "getYesterdaysCustomers/request",
  async (params, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`/transaction/customer/yesterday`);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);