"use client";

import CustomAccordion from "@/components/ui/Accordion/CustomAccordion";
import InputField from "@/components/ui/InputField";
import { useGetAllMenuQuery } from "@/redux/services/api/menuApis";
import { useGetRestaurentByIdQuery } from "@/redux/services/api/restaurentApis";
import { useGetAllSectionQuery } from "@/redux/services/api/sectionApis";
import {
  cardLeftside,
  copyOfSampleMenu,
  foodMenuCard,
  leftMobileViewGarsonline,
  leftViewHeaderMenu,
  menuCardsWrapper,
  menuFoodTypes,
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
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const Page = () => {
  const { venueId, menuId } = useParams();
  const [menuDetails, setMenuDetails] = useState(null);
  const [isgarsDrawerOpen, setIsgarsDrawerOpen] = useState(false);
  const { data: sections, isLoading } = useGetAllSectionQuery(menuId);
  const {
    data: menuData,
    isLoading: menuIsLoading,
    refetch: refetchMenus,
  } = useGetAllMenuQuery(venueId, {
    skip: !venueId, // Skip the query until user data is available
  });

  const { data } = useGetRestaurentByIdQuery(venueId);
  const currentRestaurant = data?.data;

  useEffect(() => {
    if (menuData) {
      setMenuDetails(menuData?.data?.find((menu) => menu._id === menuId));
    }
  }, [menuData, menuId]);

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
              />
            </Box>
            <Box>
              <Typography fontSize={"16px"} fontWeight={700} marginleft="5px">
                {menuDetails?.name}
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
              width: 400,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 400,
                boxSizing: "border-box",
              },
            }}
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
              <IconButton
                onClick={() => {
                  setIsgarsDrawerOpen(false);
                }}
                marginRight="5px"
              >
                <CloseIcon />
              </IconButton>
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
                {menuDetails?.name}
              </Typography>
              <Typography> {menuDetails?.description}</Typography>
              <Typography fontSize={"14px"} color={"#BCBBC8"}>
                {menuDetails?.note}
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
            {sections?.data?.map((item, index) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={3}
                  key={index}
                  sx={{ textAlign: "center" }}
                >
                  <Box
                    sx={{
                      marginTop: "10px",
                      marginLeft: "10px",
                      cursor: "pointer",
                      background: "#ccc",
                      width: "107px",
                      height: "78px",
                      borderRadius: "12px",
                    }}
                  >
                    {/* <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4qmuiXoOrmp-skck7b7JjHA8Ry4TZyPHkw&s"} height={100}  width={100} alt="" objectFit="cover" /> */}
                  </Box>
                  <Box sx={{ cursor: "pointer" }}>
                    <Typography fontSize={"14px"} fontWeight={600}>
                      {item.name}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box sx={menuCardsWrapper}>
            {sections?.data?.map((item, index) => {
              return (
                <Box sx={menuFoodWrapper} key={index}>
                  <Box
                    sx={{
                      cursor: "pointer",
                      background: "#ccc",
                      width: "459px",
                      height: "152px",
                      borderRadius: "12px",
                    }}
                  ></Box>
                  {/* <Image src={item.src} alt="" className="mainImage" /> */}
                  <Typography
                    textAlign={"center"}
                    fontSize={"20px"}
                    fontWeight={700}
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
                              width: "100px",
                              height: "100px",
                              borderRadius: "12px",
                            }}
                          ></Box>
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
