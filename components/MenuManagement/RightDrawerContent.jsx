"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import { FormLabel, Grid, Input, Typography } from "@mui/material";
import InputField from "../ui/InputField";
import CustomDropzone from "../ui/Dropzone/CustomDropzone";
import CustomCheckbox from "../ui/CustomCheckbox/CustomCheckbox";
import ButtonComp from "../ui/button";
import { useRegisterSectionMutation } from "@/redux/services/api/sectionApis";
import { sectionSchema } from "@/validations/section/sectionSchema";
import { useFormik } from "formik";
import { toast } from "sonner";




export default function RightDrawerContent({menuId, onClose}) {
  const [open, setOpen] = useState(false);
  const [registerSection] = useRegisterSectionMutation();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handelRegisterSection = async (values) => {
    try {
      const resp = await registerSection({
        menuId,
        ...values,
      }).unwrap();

      if (resp) {
        onClose(false)
        toast.success(resp?.message || "Section Created successfully");
      }
    } catch (error) {
      console.log("error>>>>>", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      note: "",
    },
    validationSchema: sectionSchema,
    onSubmit: async (values) => {
      handelRegisterSection(values);
    },
  });

  return (
    <Box
      sx={{ padding: "10px" }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Typography color={"#8338ec"}>Overview</Typography>
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
          label={"Note"}
          Placeholder={"20% VAT included our prices."}
          cols={12}
          customHeight="40px"
          name="note"
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
          position: "sticky",
          bottom: "0",
          backgroundColor: "#fff",
          height: "60px",
          borderTop: "1px solid #E5E5E5",
        }}
      >
        <Box>
          <CustomCheckbox label="Save and add more" />
        </Box>
        <Box>
          <ButtonComp
            text="Cancel"
            padding="4px 20px"
            marginRight="10px"
            variant="transparent"
            hoverBorder="1px solid #8338EC"
            border="1px solid #d9d9d9"
          />
          <ButtonComp
            text="Save"
            padding="4px 20px"
            variant="transparent"
            hoverBorder="1px solid #8338EC"
            border="1px solid #d9d9d9"
            onClick={formik.handleSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
}
