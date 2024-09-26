"use client";
import { useRouter } from "@/navigation";
import {
  sidebarActiveStyling,
  sidebarHoverStyling,
} from "@/public/assets/static";
import {
  Add as AddIcon,
  Dashboard as DashboardIcon,
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../../public/assets/images/8.webp";
import garsLogo from "../../public/assets/images/logo.png";
import MenuDropdown from "../ui/MenuDropdown";

import { RestaurantSvg } from "@/public/assets/svg/Egg";
import {
  useGetAllRestaurentsQuery,
  useGetRestaurentByIdQuery,
} from "@/redux/services/api/restaurentApis";
import { truncateText } from "@/utils/util.functions";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useSession } from "next-auth/react";
import { useParams, usePathname } from "next/navigation";
import AddRestaurantsForm from "../AddRestaurants";

const Sidebar = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(true);
  const [restaurantOpen, setRestaurantOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { push } = useRouter();
  const pathname = usePathname();

  const { venueId } = useParams();
  const { data: restaurantById } = useGetRestaurentByIdQuery(venueId);
  const currentRestaurant = restaurantById?.data;

  const trimmedPathname = pathname.replace(/^\/en/, "");
  const { data: session } = useSession();
  const [venues, setVenues] = useState([]);

  const { data, refetch: refetchRestaurants } = useGetAllRestaurentsQuery(
    session?.user?._id,
    {
      skip: !session?.user?._id, // Skip the query until user data is available
    }
  );

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleRestaurantToggle = () => {
    setRestaurantOpen(!restaurantOpen);
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
              primary={truncateText(currentRestaurant?.name) ?? "GarsOnline"}
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
              top: 90,
              zIndex: "100",
              width: "209px",
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px",
              padding: "20px 0px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ffffff",
                display: "flex",

                zIndex: 999,

                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                maxWidth: "200px",
                width: "200px",
                overflowY: "auto",
              }}
            >
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
                      sx={sidebarHoverStyling}
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
          {sidebarmenu?.map((item, index) => {
            console.log(
              "pathname === item.route",
              trimmedPathname === item.route,
              item.route,
              pathname
            );
            return (
              <div key={index}>
                <ListItem
                  sx={
                    trimmedPathname.includes(item.route)
                      ? sidebarActiveStyling
                      : sidebarHoverStyling
                  }
                  backgroundColor="red"
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
                    <List component="div">
                      {item.subItems.map((subItem, subIndex) => (
                        <ListItem
                          sx={
                            trimmedPathname.includes(subItem.route)
                              ? sidebarActiveStyling
                              : sidebarHoverStyling
                          }
                          button
                          onClick={() => push(subItem.route)}
                          key={subIndex}
                        >
                          <ListItemText
                            sx={{ paddingLeft: "20px" }}
                            primaryTypographyProps={{ fontSize: 14 }}
                            primary={subItem.title}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            );
          })}
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
