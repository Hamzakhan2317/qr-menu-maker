"use client";

import CustomAccordion from "@/components/ui/Accordion/CustomAccordion";
import InputField from "@/components/ui/InputField";
import { useGetMenuByIdQuery } from "@/redux/services/api/menuApis";
import { useGetRestaurentByIdQuery } from "@/redux/services/api/restaurentApis";
import { useGetAllSectionQuery } from "@/redux/services/api/sectionApis";
import {
  cardLeftside,
  copyOfSampleMenu,
  foodMenuCard,
  leftMobileViewGarsonline,
  leftViewHeaderMenu,
  menuCardsWrapper,
  menuFoodWrapper,
  menuSearch,
} from "@/styles/DashboarStyling";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Backdrop,
  Box,
  CircularProgress,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";

import { useState } from "react";
const Page = () => {
  const { venueId, menuId } = useParams();
  const [isgarsDrawerOpen, setIsgarsDrawerOpen] = useState(false);
  const { data: sections, isLoading } = useGetAllSectionQuery(menuId);
  const {
    data: menuData,
    isLoading: menuIsLoading,
    refetch: refetchMenus,
  } = useGetMenuByIdQuery(menuId);

  const { data } = useGetRestaurentByIdQuery(venueId);
  const currentRestaurant = data?.data;
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Navigates to the previous page in the history
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", color: "#130F40" }}>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: 987871 })}
        open={isLoading || menuIsLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={leftMobileViewGarsonline}>
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
                onClick={handleGoBack}
              />
            </Box>
            <Box>
              <Typography
                fontSize={"16px"}
                fontWeight={700}
                marginleft="5px"
                textTransform="capitalize"
              >
                {currentRestaurant?.name}
              </Typography>
            </Box>
            <Box
              sx={{
                marginRight: "20px",
                cursor: "pointer",
                marginTop: "2px",
              }}
              onClick={() => {
                setIsgarsDrawerOpen(true);
              }}
            >
              <MenuIcon />
            </Box>
          </Box>
          <Drawer
            anchor="left"
            open={isgarsDrawerOpen}
            onClose={() => {
              setIsgarsDrawerOpen(false);
            }}
            sx={{
              width: 200,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 400,
                boxSizing: "border-box",
                position: "relative",
              },
            }}
          >
            <Box>
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
                <IconButton
                  onClick={() => {
                    setIsgarsDrawerOpen(false);
                  }}
                  marginRight="5px"
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              <Box
                padding="20px"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box>
                  <Typography
                    fontSize={16}
                    sx={{ fontWeight: 600, marginleft: "5" }}
                  >
                    Cart is Empty!
                  </Typography>
                </Box>
                <Box position="absolute" bottom={10}>
                  <Typography
                    fontSize={16}
                    sx={{
                      fontWeight: 600,
                      marginleft: "5",
                      fontStyle: "italic",
                      textWrap: "wrap",
                    }}
                  >
                    Address: {currentRestaurant?.address}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Drawer>
          <Box sx={{ padding: "10px" }}>
            <Box sx={copyOfSampleMenu}>
              <Typography
                fontSize={"20px"}
                fontWeight={700}
                marginTop={"30px"}
                color="#000000d9"
              >
                {menuData?.data?.name}
              </Typography>
              <Typography lineHeight={1.2}>
                {" "}
                {menuData?.data?.description}
              </Typography>
              <Typography fontSize={"14px"} color={"#BCBBC8"}>
                {menuData?.data?.note}
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
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            padding="0 10px"
            overflow="auto"
          >
            {sections?.data?.map((item, index) => {
              return (
                <Box
                  key={index}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  margin="5px"
                  maxWidth="100px"
                  minWidth="100px"
                  textAlign="center"
                >
                  <Box
                    sx={{
                      cursor: "pointer",
                      background: "#ccc",
                      width: "100%",
                      height: "80px",
                      borderRadius: "12px",
                    }}
                  >
                    {/* <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4qmuiXoOrmp-skck7b7JjHA8Ry4TZyPHkw&s"} height={100}  width={100} alt="" objectFit="cover" /> */}
                  </Box>
                  <Box sx={{ cursor: "pointer" }}>
                    <Typography fontSize={"14px"} mt="3px" fontWeight={600}>
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box sx={menuCardsWrapper}>
            {sections?.data?.map((item, index) => {
              return (
                <Box sx={menuFoodWrapper} key={index}>
                  <Box
                    sx={{
                      cursor: "pointer",
                      background: "#ccc",
                      maxWidth: "459px",
                      width: "100%",
                      height: "152px",
                      borderRadius: "12px",
                      marginTop: "20px",
                    }}
                  ></Box>
                  {/* <Image src={item.src} alt="" className="mainImage" /> */}
                  <Typography
                    textAlign={"center"}
                    fontSize={"20px"}
                    fontWeight={700}
                    marginTop={2}
                  >
                    {item?.name}
                  </Typography>
                  <Typography textAlign={"center"}>
                    {item?.description}
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
                    item?.items?.map((innerItem, innerIndex) => {
                      return (
                        <Box sx={foodMenuCard} key={innerIndex}>
                          <Box sx={cardLeftside}>
                            <Typography
                              fontSize="16px"
                              fontWeight="700"
                              marginBottom={"10px"}
                            >
                              {innerItem?.name}
                            </Typography>
                            <Typography fontSize="16px" marginBottom={"10px"}>
                              {innerItem?.description}
                            </Typography>
                            <Typography
                              color={"#A874F2"}
                              fontSize="16px"
                              fontWeight="700"
                              marginBottom={"10px"}
                            >
                              ₤{innerItem?.price}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              marginLeft: "10px",
                              cursor: "pointer",
                              background: "#ccc",
                              minWidth: "100px",
                              minHeight: "100px",
                              maxHeight: "100px",
                              borderRadius: "12px",
                            }}
                          />
                          {/* <Box>
                                                            <Image
                                                                src={innerItem?.cardPic}
                                                                alt=""
                                                                className="card-img"
                                                                objectFit="cover"
                                                            />
                                                        </Box> */}
                        </Box>
                      );
                    })
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
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
        <Typography variant="h4" textTransform="capitalize">
          {currentRestaurant?.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default Page;
