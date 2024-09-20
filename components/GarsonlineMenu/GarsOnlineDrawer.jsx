import { Box, Grid } from "@mui/material";
import React from "react";
import InputField from "../ui/InputField";

const GarsOnlineDrawer = () => {
  return (
    <Box>
      <Grid container>
        <InputField label="Name" Placeholder={"name"} />
        <InputField label="Email" type={"email"} Placeholder={"email"} />
        <InputField label="Name" type={"date"} />
      </Grid>
    </Box>
  );
};

export default GarsOnlineDrawer;
