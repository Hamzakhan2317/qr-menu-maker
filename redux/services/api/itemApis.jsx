import { api } from "../../api.jsx";

// Item API
const itemApis = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerItem: builder.mutation({
      query: (data) => ({ url: `/item`, method: "POST", body: data }),
      invalidatesTags: ['section'], // Invalidates 'section' when a new item is added
    }),
  }),
});

export const { useRegisterItemMutation } = itemApis;
