"use client";
import { Box, Grid, Typography } from "@mui/material";
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
  PlusIcon,
  SettingSvg,
} from "@/public/assets/svg/ForkNknife";
import { Tablet } from "@mui/icons-material";
import CustomizedSwitch from "../ui/CustomizeSwitch";
import MenuEditor from "./Menueditor";
import SectionList from "./SectionList";

const MenuManagement = () => {
  const [menuCreated, setMenuCreated] = useState(true);
  const [menuEdit, setMenuEdit] = useState(true);
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
      {!menuEdit ? (
        <>
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
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
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
                          }}
                          key={index}
                        >
                          <span
                            style={{
                              display: "inline-block",
                              marginRight: "5px",
                              "& svg": {
                                transform: "rotate(90deg) !important",
                              },
                            }}
                          >
                            {item.img}
                          </span>

                          <span
                            style={{
                              display: "inline-block",
                              marginRight: "5px",
                            }}
                          >
                            {item.text}
                          </span>
                        </span>
                      );
                    })}
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" flexWrap="wrap">
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
            </Box>
          )}
        </>
      ) : (
        <Box sx={{ display: "flex", height: "80vh" }}>
          <SectionList />
          <Box sx={{ padding: "20px 40px", maxWidth: "850px", flex: 1 }}>
            <MenuEditor />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MenuManagement;
