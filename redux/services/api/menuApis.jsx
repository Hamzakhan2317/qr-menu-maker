import { api } from "../../api.jsx";

const menuApis = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerMenu: builder.mutation({
      query: (data) => ({ url: `/menu`, method: "POST", body: data }),
    }),
    editMenu: builder.mutation({
      query: (data) => ({ url: `/menu`, method: "PUT", body: data }),
    }),
    updateStatus: builder.mutation({
      query: (data) => ({ url: `/menustatus`, method: "PUT", body: data }),
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
    // Fetch a specific menu by ID
    getMenuById: builder.query({
      query: (menuId) => ({
        url: `/menu/${menuId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterMenuMutation,
  useEditMenuMutation,
  useUpdateStatusMutation,
  useGetAllMenuQuery,
  useDeleteMenuMutation,
  useGetMenuByIdQuery,
} = menuApis;
