import { api } from "../../api.jsx";

// Item API
const itemApis = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerItem: builder.mutation({
      query: (data) => ({ url: `/item`, method: "POST", body: data }),
      invalidatesTags: ["section"], // Invalidates 'section' when a new item is added
    }),
    editItem: builder.mutation({
      query: (data) => ({ url: `/item`, method: "PUT", body: data }),
    }),
    // updates
  }),
});

export const { useRegisterItemMutation, useEditItemMutation } = itemApis;
