import { api } from "../../api.jsx";

const menuApis = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerMenu: builder.mutation({
      query: (data) => ({ url: `/menu`, method: "POST", body: data }),
    }),
    
  }),
});

export const { useRegisterMenuMutation } = menuApis;
