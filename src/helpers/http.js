import axios from "axios";

const http = (token) => {
  const headers = {};

  if (token) {
    headers.authorization = "Bearer " + token;
  }

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_BACKEND,
    headers,
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config) => {
      // Modifikasi konfigurasi permintaan
      // console.log("Making a request:", config);
      return config;
    },
    (error) => {
      // Tangani kesalahan permintaan
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response) => {
      // Modifikasi data respons
      // console.log("Response received:", response);
      return response;
    },
    (error) => {
      // Tangani kesalahan respons
      console.error("Response error:", error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export default http;
