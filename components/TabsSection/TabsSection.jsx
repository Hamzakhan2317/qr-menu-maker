"use client";
import {
  CardSliderSectionHeadingBoxStyles,
  CardSliderSectionHeadingStyles,
} from "@/styles/CardSliderStyles/CardSliderStyles";
import { displaySectionStyles } from "@/styles/TabSectionStyles/TabSectionStyles";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
// import CustomTabs from '../LoadingSkeleton/ui/CutsomTabs';
import DisplayScreen from "./DisplayScreen/DisplayScreen";
import ManageScreen from "./ManageScreen/ManageScreen";
import MarketScreen from "./MarketScreen/MarketScreen";
import OrderScreen from "./OrderScreen/OrderScreen";
import CustomTabs from "../ui/CustomTabs";

const TabSection = () => {
  const [tabValue, setTabValue] = useState(0);
  const tabsHeading = ["Display", "Order", "Manage", "Market"];
  const tabsData = [
    {
      component: <DisplayScreen />,
    },
    {
      component: <OrderScreen />,
    },
    {
      component: <ManageScreen />,
    },
    {
      component: <MarketScreen />,
    },
  ];
  return (
    <Box sx={displaySectionStyles}>
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <Box sx={CardSliderSectionHeadingBoxStyles}>
          <Typography sx={CardSliderSectionHeadingStyles}>
            From Reservations to Revenue: All-in-One Management
          </Typography>
        </Box>
        <CustomTabs tabs={tabsHeading} setTabValue={setTabValue} tabValue={tabValue} />
        <Box sx={{ marginTop: "30px" }}>{tabsData?.[tabValue]?.component}</Box>
      </Container>
    </Box>
  );
};

export default TabSection;
