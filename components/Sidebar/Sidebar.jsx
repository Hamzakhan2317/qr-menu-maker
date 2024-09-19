"use client";

import React, { Children, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Divider,
  Box,
  Button,
  TextField,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  Restaurant as RestaurantIcon,
  Add as AddIcon,
  ExitToApp as LogoutIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import garsLogo from "../../public/assets/images/logo.png";
import Logo from "../../public/assets/images/8.webp";
import Image from "next/image";
import MenuDropdown from "../ui/MenuDropdown";
import { useRouter } from "@/navigation";
import { sidebarHoverStyling, sidebarmenu } from "@/public/assets/static";
import { useGetAllRestaurentsQuery } from "@/redux/services/api/restaurentApis";

import { useSession } from "next-auth/react";


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [restaurantOpen, setRestaurantOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const restaurants = ["Food"];
  const { push } = useRouter();
    const { data: session } = useSession();


const userId = "66ec420b346ea4f06bdf87e5"


const { data, error, isLoading } = useGetAllRestaurentsQuery(session?.user?._id, {
  skip: !session?.user?._id, // Skip the query until user data is available
});
  // const { data, error, isLoading } = useGetAllRestaurentsQuery(userId);


  console.log("dat>>>>>", data)

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleRestaurantToggle = () => {
    setRestaurantOpen(!restaurantOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleToggle = (item) => {
    if (item.isCollapsible) {
      setSettingsOpen(!settingsOpen);
    } else {
      push(item.route);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsOpen(false);
      } else {
        setIsOpen(isOpen);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: isOpen ? "200px auto" : "60px auto",
        transition: "grid-template-columns 0.3s ease",
      }}
    >
      <Drawer
        variant="permanent"
        open={isOpen}
        sx={{
          width: isOpen ? 209 : 60,
          "& .MuiDrawer-paper": {
            width: isOpen ? 209 : 60,
            transition: "width 0.3s",
            position: "fixed",
            height: "100vh",
            top: 0,
            left: 0,
            overflowY: "hidden",
          },
          "& .MuiListItemIcon-root svg": {
            flex: 1,
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "48px",
          }}
        >
          <Image
            src={isOpen ? garsLogo : Logo}
            alt="Logo"
            width={isOpen ? 150 : 40}
            height={40}
            style={{ transition: "width 0.3s", objectFit: "contain" }}
          />
        </div>
        {/* Food Dropdown Below Logo */}
        <ListItem
          sx={sidebarHoverStyling}
          button
          onClick={handleRestaurantToggle}
          style={{
            marginTop: "10px",
            backgroundColor: "#8338ec",
            position: "relative",
            top: "0px",
            zIndex: "900",
            color: "#fff",
          }}
        >
          <ListItemIcon sx={{ minWidth: "30px", color: "#fff" }}>
            <RestaurantIcon />
          </ListItemIcon>
          {isOpen && (
            <ListItemText
              primary="Food"
              primaryTypographyProps={{ fontSize: 14 }}
            />
          )}
          {isOpen && (restaurantOpen ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        <Collapse in={restaurantOpen && isOpen} timeout="auto" unmountOnExit>
          <Box
            sx={{
              backgroundColor: "#ffffff",
              position: "absolute",
              top: "90px",
              zIndex: "100",
              paddingBottom: "8px",
              width: "209px",
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "auto",
                maxHeight: "200px",
                maxWidth: "200px",
                width: "200px",
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px",
                paddingBottom: "8px",
              }}
            >
              <TextField
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: <SearchIcon />,
                }}
                sx={{
                  marginBottom: 2,
                  backgroundColor: "#fff",
                  marginTop: "20px",
                  width: "176px",
                }}
              />
              <List component="div" disablePadding>
                {restaurants.length === 0 ? (
                  <ListItem
                    sx={{
                      paddingLeft: 2,
                      backgroundColor: "#F9F5FE",
                      width: "100%",
                    }}
                  >
                    <ListItemText primary="Food" />
                  </ListItem>
                ) : (
                  restaurants.map((restaurant, index) => (
                    <ListItem
                      sx={{
                        paddingLeft: 2,
                        backgroundColor: "#F9F5FE",
                        width: "100%",
                      }}
                      key={index}
                    >
                      <ListItemText primary={restaurant} />
                    </ListItem>
                  ))
                )}
              </List>
            </Box>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{ marginTop: 2, backgroundColor: "#f7f7f7" }}
            >
              Add new venue
            </Button>
          </Box>
        </Collapse>
        <Divider />
        { session?.user?.restaurants[0]?.name ?? "Finedine" }


        <List>
          {sidebarmenu.map((item, index) => (
            <div key={index}>
              <ListItem
                sx={sidebarHoverStyling}
                button
                onClick={() => handleToggle(item)}
              >
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  {item.icon}
                </ListItemIcon>
                {isOpen && (
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{ fontSize: 14 }}
                  />
                )}
                {isOpen &&
                  item.isCollapsible &&
                  (settingsOpen ? <ExpandLess /> : <ExpandMore />)}
              </ListItem>
              {item.isCollapsible && (
                <Collapse
                  in={settingsOpen && isOpen}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem, subIndex) => (
                      <ListItem
                        sx={sidebarHoverStyling}
                        button
                        onClick={() => push(subItem.route)}
                        key={subIndex}
                      >
                        <ListItemText
                          primaryTypographyProps={{ fontSize: 14 }}
                          primary={subItem.title}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          transition: "width 0.3s ease",
          "& .MuiToolbar-root.MuiToolbar-gutters": {
            minHeight: "48px !important",
          },
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#ffffff",
            minHeight: "48px !important",
            height: "48px",
            width: `calc(100% - ${isOpen ? 200 : 60}px)`,
            left: isOpen ? 200 : 60,
            transition: "width 0.3s, left 0.3s",
            boxShadow: "none",
            borderBottom: "1px solid #E0E0E0",
          }}
        >
          <Toolbar
            sx={{
              minHeight: "48px !important",
              display: "flex",
              justifyContent: "space-between",
            }}
            className="nav-toolbar"
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ marginRight: 2, color: "#222222" }}
            >
              <MenuIcon />
            </IconButton>
            <MenuDropdown />
          </Toolbar>
        </AppBar>

        <Toolbar />
        <Box
          sx={{
            transition: "width 0.3s",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
