import { api } from "../../api.jsx";

const authApi = api.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({ url: `/register`, method: "POST", body: data }),
    }),
    verifyOTP: builder.mutation({
      query: (data) => ({ url: `/verifyotp`, method: "POST", body: data }),
    }),
    resendOTP: builder.mutation({
      query: (data) => ({ url: `/sendotp`, method: "POST", body: data }),
    }),
    logout: builder.mutation({
      query: () => ({ url: `/user/logout`, method: "POST" }),
    }),
  }),
});

export const {
  useLogoutMutation,
  useRegisterMutation,
  useVerifyOTPMutation,
  useResendOTPMutation,
} = authApi;
