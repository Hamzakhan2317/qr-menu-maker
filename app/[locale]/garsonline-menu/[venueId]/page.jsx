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
import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import InfoIcon from "@mui/icons-material/Info";
import ButtonComp from "@/components/ui/button";
import CloseIcon from "@mui/icons-material/Close";
import { useParams, useRouter } from "next/navigation";
import CustomModal from "@/components/ui/CustomModal";
import GarsOnlineModal from "@/components/GarsonlineMenu/GarsOnlineModal";
import { useSession } from "next-auth/react";
import { useGetAllRestaurentsQuery } from "@/redux/services/api/restaurentApis";
import { useState } from "react";
import { useGetAllMenuQuery } from "@/redux/services/api/menuApis";

const page = () => {
  const [isMenu, setIsMenu] = useState(false);
  const { venueId } = useParams();
  const [open, setOpen] = useState(false);
  const [isgarsDrawerOpen, setIsgarsDrawerOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const {
    data: menuData,
    error,
    isLoading,
    refetch: refetchMenus,
  } = useGetAllMenuQuery(venueId, {
    skip: !venueId, // Skip the query until user data is available
  });

  console.log('menuData', menuData)
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
            maxWidth="md"
          >
            <GarsOnlineModal menuData={menuData?.data} setIsMenu={setIsMenu} />
          </CustomModal>
        </Box>
      </Box>
    </Box>
  )
};

export default page;
