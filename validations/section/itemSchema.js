import * as yup from "yup";

export const itemSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  price: yup.string().required("Price is required"),
});
