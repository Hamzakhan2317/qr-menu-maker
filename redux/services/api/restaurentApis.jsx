import { api } from "../../api.jsx";

const restaurentApis = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerRestaurent: builder.mutation({
      query: (data) => ({ url: `/restaurent`, method: "POST", body: data }),
    }),
    
  }),
});

export const { useRegisterRestaurentMutation } = restaurentApis;
