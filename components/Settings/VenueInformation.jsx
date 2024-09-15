"use client";
import { Box, Grid } from "@mui/material";
import React from "react";
import InputField from "../ui/InputField";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const VenueInformation = () => {
  return (
    <Box sx={{ backgroundColor: "#F0F2F5", minHeight: "100vh" }}>
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
          }}
        >
          <Grid container>
            <InputField cols={9} customHeight="32px" label={"Venue Name"} />
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
            <FormLabel>Venue ID</FormLabel>
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
          <FormLabel sx={{ marginTop: "10px", marginBottom: "5px" }}>
            Address{" "}
            <span style={{ color: "#8338ec", textDecoration: "underline" }}>
              Select from map
            </span>
          </FormLabel>
          <Grid container>
            <InputField type={"textarea"} rows={4} cols={9} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VenueInformation;
