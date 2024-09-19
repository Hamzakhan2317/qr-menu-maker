import { api } from "../../api.jsx";

const restaurentApis = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerRestaurent: builder.mutation({
      query: (data) => ({ url: `/restaurent`, method: "POST", body: data }),
    }),

    getAllRestaurents: builder.query({
      query: (userId) => ({
        url: `/restaurent`,
        method: "GET",
        params: { userId }, // Adds userId as a query parameter
      }),
    }),
  }),
});

export const { useRegisterRestaurentMutation, useGetAllRestaurentsQuery } =
  restaurentApis;
