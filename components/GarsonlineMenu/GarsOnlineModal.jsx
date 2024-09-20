import { Box, Typography } from "@mui/material";
import React from "react";

const GarsOnlineModal = ({ setIsMenu }) => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid #E5E5E5",
          paddingBottom: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setIsMenu(true);
        }}
      >
        <Typography color={"#130F40"}>Menu</Typography>
      </Box>
    </Box>
  );
};

export default GarsOnlineModal;
