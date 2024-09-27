"use client";
import { useRegisterRestaurentMutation } from "@/redux/services/api/restaurentApis";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import ButtonComp from "./ui/button";
import InputField from "./ui/InputField";

const AddRestaurantsForm = ({
  refetchRestaurants,
  userId,
  setIsDrawerOpen,
}) => {
  const [registerRestaurent] = useRegisterRestaurentMutation();

  const handelRegisterSection = async (values) => {
    try {
      const resp = await registerRestaurent({
        ...values,
        owner: userId,
      });

      if (resp) {
        refetchRestaurants();

        setIsDrawerOpen(false);
      }
    } catch (error) {
      console.log("error>>>>>", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name is required"),
      address: yup.string().required("Address is required"),
    }),
    onSubmit: async (values) => {
      handelRegisterSection(values);
    },
  });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          flexDirection: "row-reverse",
          justifyContent: "flex-end",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h3>Add New Venue</h3>
        <IconButton onClick={() => setIsDrawerOpen(false)} marginRight="5px">
          <CloseIcon />
        </IconButton>
      </Box>
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
            Placeholder={"Venue Name"}
            customHeight="40px"
            name="name"
            formik={formik}
          />
          <InputField
            cols={12}
            label={"Address"}
            multiline={true}
            rows={2}
            Placeholder={"Address"}
            name="address"
            formik={formik}
          />
        </Grid>
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
            marginTop: "20px",
          }}
        >
          <Box>
            <ButtonComp
              text="Cancel"
              padding="4px 20px"
              marginRight="10px"
              variant="transparent"
              hoverBorder="1px solid #8338EC"
              border="1px solid #d9d9d9"
              onClick={() => setIsDrawerOpen(false)}
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
    </Box>
  );
};

export default AddRestaurantsForm;
