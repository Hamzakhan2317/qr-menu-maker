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

    deleteMenu: builder.mutation({
      query: (menuId) => ({
        url: `/menu`,
        method: "DELETE",
        params: { menuId }, // Include menuId as a query parameter
      }),
      onError: (error) => {
        console.error("Failed to delete menu:", error);
      },
    }),
  }),
});

export const {
  useRegisterMenuMutation,
  useGetAllMenuQuery,
  useDeleteMenuMutation,
} = menuApis;
