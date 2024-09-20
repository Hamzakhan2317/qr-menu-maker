import { api } from "../../api.jsx";

// Section API
const sectionApis = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerSection: builder.mutation({
      query: (data) => ({ url: `/section`, method: "POST", body: data }),
      invalidatesTags: ['section'],  // Invalidates 'section' tag on register
    }),
    getAllSection: builder.query({
      query: (menuId) => ({
        url: `/section`,
        method: "GET",
        params: { menuId }, // Adds menuId as a query parameter
      }),
      providesTags: ['section'], // Provides 'section' tag
    }),
  }),
});

export const { useRegisterSectionMutation, useGetAllSectionQuery } = sectionApis;
