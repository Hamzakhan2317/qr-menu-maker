import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import InputField from "./ui/InputField";
import { FormLabel } from "@mui/joy";
import CustomDropzone from "./ui/Dropzone/CustomDropzone";

const MenuItem = () => {
  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleDrawer(false)}
      sx={{
        width: 456,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 456,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
    >
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
        <h3>Add New Item</h3>
        <IconButton onClick={toggleDrawer(false)} marginRight="5px">
          <CloseIcon />
        </IconButton>
        <Typography color={"#8338ec"}>General Information</Typography>
        <Grid container>
          <InputField cols={12} label={"Name"} required />
          <InputField cols={12} label={"Description"} multiline rows={3} />
        </Grid>
        <Box marginTop="15px">
          <FormLabel sx={{ marginBottom: "5px" }}>Image</FormLabel>
          <CustomDropzone />
        </Box>
        <Typography color="#9E978C" marginTop="20px" fontSize="14px">
          Recommended resolution is for landscape 1536x1024px, square
          1536x1536px or portrait 1536x2304 or bigger with a file size of less
          than 10MB.
        </Typography>
      </Box>
    </Drawer>
  );
};

export default MenuItem;
