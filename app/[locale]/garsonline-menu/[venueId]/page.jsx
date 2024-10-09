"use client";

import GarsOnlineModal from "@/components/GarsonlineMenu/GarsOnlineModal";
import ButtonComp from "@/components/ui/button";
import CustomModal from "@/components/ui/CustomModal";
import Loader from "@/components/ui/Loader";
import { useGetAllMenuQuery } from "@/redux/services/api/menuApis";
import { useGetRestaurentByIdQuery } from "@/redux/services/api/restaurentApis";
import {
  leftMobileViewGarsonline,
  leftViewGettingReady,
  leftViewHeader,
  menuWrapper,
} from "@/styles/DashboarStyling";
import InfoIcon from "@mui/icons-material/Info";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [isMenu, setIsMenu] = useState(false);
  const { venueId } = useParams();
  const [open, setOpen] = useState(false);
  const {
    data: menuData,
    // error,
    isLoading,
    // refetch: refetchMenus,
  } = useGetAllMenuQuery(venueId, {
    skip: !venueId, // Skip the query until user data is available
  });
  const { data } = useGetRestaurentByIdQuery(venueId);
  const currentRestaurant = data?.data;

  console.log("menuData", menuData, isMenu);

  if (isLoading) return <Loader />;
  return (
    <Box sx={{ display: "flex", height: "100vh", color: "#130F40" }}>
      <Box sx={leftMobileViewGarsonline}>
        <Box>
          <Box sx={leftViewHeader}>
            <Box
              sx={{
                marginRight: "20px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}>
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
              }}>
              <InfoIcon color="#fff" sx={{ marginRight: "12px", width: "20px", height: "20px" }} />
              <Typography fontSize={"14px"} fontWeight={700} marginleft="5px">
                Our menu is getting ready
              </Typography>
            </Box>
          </Box>
          <Box sx={menuWrapper}>
            <Typography fontSize={"22px"} fontWeight={700} textTransform="capitalize">
              {currentRestaurant?.name}
            </Typography>
            <ButtonComp
              text={"Go to Menu"}
              variant="lightPurple"
              padding="6px 10px"
              width={"80%"}
              onClick={() => {
                setOpen(true);
              }}
            />
          </Box>
          <CustomModal
            setOpen={setOpen}
            open={open}
            title={"Select Menu"}
            width="auto"
            maxWidth="md">
            <GarsOnlineModal menuData={menuData?.data} setIsMenu={setIsMenu} />
          </CustomModal>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
