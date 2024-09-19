import { api } from "../../api.jsx";

const sectionApis = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    registerSection: builder.mutation({
      query: (data) => ({ url: `/section`, method: "POST", body: data }),
      invalidatesTags: [ 'section'],

    }),
    getAllSection: builder.query({
      query: (menuId) => ({
        url: `/section`,
        method: "GET",
        params: { menuId }, // Adds menuId as a query parameter
      }),
      providesTags: [ 'section'],

    }),
    
  }),
});

export const { useRegisterSectionMutation, useGetAllSectionQuery } = sectionApis;
