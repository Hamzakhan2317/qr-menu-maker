"use client";

import {
  cardLeftside,
  copyOfSampleMenu,
  foodMenuCard,
  leftMobileViewGarsonline,
  leftViewGettingReady,
  leftViewHeader,
  leftViewHeaderMenu,
  menuCardsWrapper,
  menuFoodTypes,
  menuFoodWrapper,
  menuSearch,
  menuWrapper,
} from "@/styles/DashboarStyling";
import { Box, Grid, Typography } from "@mui/material";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import InfoIcon from "@mui/icons-material/Info";
import ButtonComp from "@/components/ui/button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import InputField from "../ui/InputField";
import Image from "next/image";
import FoodTypeArray, { foodInfoArray } from "@/public/assets/static";
import CustomAccordion from "../ui/Accordion/CustomAccordion";

const GarsonlineMenu = () => {
  const [isMenu, setIsMenu] = useState(true);
  return (
    <Box sx={{ display: "flex", height: "100vh", color: "#130F40" }}>
      <Box sx={leftMobileViewGarsonline}>
        {!isMenu ? (
          <Box>
            <Box sx={leftViewHeader}>
              <Box
                sx={{
                  marginRight: "20px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <LoginSharpIcon
                  color="#fff"
                  fontSize="15px"
                  sx={{ marginRight: "5px", fontWeight: "700" }}
                />{" "}
                <Typography fontSize={"14px"} fontWeight={700} marginleft="5px">
                  Login
                </Typography>
              </Box>
            </Box>
            <Box sx={leftViewGettingReady}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                }}
              >
                <InfoIcon
                  color="#fff"
                  sx={{ marginRight: "12px", width: "20px", height: "20px" }}
                />
                <Typography fontSize={"14px"} fontWeight={700} marginleft="5px">
                  Our menu is getting ready
                </Typography>
              </Box>
            </Box>
            <Box sx={menuWrapper}>
              <Typography fontSize={"22px"} fontWeight={700}>
                Food
              </Typography>
              <ButtonComp
                text={"Go to Menu"}
                variant="lightPurple"
                padding="6px 10px"
                width={"80%"}
              />
            </Box>
          </Box>
        ) : (
          <Box>
            <Box sx={leftViewHeaderMenu}>
              <Box
                sx={{
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                <ArrowBackIosIcon
                  color="#fff"
                  sx={{
                    marginRight: "5px",
                    fontWeight: "700",
                    fontSize: "18px !important",
                    marginTop: "5px",
                  }}
                />
              </Box>
              <Box>
                <Typography fontSize={"16px"} fontWeight={700} marginleft="5px">
                  Food
                </Typography>
              </Box>
              <Box
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  marginTop: "2px",
                }}
              >
                <MenuIcon />
              </Box>
            </Box>
            <Box sx={{ padding: "10px" }}>
              <Box sx={copyOfSampleMenu}>
                <Typography
                  fontSize={"20px"}
                  fontWeight={700}
                  marginTop={"30px"}
                  color="#000000d9"
                >
                  Copy of Sample Menu
                </Typography>
                <Typography>Your happy Place!</Typography>
                <Typography fontSize={"14px"} color={"#BCBBC8"}>
                  20% VAT included to all prices.
                </Typography>
              </Box>
              <Box sx={menuSearch}>
                <InputField
                  icon
                  searchIcon={true}
                  label=""
                  Placeholder={"search"}
                  type="text"
                  backgroundColor="#fff"
                  customHeight="45px"
                  borderRadius="100px"
                />
              </Box>
            </Box>
            <Grid container spacing={1 / 5} sx={menuFoodTypes}>
              {FoodTypeArray?.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={6}
                    sm={3}
                    key={index}
                    sx={{ textAlign: "center" }}
                  >
                    <Box sx={{ marginTop: "10px", cursor: "pointer" }}>
                      <Image src={item.src} alt="" />
                    </Box>
                    <Box sx={{ cursor: "pointer" }}>
                      <Typography fontSize={"14px"} fontWeight={600}>
                        {item.txt}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
            <Box sx={menuCardsWrapper}>
              {foodInfoArray?.map((item, index) => {
                return (
                  <Box sx={menuFoodWrapper} key={index}>
                    <Image src={item.src} alt="" className="mainImage" />
                    <Typography
                      textAlign={"center"}
                      fontSize={"20px"}
                      fontWeight={700}
                    >
                      {item?.textHeading}
                    </Typography>
                    <Typography textAlign={"center"}>
                      {item?.infoText}
                    </Typography>
                    {item?.accordionData ? (
                      <CustomAccordion
                        accordionArray={item.accordionData.map(
                          (accordionItem) => ({
                            accordionHeading: accordionItem.accordionHeading,
                            bodyText: accordionItem.accordionTxtInfo,
                          })
                        )}
                      />
                    ) : (
                      item?.cardData?.map((innerItem, innerIndex) => {
                        return (
                          <Box sx={foodMenuCard} key={innerIndex}>
                            <Box sx={cardLeftside}>
                              <Typography
                                fontSize="16px"
                                fontWeight="700"
                                marginBottom={"10px"}
                              >
                                {innerItem?.cardHeading}
                              </Typography>
                              <Typography fontSize="16px" marginBottom={"10px"}>
                                {innerItem?.cardtxt}
                              </Typography>
                              <Typography
                                color={"#A874F2"}
                                fontSize="16px"
                                fontWeight="700"
                                marginBottom={"10px"}
                              >
                                {innerItem?.price}
                              </Typography>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Box>{innerItem?.icon1}</Box>
                                <Box ml={1}>{innerItem?.icon2}</Box>
                                <Box ml={1}>{innerItem?.icon3}</Box>
                              </Box>
                            </Box>
                            <Box>
                              <Image
                                src={innerItem?.cardPic}
                                alt=""
                                className="card-img"
                              />
                            </Box>
                          </Box>
                        );
                      })
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          position: "fixed",
          top: "50%",
          left: "55%",
          transform: "translate(0%,-50%)",
          "@media (max-width: 992px)": {
            display: "none",
          },
        }}
      >
        <Typography variant="h4">Food</Typography>
      </Box>
    </Box>
  );
};

export default GarsonlineMenu;
