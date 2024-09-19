import { api } from "../../api.jsx";

const menuApis = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerMenu: builder.mutation({
      query: (data) => ({ url: `/menu`, method: "POST", body: data }),
    }),
  
    getAllMenu: builder.query({
      query: (restaurantId) => ({
        url: `/menu`,
        method: "GET",
        params: { restaurantId }, // Adds menuId as a query parameter
      }),
    }),
    
  }),
});

export const { useRegisterMenuMutation, useGetAllMenuQuery } = menuApis;
