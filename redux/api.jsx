import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// export const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["user", "group", "provider", "insurance", "attestation"],
  baseQuery: fetchBaseQuery({
    baseUrl:"/api",
    prepareHeaders: (headers) => {
      //   const token = localStorage.getItem("token");
      //   if (token) {
      //     headers.set("Authorization", token);
      //   }
      return headers;
    },
    credentials: "include",
  }),
  endpoints: () => ({}),
});
