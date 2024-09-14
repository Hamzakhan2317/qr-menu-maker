import { Box, Typography } from "@mui/material";
import React from "react";
import ButtonComp from "../ui/button";
import EmptyPageSvg from "@/public/assets/svg/EmptyPageSvg";
import {
  emptyPageWrapper,
  emptyPageWrapperSvg,
  MenuManagementHeader,
} from "@/styles/common";

const MenuManagement = () => {
  const childrenArray = [{}];
  return (
    <Box>
      <Box sx={MenuManagementHeader}>
        <Typography
          sx={{ fontSize: "20px", lineHeight: "32px", fontWeight: "600" }}
        >
          Menu Management
        </Typography>
        <Box>
          <ButtonComp
            variant="light"
            disabled
            text="Improve Menu"
            padding="4px 15px"
            marginRight="10px"
          />
          <ButtonComp
            variant="purple"
            text="Create a Menu"
            padding="4px 15px"
          />
        </Box>
      </Box>
      {/* <TabPill childrenArray={childrenArray} /> */}
      <Box sx={emptyPageWrapper}>
        <Box sx={emptyPageWrapperSvg}>
          <EmptyPageSvg />
        </Box>
        <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
          You don’t have any menu yet. Start creating one.
        </Typography>
        <ButtonComp
          text="Create a Menu"
          variants="purple"
          padding="4px 15px"
          marginTop="10px"
          sx={{ height: "32px" }}
        />
      </Box>
    </Box>
  );
};

export default MenuManagement;
