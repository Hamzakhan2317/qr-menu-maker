"use client";
import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
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
import CloseIcon from "@mui/icons-material/Close";
import InputField from "../ui/InputField";
import RightDrawerContent from "./RightDrawerContent";
import { useRegisterMenuMutation, useGetAllMenuQuery } from "@/redux/services/api/menuApis";
import { useSession, signOut } from "next-auth/react";
import {toast} from "sonner"
import {useEffect} from "react"
import {useRouter} from "@/navigation"



const MenuManagement = () => {
  const { data: session, status:sessionStatus } = useSession();
  const [menuCreated, setMenuCreated] = useState(false);
  const [menuEdit, setMenuEdit] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter(); 


  const [ registerMenu ] = useRegisterMenuMutation();
  const { data:menuData, error, isLoading, refetch } = useGetAllMenuQuery(session?.user?.restaurants[0]?._id, {
    skip: !session?.user?.restaurants[0]?._id, // Skip the query until user data is available
  });

  // const { data:menuData, error, isLoading } = useGetAllMenuQuery("66ec420b346ea4f06bdf87e7");

  console.log("isLoading>>>>>>>>>>>>>",isLoading)
  console.log("menuData>>>>>>>>>>>>>",menuData)



  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevOpen) => !prevOpen);
  };
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };
  const status = "Always";

  const createMenu =  async() => {
    // const handelregisterMenu = async (values) => {
      { session?.user?.restaurants[0]?._id  }

      try {
        const resp = await registerMenu({
          restaurantId:session?.user?.restaurants[0]?._id ,
          name:"new menu"
        }).unwrap();
  
        if (resp) {
          setMenuCreated(true)
          // toast.success(resp?.message || "Menu Created successfully");
        }
      } catch (error) {
        console.log("error>>>>>", error);
      }
    // };

  };

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
  const logout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };
  useEffect(()=>{
    // logout()
    if(menuData?.data?.length){
      setMenuCreated(true)
    }

  },[menuData])
//   useEffect(()=>{
//     if(session?.user?.restaurants[0]?._id){
// refetch()
//     }
//   },[session?.user])
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
            <>
            {
              menuData?.data?.map((menu,i)=>(
                <Box key={i} sx={menuManagementCardWrapper} onClick={()=> router.push(`/venues/menu-management/${menu?._id}/section`)}>
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
              ))
            }
            </>
            
          ) : (
            <Box sx={emptyPageWrapper}>
              {sessionStatus === "loading" || isLoading? <>Loading.........</>:
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
              }
              
            </Box>
          )}
        </>
      ) : (
      <>section part</>
      )}
    </Box>
  );
};

export default MenuManagement;
