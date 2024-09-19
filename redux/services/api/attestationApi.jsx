import { api } from "../../utils/api.jsx";

const attestationApi = api.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        createAttestation: builder.mutation({
            query: (data) => ({ url: `/attestation/create`, method: "POST", body: data }),
            invalidatesTags: ["attestation"],
        }),
        getAttestation: builder.query({
            query: (data) => ({ url: `/attestation` }),
            providesTags: ["attestation"],
        }),
        deleteAttestation: builder.mutation({
            query: (data) => ({
                url: `/attestation/delete/${data.id}`, method: "DELETE"
            }),
            invalidatesTags: ["attestation"],
        }),
        updateAttestation: builder.mutation({
            query: (data) => ({
                url: `/attestation/update/${data.id}`, method: "PUT", body: data
            }),
            invalidatesTags: ["attestation"],
        })
    }),
});

export const { useCreateAttestationMutation, useGetAttestationQuery, useDeleteAttestationMutation, useUpdateAttestationMutation } = attestationApi;
