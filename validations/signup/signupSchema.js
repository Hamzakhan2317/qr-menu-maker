import * as yup from "yup";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

yup.addMethod(yup.string, "isValidPhone", function (errorMessage) {
  return this.test(`test-isvalid-phone`, errorMessage, function (value) {
    const { path, createError } = this;
    const isPhoneValid = (phone) => {
      try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
      } catch (error) {
        return false;
      }
    };
    return isPhoneValid(value) || createError({ path, message: errorMessage });
  });
});

export const signupSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email address"),
  phone: yup.string().isValidPhone("Invalid Phone Number").required("Phone is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Password must be at least 3 characters long"),
});
