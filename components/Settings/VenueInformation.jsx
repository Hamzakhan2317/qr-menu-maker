"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import InputField from "../ui/InputField";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CountrySelect from "../ui/CountrySelector/CountrySelector";
import PhoneInput from "../ui/PhoneInput";
import ButtonComp from "../ui/button";
import Dropzone from "react-dropzone";
import CustomDropzone from "../ui/Dropzone/CustomDropzone";
import { OperatingHoursHeader } from "@/styles/common";

const VenueInformation = () => {
  return (
    <Box sx={{ backgroundColor: "#F0F2F5", minHeight: "100vh" }}>
      <Box sx={OperatingHoursHeader}>
        <Typography
          sx={{ fontSize: "20px", lineHeight: "32px", fontWeight: "600" }}
        >
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
          }}
        >
          <Grid container>
            <InputField cols={9} customHeight="36px" label={"Venue Name"} />
          </Grid>

          <FormControl
            sx={{
              width: "75%",
              marginTop: "10px",
              "& .MuiInput-variantOutlined": {
                "--Input-focusedHighlight": "none",
              },
            }}
          >
            <FormLabel sx={{ fontWeight: "400 !important" }}>
              Venue ID
            </FormLabel>
            <Input
              size="md"
              placeholder="TqUA1DNJA"
              endDecorator={<ContentCopyIcon sx={{ cursor: "pointer" }} />}
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
            <FormLabel
              sx={{ marginBottom: "10px", fontWeight: "400 !important" }}
            >
              Logo
            </FormLabel>
            <CustomDropzone />
          </Box>
          <FormLabel
            sx={{
              marginTop: "25px",
              marginBottom: "25px",
              fontWeight: "400 !important",
            }}
          >
            Address{" "}
            <span
              style={{
                color: "#8338ec",
                display: "inline-block",
                textDecoration: "underline",
                marginLeft: "20px",
                cursor: "pointer",
                fontWeight: "400 !important",
              }}
            >
              Select from map
            </span>
          </FormLabel>
          <Grid container>
            <InputField type={"textarea"} rows={3} cols={9} multiline />
          </Grid>
          <Grid container spacing={2} marginTop={"10px"}>
            <InputField label={"City"} customHeight="37px" padding="6px 15px" />
            <CountrySelect />
            <InputField label={"State"} customHeight="37px" />
            <InputField label={"Zip Code"} customHeight="37px" />
            {/* <PhoneInput cols={12} /> */}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <ButtonComp
              text={"Save"}
              variant="blue"
              padding="4px 15px"
              marginTop="10px"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VenueInformation;
