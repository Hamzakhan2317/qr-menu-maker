"use client";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ButtonComp from "../ui/button";
import {
  emptyPageWrapper,
  emptyPageWrapperSvg,
  menuManagementCard,
  menuManagementCardWrapper,
  MenuManagementHeader,
} from "@/styles/MenuManagementStyling";
import { EditSvg } from "@/public/assets/svg/ForkNknife";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomizedSwitch from "../ui/CustomizeSwitch";
import {
  useRegisterMenuMutation,
  useGetAllMenuQuery,
  useDeleteMenuMutation,
} from "@/redux/services/api/menuApis";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "@/navigation";
import { useParams } from "next/navigation";

import { BallTriangle } from "react-loader-spinner";
import EmptyPageSvg from "@/public/assets/svg/EmptyPageSvg";

const MenuManagement = () => {
  const { data: session, status: sessionStatus } = useSession();
  const [menuCreated, setMenuCreated] = useState(false);
  const [menuEdit, setMenuEdit] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const params = useParams();
  const { venueId } = params;

  const [registerMenu] = useRegisterMenuMutation();
  const [deleteMenu] = useDeleteMenuMutation();

  const {
    data: menuData,
    error,
    isLoading,
    refetch: refetchMenus,
  } = useGetAllMenuQuery(session?.user?.restaurants[0]?._id, {
    skip: !session?.user?.restaurants[0]?._id, // Skip the query until user data is available
  });

  const status = "Always";

  const createMenu = async () => {
    setIsloading(true);
    {
      session?.user?.restaurants[0]?._id;
    }
    try {
      const resp = await registerMenu({
        restaurantId: session?.user?.restaurants[0]?._id,
        name: "new menu",
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

  const deleteMenuRow = async (menuId) => {
    try {
      const resp = await deleteMenu(menuId).unwrap();

      if (resp) {
        // toast.success(resp?.message || "Menu Deleted successfully");
        refetchMenus();
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
                      {menu?.name}
                    </Typography>
                    <Typography color="#00000073" fontSize={"14px"}>
                      Your happy place!
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
                    <CustomizedSwitch />
                    <ButtonComp
                      text={"Edit Menu"}
                      variant="blue"
                      startIcon={<EditSvg />}
                      padding="4px 15px"
                      marginRight="20px"
                      onClick={() =>
                        router.push(
                          `/venues/${venueId}/menu-management/${menu?._id}/section`
                        )
                      }
                    />
                    <Box sx={{ cursor: "pointer" }}>
                      <DeleteIcon
                        sx={{ fill: "#FF7F7F " }}
                        onClick={() => deleteMenuRow(menu._id)}
                      />
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}
      </>
    </Box>
  );
};

export default MenuManagement;
