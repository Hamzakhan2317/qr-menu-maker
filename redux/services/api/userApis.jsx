import { api } from "../../utils/api.jsx";

const userApi = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => ({
        url: "/user/dashboard",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    getAgentUsersList: builder.query({
      query: () => ({
        url: "/user/agents",
      }),
    }),
  }),
});

export const { useGetUserDataQuery, useGetAgentUsersListQuery } = userApi;
