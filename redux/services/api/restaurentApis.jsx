import { api } from "../../api.jsx";

const restaurentApis = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerRestaurent: builder.mutation({
      query: (data) => ({ url: `/restaurant`, method: "POST", body: data }),
    }),

    getAllRestaurents: builder.query({
      query: (userId) => ({
        url: `/restaurant`,
        method: "GET",
        params: { userId }, // Adds userId as a query parameter
      }),
    }),
    // Fetch a specific restaurant by ID (GET request with restaurantId in the path)
    getRestaurentById: builder.query({
      query: (restaurantId) => ({
        url: `/restaurant/${restaurantId}`,
        method: "GET",
      }),
    }),

    // Update a specific restaurant by ID (PUT request with restaurantId in the path)
    updateRestaurentById: builder.mutation({
      query: ({ restaurantId, data }) => ({
        url: `/restaurant/${restaurantId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // Delete a specific restaurant by ID (DELETE request with restaurantId in the path)
    deleteRestaurentById: builder.mutation({
      query: (restaurantId) => ({
        url: `/restaurant/${restaurantId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useRegisterRestaurentMutation,
  useGetAllRestaurentsQuery,
  useGetRestaurentByIdQuery,
  useUpdateRestaurentByIdMutation,
  useDeleteRestaurentByIdMutation,
} = restaurentApis;
