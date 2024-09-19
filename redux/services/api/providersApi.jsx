import { api } from "../../utils/api.jsx";

const providersApi = api.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        createProvider: builder.mutation({
            query: (data) => ({ url: `/provider/create`, method: "POST", body: data }),
            invalidatesTags: ["provider"],
        }),
        getAllProviders: builder.query({
            query: (data) => ({ url: `/provider` }),
            providesTags: ["provider"],
        }),
        deleteProvider: builder.mutation({
            query: (data) => ({ url: `/provider/delete/${data.id}`, method: "DELETE" }),
            invalidatesTags: ["provider"],
        }),
        updateProvider: builder.mutation({
            query: (data) => ({ url: `/provider/update/${data.id}`, method: "PUT", body: data }),
            invalidatesTags: ["provider"],
        }),
    }),
});
export const { useCreateProviderMutation, useGetAllProvidersQuery, useDeleteProviderMutation, useUpdateProviderMutation } =
    providersApi;
