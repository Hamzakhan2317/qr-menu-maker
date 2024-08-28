import * as yup from "yup";
// import { isValidPhoneNumber } from "react-phone-number-input";

export const signupSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email address"),
  phone: yup.string().required("Phone is required"),
  // phone: yup.string()
  // .required("Phone number required")
  // .test("isValidPhoneNumber", "Invalid phone number", function (value) {
  //   // Log the value to check what is being passed
  //   console.log("Phone number being validated:", value);
  //   return isValidPhoneNumber(value); // Ensure this is returning true for valid numbers
  // }),
  password: yup.string().required("Password is required").min(3, "Password must be at least 3 characters long"),
});