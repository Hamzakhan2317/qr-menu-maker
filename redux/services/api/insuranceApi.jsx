import { api } from "../../utils/api.jsx";

const insuranceApi = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    createInsurance: builder.mutation({
      query: (data) => ({
        url: `/insurance/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["insurance"],
    }),
    updateInsurance: builder.mutation({
      query: (data) => ({
        url: `/insurance/update/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["insurance"],
    }),
    getAllInsurances: builder.query({
      query: () => ({ url: `/insurance` }),
      providesTags: ["insurance"],
    }),
    deleteInsurance: builder.mutation({
      query: (data) => ({
        url: `/insurance/delete/${data.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["insurance"],
    }),
  }),
});

export const {
  useCreateInsuranceMutation,
  useUpdateInsuranceMutation,
  useGetAllInsurancesQuery,
  useDeleteInsuranceMutation,
} = insuranceApi;
