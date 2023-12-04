import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getCategoriesThunk = createAsyncThunk(
  "getCategories/request",
  async (query, { getState }) => {
    const {searchBy, search, sortBy, sort, limit, page} = query

    try {
      const token = getState().auth.data;
      const response = await http(token).get(
        `/categories${searchBy ? "?searchBy=" + searchBy : "?searchBy"}${search ? "&search=" + search : "&search"}${sortBy ? "&sortBy=" + sortBy : "&sortBy"}${sort ? "&sort=" + sort : "&sort"}${limit ? "&limit=" + limit : "&limit"}${page ? "&page=" + page : "&page"}`
      );
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const getCategoriesFiftyThunk = createAsyncThunk(
  "getCategoriesFifty/request",
  async (limit, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/categories?limit=${limit}`);
      return response.data.results;
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const deleteCategoriesThunk = createAsyncThunk(
  "deleteCategories/request",
  async (id, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).delete(`${process.env.NEXT_PUBLIC_URL_BACKEND}/categories/${id}`);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const createCategoriesThunk = createAsyncThunk(
  "createCategories/request",
  async (formData, { getState }) => {
    try {
      const token = getState().auth.data;
      const data = await http(token).post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/categories`, formData);
      return data
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const getCategoriesByIdThunk = createAsyncThunk(
  "getCategoriesById/request",
  async (id, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/categories/${id}`);
      return response.data.results
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const updateCategoriesThunk = createAsyncThunk(
  "updateCategories/request",
  async ({formData, id}, { getState }) => {
    try {
      const token = getState().auth.data;
      const data = await http(token).patch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/categories/${id}`, formData);
      return data
    } catch (err) {
      throw err.response.data.message;
    }
  }
)