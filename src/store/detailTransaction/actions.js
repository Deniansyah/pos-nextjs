import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getDetailTransactionThunk = createAsyncThunk(
  "getDetailTransaction/request",
  async (transaction_id, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(
        `/detail-transaction/by/${transaction_id}`
      );
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);
