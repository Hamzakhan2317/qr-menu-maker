"use client";
import Box from "@mui/material/Box";
import { FormLabel, Grid, Typography } from "@mui/material";
import InputField from "../ui/InputField";
import CustomDropzone from "../ui/Dropzone/CustomDropzone";
import CustomCheckbox from "../ui/CustomCheckbox/CustomCheckbox";
import ButtonComp from "../ui/button";
import { itemSchema } from "@/validations/section/itemSchema";
import { useFormik } from "formik";
import { toast } from "sonner";
import { useRegisterItemMutation } from "@/redux/services/api/itemApis";

export default function ItemRightDrawer({ sectionId, onClose }) {
  const [registerItem] = useRegisterItemMutation();

  const handelregisterItem = async (values) => {
    try {
      const resp = await registerItem({
        sectionId,
        ...values,
      }).unwrap();

      if (resp) {
        toast.success(resp?.message || "Item Created successfully");
        onClose();
        formik.resetForm();
      }
    } catch (error) {
      console.log("error>>>>>", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
    },
    validationSchema: itemSchema,
    onSubmit: async (values) => {
      console.log("values>>>>>>>>>", values);
      handelregisterItem(values);
    },
  });

  return (
    <Box
      sx={{ padding: "10px" }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Grid container spacing={2}>
        <InputField
          cols={12}
          label={"Name"}
          required
          Placeholder={"Pasta"}
          customHeight="40px"
          name="name"
          formik={formik}
        />
        <InputField
          cols={12}
          label={"Description"}
          multiline={true}
          rows={2}
          Placeholder={
            "All pasta dough is prepared daily by our Italian chefs."
          }
          name="description"
          formik={formik}
        />
        <InputField
          label={"Price"}
          Placeholder={"20% VAT included our prices."}
          cols={12}
          customHeight="40px"
          name="price"
          formik={formik}
        />
      </Grid>
      <Box marginTop="15px">
        <FormLabel sx={{ marginBottom: "5px" }}>Image</FormLabel>
        <CustomDropzone />
      </Box>
      <Typography color="#9E978C" marginTop="20px" fontSize="14px">
        Recommended resolution is for section image 1536x1152px, square
        1536x1536px (4:3), or bigger with a file size of less than 10MB
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // position: "fixed",
          // bottom: "0",
          backgroundColor: "#fff",
          height: "60px",
          borderTop: "1px solid #E5E5E5",
        }}
      >
        <Box>
          <CustomCheckbox label="Save and add more" />
        </Box>
        <Box>
          <ButtonComp text="Cancel" padding="4px 11px" marginRight="10px" />
          <ButtonComp
            text="Save"
            padding="4px 11px"
            onClick={formik.handleSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
}
