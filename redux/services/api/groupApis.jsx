import { api } from "../../utils/api.jsx";

const groupApi = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (data) => ({ url: `/group/create`, method: "POST", body: data }),
      invalidatesTags: ["group"],
    }),
    getAllGroups: builder.query({
      query: (data) => ({ url: `/group` }),
      providesTags: ["group"],
    }),
    update: builder.mutation({
      query: (data) => ({ url: `/group/update/${data.id}`, method: "PUT", body: data }),
      invalidatesTags: ["group"],
    }),
    getAllGroupList: builder.query({
      query: (data) => {
        return {
          url: `/group/all-groups-list?withProvider=${data.withProvider ? "true" : "false"}`,
        };
      },
      providesTags: ["group"],
    }),

    deleteGroups: builder.mutation({
      query: (data) => ({
        url: `/ group / delete/${data.id}`, method: "DELETE"
      }),
      invalidatesTags: ["group"],
    }),
  }),
});

export const { useCreateMutation, useGetAllGroupsQuery, useDeleteGroupsMutation, useUpdateMutation, useGetAllGroupListQuery } =
  groupApi;
