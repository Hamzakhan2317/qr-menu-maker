import * as yup from "yup";

export const sectionSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  note: yup.string().required("Note is required"),
});
