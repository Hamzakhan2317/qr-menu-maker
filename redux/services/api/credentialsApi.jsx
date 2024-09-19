import { api } from "../../utils/api.jsx";

const credentialsApi = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    createCredental: builder.mutation({
      query: (data) => ({
        url: `/credential/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["credential"],
    }),
    updateCredental: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/credential/update/${id}`,  
        method: "PUT",
        body: formData, 
      }),
      invalidatesTags: ["credential"],
    }),
    getAllCredentals: builder.query({
      query: () => ({ url: `/credential` }),
      providesTags: ["credential"],
    }),
    deleteCredental: builder.mutation({
      query: (data) => ({
        url: `/credential/delete/${data.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["credential"],
    }),
  }),
});

export const {
  useCreateCredentalMutation,
  useDeleteCredentalMutation,
  useGetAllCredentalsQuery,
  useUpdateCredentalMutation,
} = credentialsApi;
