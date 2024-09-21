"use client";
import { useEffect, useState } from "react";
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
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  Add as AddIcon,
} from "@mui/icons-material";
import garsLogo from "../../public/assets/images/logo.png";
import Logo from "../../public/assets/images/8.webp";
import Image from "next/image";
import MenuDropdown from "../ui/MenuDropdown";
import { useRouter } from "@/navigation";
import { sidebarHoverStyling } from "@/public/assets/static";

import { useSession } from "next-auth/react";
import { RestaurantSvg } from "@/public/assets/svg/Egg";
import InputField from "../ui/InputField";
import AddRestaurantsForm from "../AddRestaurants";
import { useGetAllRestaurentsQuery } from "@/redux/services/api/restaurentApis";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const Sidebar = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [restaurantOpen, setRestaurantOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { push } = useRouter();
  const { data: session } = useSession();
  const [venues, setVenues] = useState([]);

  // Assuming you want to pass the first restaurant's ID
  const venueId = session?.user?.restaurants?.[0]?._id;

  // Dynamic sidebarmenu with the actual restaurant id
  const sidebarmenu = [
    {
      title: "Dashboard",
      icon: <DashboardIcon fontSize="18px" />,
      route: `/venues/${venueId}/dashboard`,
      isCollapsible: false,
    },
    {
      title: "Menu Management",
      icon: <RestaurantIcon fontSize="18px" />,
      route: `/venues/${venueId}/menu-management`,
      isCollapsible: false,
    },
    {
      title: "Settings",
      icon: <SettingsIcon fontSize="18px" />,
      isCollapsible: true,
      subItems: [
        { title: "QR Code", route: `/venues/${venueId}/settings/qrcode` },
        {
          title: "Venue Information",
          route: `/venues/${venueId}/settings/venue-information`,
        },
        {
          title: "Operating Hours",
          route: `/venues/${venueId}/settings/operating-hours`,
        },
      ],
    },
  ];

  const {
    data,
    error,
    isLoading,
    refetch: refetchRestaurants,
  } = useGetAllRestaurentsQuery(session?.user?._id, {
    skip: !session?.user?._id, // Skip the query until user data is available
  });

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

  useEffect(() => {
    setVenues(data?.data);
  }, [data]);

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
            backgroundColor: restaurantOpen ? "#8338ec" : "#F5F5F5",
            position: "relative",
            top: "0px",
            zIndex: "900",
            color: restaurantOpen ? "#fff" : "#000000",
            "&:hover": {
              color: restaurantOpen ? "#fff !important" : "#000000 !important",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "30px", color: "#fff" }}>
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: restaurantOpen
                  ? "#000000 !important"
                  : "#fff !important",
                backgroundColor: restaurantOpen
                  ? "#fff !important"
                  : "#595959 !important",
              }}
            >
              <RestaurantSvg />
            </Box>
          </ListItemIcon>
          {isOpen && (
            <ListItemText
              primary="Food"
              primaryTypographyProps={{ fontSize: 14 }}
              sx={{
                "&:hover": {
                  color: restaurantOpen
                    ? "#000000 !important"
                    : "#fff !important",
                },
              }}
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
              <InputField
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
                icon={true}
                searchIcon
                variant="outlined"
                size="small"
                position="end"
                sx={{
                  marginBottom: 2,
                  backgroundColor: "#fff",
                  marginTop: "20px",
                  padding: "5px 8px !important",
                  width: "176px",
                  "& .MuiOutlinedInput-root": {
                    paddingLeft: "0px",
                  },
                }}
              />
              <List
                component="div"
                disablePadding
                sx={{ width: "100% !important" }}
              >
                {venues?.length === 0 ? (
                  <ListItem
                    sx={{
                      // paddingLeft: 2,
                      cursor: "pointer",
                      backgroundColor: "#F9F5FE",
                      width: "100% ",
                    }}
                  >
                    <ListItemText
                      sx={{ width: "100%" }}
                      primary={venues?.[0]?.name ?? "GarsOnline"}
                    />
                  </ListItem>
                ) : (
                  venues?.map((item, index) => (
                    <ListItem
                      onClick={() => push(`/venues/${item._id}/dashboard`)}
                      sx={{
                        cursor: "pointer",
                        paddingLeft: 2,
                        backgroundColor: "#F9F5FE",
                        width: "100% !important",
                      }}
                      key={index}
                    >
                      <ListItemText
                        primary={item?.name}
                        sx={{ width: "100%" }}
                      />
                    </ListItem>
                  ))
                )}
              </List>
            </Box>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{
                marginTop: 2,
                backgroundColor: "#f7f7f7",
                width: "90%",
                marginLeft: "8px",
              }}
              onClick={() => setIsDrawerOpen(true)}
            >
              Add new venue
            </Button>
          </Box>
        </Collapse>
        <Divider />

        <List>
          {sidebarmenu?.map((item, index) => (
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
                  <List component="div" sx={{ paddingLeft: "15px" }}>
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

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
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
        <AddRestaurantsForm
          refetchRestaurants={refetchRestaurants}
          userId={session?.user?._id}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
