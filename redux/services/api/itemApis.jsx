import { api } from "../../api.jsx";

const itemApis = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerItem: builder.mutation({
      query: (data) => ({ url: `/item`, method: "POST", body: data }),
    }),
    
  }),
});

export const { useRegisterItemMutation } = itemApis;
