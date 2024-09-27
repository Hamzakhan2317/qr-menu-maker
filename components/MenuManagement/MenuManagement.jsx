"use client";
import { useRouter } from "@/navigation";
import {
  useDeleteMenuMutation,
  useGetAllMenuQuery,
  useRegisterMenuMutation,
  useUpdateStatusMutation,
} from "@/redux/services/api/menuApis";
import {
  emptyPageWrapper,
  emptyPageWrapperSvg,
  menuManagementCard,
  menuManagementCardWrapper,
  MenuManagementHeader,
} from "@/styles/MenuManagementStyling";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Box, Drawer, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonComp from "../ui/button";
import CustomizedSwitch from "../ui/CustomizeSwitch";

import EmptyPageSvg from "@/public/assets/svg/EmptyPageSvg";
import VerticalThreeDots from "@/public/assets/svg/verticalThreeDots";
import { toast } from "sonner";
import Loader from "../ui/Loader";
import PopUp from "../ui/PopUp";
import EditMenuForm from "./EditMenuForm";

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
        toast.success(resp?.message || "Menu Deleted successfully");
        refetchMenus();
        setAnchorEl(null);
        setMenuEditData(null);
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
    setMenuEditData(menuData?.data?.find((menu) => menu._id === id));
    setAnchorEl(event?.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSwitchChange = async (
    event,
    statusMenuID,
    statusRestaurantID
  ) => {
    try {
      const resp = await updateStatus({
        status: event.target.checked ? "1" : "0",
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
  };

  if (sessionStatus === "loading" || isLoading) return <Loader />;

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
                      {menu?.name}{" "}
                      {menu?.status == 1 ? (
                        <span
                          style={{
                            borderRadius: "6px",
                            border: "1px solid rgb(154 233 112)",
                            padding: "2px 10px",
                            color: "#1a8a05",
                            background: "#d2ffd6",
                            fontSize: "10px",
                          }}
                        >
                          live
                        </span>
                      ) : (
                        ""
                      )}
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
                    <CustomizedSwitch
                      value={menu?.status == 1 ? true : false}
                      onChange={(e) =>
                        handleSwitchChange(e, menu?._id, menu?.restaurant)
                      }
                    />
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
                    <Box
                      onClick={(e) => handleMenuOpen(e, menu?._id)}
                      sx={{ cursor: "pointer" }}
                    >
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
            name: "Edit",
            icon: <EditNoteIcon />,
            func: () => {
              setAnchorEl(null);
              setIsDrawerOpen(true);
            },
          },
          {
            name: "Delete",
            icon: <DeleteOutlineIcon />,
            func: () => deleteMenuRow(),
          },
        ]}
      />
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => {
          setMenuEditData(null);
          setIsDrawerOpen(false);
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
        <EditMenuForm
          setMenuEditData={setMenuEditData}
          data={menuEditData}
          refetchMenus={refetchMenus}
          setIsDrawerOpen={() => {
            setMenuEditData(null);
            setIsDrawerOpen();
          }}
        />
      </Drawer>
    </Box>
  );
};

export default MenuManagement;
