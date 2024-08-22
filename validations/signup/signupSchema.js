import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  phone: yup.string().required("Phone is required"),
  password: yup.string().required("Password is required"),
});