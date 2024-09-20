import { Box, Drawer, Grid, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import InputField from "./ui/InputField";

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
        <Grid container>
          <InputField />
        </Grid>
      </Box>
    </Drawer>
  );
};

export default MenuItem;
