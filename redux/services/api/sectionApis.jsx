import { api } from "../../api.jsx";

const sectionApis = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerSection: builder.mutation({
      query: (data) => ({ url: `/section`, method: "POST", body: data }),
    }),
    
  }),
});

export const { useRegisterSectionMutation } = sectionApis;
