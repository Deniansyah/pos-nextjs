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

export const deleteProductThunk = createAsyncThunk(
  "deleteProduct/request",
  async (id, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).delete(`${process.env.NEXT_PUBLIC_URL_BACKEND}/product/${id}`);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const createProductThunk = createAsyncThunk(
  "createProduct/request",
  async (formData, {getState}) => {
    try {
      const token = getState().auth.data;
      const data = await http(token).post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/product`, formData, {
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

export const getProductByIdThunk = createAsyncThunk(
  "getProductById/request",
  async (id, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/product/${id}`);
      return response.data.results
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const updateProductThunk = createAsyncThunk(
  "updateProduct/request",
  async ({formData, id}, { getState }) => {
    try {
      const token = getState().auth.data;
      const data = await http(token).patch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/product/${id}`, formData, {
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