"use client";
import {
  useGetRestaurentByIdQuery,
  useUpdateRestaurentByIdMutation,
} from "@/redux/services/api/restaurentApis";
import { OperatingHoursHeader } from "@/styles/common";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import { Box, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import * as yup from "yup";
import CountrySelect from "../ui/CountrySelector/CountrySelector";
import CustomDropzone from "../ui/Dropzone/CustomDropzone";
import InputField from "../ui/InputField";
import Loader from "../ui/Loader";
import ButtonComp from "../ui/button";

const VenueInformation = () => {
  const { venueId } = useParams();
  const { data, isLoading, refetch } = useGetRestaurentByIdQuery(venueId);
  const [currentRestaurant, setCurrentRestaurant] = useState(data?.data);
  const [updateRestaurentById] = useUpdateRestaurentByIdMutation();

  useEffect(() => {
    if (data && !isLoading) {
      setCurrentRestaurant(data?.data);
    }
  }, [data]);

  const formik = useFormik({
    initialValues: {
      name: currentRestaurant?.name ?? "",
      address: currentRestaurant?.address ?? "",
      city: currentRestaurant?.city ?? "",
      country: currentRestaurant?.country ?? "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name is required"),
      address: yup.string().required("Address is required"),
      city: yup.string(),
      country: yup.string(),
    }),
    onSubmit: async (values) => {
      updateRestaurentById({ restaurantId: venueId, data: values }).then(() => {
        refetch();
        toast.success("Restaurant updated successfully!");
      });
    },
    enableReinitialize: true,
  });

  console.log("AS", currentRestaurant);

  if (isLoading) return <Loader />;
  return (
    <Box sx={{ backgroundColor: "#F0F2F5", minHeight: "100vh" }}>
      <Box sx={OperatingHoursHeader}>
        <Typography sx={{ fontSize: "20px", lineHeight: "32px", fontWeight: "600" }}>
          Venue Information
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ padding: "20px" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "20px",
            marginLeft: "20px",
            marginTop: "10px",
          }}>
          <Grid container>
            <InputField
              cols={9}
              customHeight="36px"
              label={"Venue Name"}
              name="name"
              formik={formik}
            />
          </Grid>

          <FormControl
            sx={{
              width: "75%",
              marginTop: "10px",
              "& .MuiInput-variantOutlined": {
                "--Input-focusedHighlight": "none",
              },
            }}>
            <FormLabel sx={{ fontWeight: "400 !important" }}>Venue ID</FormLabel>
            <Input
              size="md"
              placeholder={currentRestaurant?._id}
              endDecorator={<ContentCopyIcon sx={{ cursor: "pointer" }} />}
              readOnly
              sx={{
                borderRadius: "8px",
                height: "32px",
                "--Input-focusedHighlight": "none !important",
                "&.Mui-focused fieldset": {
                  border: "1px solid #E5E5E5",
                },
              }}
            />
          </FormControl>
          <Box sx={{ marginTop: "10px" }}>
            <FormLabel sx={{ marginBottom: "10px", fontWeight: "400 !important" }}>Logo</FormLabel>
            <CustomDropzone />
          </Box>

          <Grid container>
            <InputField
              label="Address"
              type={"textarea"}
              rows={3}
              cols={9}
              multiline
              marginTop="20px"
              name="address"
              formik={formik}
            />
          </Grid>
          <Grid container spacing={2} marginTop={"10px"}>
            <InputField
              label={"City"}
              customHeight="37px"
              padding="6px 15px"
              name="city"
              formik={formik}
            />
            <CountrySelect formik={formik} />
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <ButtonComp
              text={"Save"}
              variant={!formik.dirty ? "disabled" : "blue"}
              padding="4px 15px"
              marginTop="10px"
              onClick={formik.handleSubmit}
              disabled={!formik.dirty}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VenueInformation;
