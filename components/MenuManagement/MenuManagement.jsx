"use client";
import { Box, Chip, Drawer, Typography } from "@mui/material";
import { useState } from "react";
import ButtonComp from "../ui/button";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {
  emptyPageWrapper,
  emptyPageWrapperSvg,
  menuManagementCard,
  menuManagementCardWrapper,
  MenuManagementHeader,
} from "@/styles/MenuManagementStyling";
import CustomizedSwitch from "../ui/CustomizeSwitch";
import {
  useRegisterMenuMutation,
  useGetAllMenuQuery,
  useDeleteMenuMutation,
  useUpdateStatusMutation,
} from "@/redux/services/api/menuApis";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "@/navigation";
import { useParams, usePathname } from "next/navigation";

import { BallTriangle } from "react-loader-spinner";
import EmptyPageSvg from "@/public/assets/svg/EmptyPageSvg";
import editIcon from "../../public/assets/svg/editIcon.svg";
import deleteIcon from "../../public/assets/svg/deleteIcon.svg";
import Image from "next/image";
import VerticalThreeDots from "@/public/assets/svg/verticalThreeDots";
import PopUp from "../ui/PopUp";
import EditMenuForm from "./EditMenuForm";
import { set } from "mongoose";
import { toast } from "sonner";

const MenuManagement = () => {
  const { data: session, status: sessionStatus } = useSession();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuCreated, setMenuCreated] = useState(false);
  const [menuEditData, setMenuEditData] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const params = useParams();
  const { venueId } = params;

  const [registerMenu] = useRegisterMenuMutation();
  const [updateStatus] = useUpdateStatusMutation();
  const [deleteMenu] = useDeleteMenuMutation();

  const pathname = usePathname();

  // Use a regex to extract the ID from the pathname
  const match = pathname.match(/\/venues\/([^\/]+)/);
  const restaurantId = match ? match[1] : null; // Get the ID or null if not found

  const {
    data: menuData,
    error,
    isLoading,
    refetch: refetchMenus,
  } = useGetAllMenuQuery(restaurantId, {
    skip: !restaurantId, // Skip the query until user data is available
  });

  const status = "Always";

  const createMenu = async () => {
    setIsloading(true);

    try {
      const resp = await registerMenu({
        restaurantId: restaurantId,
        name: "Menu " + Math.floor(Math.random() * 100) + 1,
      }).unwrap();

      if (resp) {
        setIsloading(false);
        setMenuCreated(true);
        refetchMenus();
        router.push(
          `/venues/${venueId}/menu-management/${resp?.menuId}/section`
        );
        // toast.success(resp?.message || "Menu Created successfully");
      }
    } catch (error) {
      setIsloading(false);
      console.log("error>>>>>", error);
    }
  };

  const deleteMenuRow = async () => {
    try {
      const resp = await deleteMenu(menuEditData?._id).unwrap();

      if (resp) {
        // toast.success(resp?.message || "Menu Deleted successfully");
        refetchMenus();
        setAnchorEl(null)
        setMenuEditData(null)
      }
    } catch (error) {
      console.log("error>>>>>", error);
    }
  };
  const cardLastRow = [
    {
      text: "8 Sections, 35 Items -",
    },
    {
      text: "Last updated on Sep 16, 2024",
    },
  ];

  useEffect(() => {
    if (menuData?.data?.length) {
      setMenuCreated(true);
    }
  }, [menuData]);

  const handleMenuOpen = (event, id) => {
    setMenuEditData(menuData?.data?.find(menu => menu._id === id));
    setAnchorEl(event?.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSwitchChange = async (event, statusMenuID, statusRestaurantID) => {
    console.log(event.target.checked);
    try {
      const resp = await updateStatus({
        status: event.target.checked ? '1' : '0',
        restaurantId: statusRestaurantID,
        menuId: statusMenuID,
      });
      if (resp) {
        toast.success("Status Updated successfully");
        refetchMenus();
      }
    } catch (error) {
      console.log("error>>>>>", error);
    }
  }

  if (sessionStatus === "loading" || isLoading)
    return (
      <Box
        height={"100vh"}
        width={"80vw"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
      >
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{
            height: "100vh",
          }}
          wrapperClass=""
          visible={true}
        />
      </Box>
    );

  if (!menuData?.data?.length)
    return (
      <>
        <Box sx={MenuManagementHeader}>
          <Typography
            sx={{ fontSize: "20px", lineHeight: "32px", fontWeight: "600" }}
          >
            Menu Management
          </Typography>
          <Box>
            <ButtonComp
              isLoading={isloading}
              variant="blue"
              text="Create a Menu"
              padding="4px 15px"
              onClick={() => {
                createMenu();
              }}
            />
          </Box>
        </Box>
        <Box sx={emptyPageWrapper}>
          <>
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
              onClick={createMenu}
            />
          </>
        </Box>
      </>
    );

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
            isLoading={isloading}
            variant="blue"
            text="Create a Menu"
            padding="4px 15px"
            onClick={() => {
              createMenu();
            }}
          />
        </Box>
      </Box>
      <>
        {menuCreated && (
          <Box sx={menuManagementCardWrapper}>
            {menuData?.data?.map((menu, i) => {
              return (
                <Box sx={menuManagementCard} key={i}>
                  <Box>
                    <Typography
                      color="#00000073"
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: 600,
                        color: "#000",
                      }}
                    >
                      {menu?.name} {
                        menu?.status == 1 ?
                          <span style={{ borderRadius: "6px", border: "1px solid rgb(154 233 112)", padding: "2px 10px", color: "#1a8a05", background: "#d2ffd6", fontSize: "10px" }}>live</span>
                          : ""
                      }
                    </Typography>
                    <Typography color="#00000073" fontSize={"14px"}>
                      {menu?.description ?? "Your happy place"}
                    </Typography>
                    <Typography
                      color="#00000073"
                      fontSize={"14px"}
                      marginTop={"10px"}
                      fontWeight={600}
                    >
                      Availability: {status}
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
                    <CustomizedSwitch value={menu?.status == 1 ? true : false} onChange={(e) => handleSwitchChange(e, menu?._id, menu?.restaurant)} />
                    <ButtonComp
                      icon={<EditNoteIcon />}
                      sx={{ fontSize: "14px !important", fontWeight: 400 }}
                      text={"Edit Menu"}
                      variant="blue"
                      padding="4px 15px"
                      marginRight="20px"
                      onClick={() =>
                        router.push(
                          `/venues/${venueId}/menu-management/${menu?._id}/section`
                        )
                      }
                    />
                    <Box onClick={(e) => handleMenuOpen(e, menu?._id)} sx={{ cursor: "pointer" }}>
                      <VerticalThreeDots />
                    </Box>

                  </Box>
                </Box>
              );
            })}
          </Box>
        )}
      </>
      <PopUp
        handleMenuClose={handleMenuClose}
        anchorEl={anchorEl}
        menus={[
          {
            name: "Edit", icon: <EditNoteIcon />, func: () => {
              setAnchorEl(null);
              setIsDrawerOpen(true)
            }
          },
          { name: "Delete", icon: <DeleteOutlineIcon />, func: () => deleteMenuRow() },
        ]}
      />
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => {
          setMenuEditData(null)
          setIsDrawerOpen(false)
        }}
        sx={{
          width: 456,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 456,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
      >
        <EditMenuForm setMenuEditData={setMenuEditData} data={menuEditData} refetchMenus={refetchMenus} setIsDrawerOpen={() => {
          setMenuEditData(null)
          setIsDrawerOpen()
        }} />
      </Drawer>
    </Box>
  );
};

export default MenuManagement;
