import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: [
    "user",
    "group",
    "provider",
    "insurance",
    "attestation",
    "section",
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers) => {
      return headers;
    },
    credentials: "include",
  }),
  endpoints: () => ({}),
});
