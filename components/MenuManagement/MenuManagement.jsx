"use client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonComp from "../ui/button";
import EmptyPageSvg from "@/public/assets/svg/EmptyPageSvg";
import {
  emptyPageWrapper,
  emptyPageWrapperSvg,
  menuManagementCard,
  menuManagementCardWrapper,
  MenuManagementHeader,
} from "@/styles/MenuManagementStyling";
import ForkNknife, {
  Delievery,
  EditSvg,
  Pickup,
  SettingSvg,
} from "@/public/assets/svg/ForkNknife";
import { Tablet } from "@mui/icons-material";
import CustomizedSwitch from "../ui/CustomizeSwitch";
import MenuAccordion from "./Menueditor";

const MenuManagement = () => {
  const [menuCreated, setMenuCreated] = useState(false);
  const status = "Always";
  const cardLastRow = [
    {
      text: "8 Sections, 35 Items -",
    },
    {
      text: "Last updated on Sep 16, 2024 -",
    },
    {
      img: <ForkNknife />,
      text: "Dine-in QR",
    },
    {
      img: <Pickup />,
      text: "Pick-Up",
    },
    {
      img: <Delievery />,
      text: "Delievery",
    },
    {
      img: <Tablet marginRight="5px" />,
      text: "Tablet",
    },
  ];
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
            variant="blue"
            text="Create a Menu"
            padding="4px 15px"
            onClick={() => {
              setMenuCreated(true);
            }}
          />
        </Box>
      </Box>
      {menuCreated ? (
        <Box sx={menuManagementCardWrapper}>
          <Box sx={menuManagementCard}>
            <Box>
              <Typography color="#00000073">Copy of Sample Menu</Typography>
              <Typography color="#00000073" fontSize={"14px"}>
                Your happy place!
              </Typography>
              <Typography
                color="#00000073"
                fontSize={"14px"}
                marginTop={"10px"}
              >
                Availability:{status}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#00000073",
                  fontSize: "14px",
                }}
              >
                {cardLastRow?.map((item, index) => {
                  return (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "5px",
                      }}
                      key={index}
                    >
                      <span
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        {item.img}
                      </span>

                      <span
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        {item.text}
                      </span>
                    </span>
                  );
                })}
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <CustomizedSwitch />
              <ButtonComp
                text={"Edit Menu"}
                variant="blue"
                startIcon={<EditSvg />}
                padding="4px 15px"
                marginRight="20px"
              />
              <SettingSvg />
            </Box>
          </Box>
        </Box>
      ) : (
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
            onClick={() => {
              setMenuCreated(true);
            }}
          />
          <MenuAccordion name={"Salads"} />
        </Box>
      )}
    </Box>
  );
};

export default MenuManagement;
