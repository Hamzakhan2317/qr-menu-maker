"use client";

import React, { Children, useState } from "react";
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
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";
import garsLogo from "../../public/assets/images/logo.png";
import Logo from "../../public/assets/images/8.webp";
import Image from "next/image";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MenuDropdown from "../ui/MenuDropdown";
import { useRouter } from "@/navigation";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { push } = useRouter();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: isOpen ? "240px auto" : "80px auto",
        transition: "grid-template-columns 0.3s ease",
      }}
    >
      <Drawer
        variant="permanent"
        open={isOpen}
        sx={{
          width: isOpen ? 240 : 80,
          "& .MuiDrawer-paper": {
            width: isOpen ? 240 : 80,
            transition: "width 0.3s",
            position: "fixed",
            height: "100vh",
            top: 0,
            left: 0,
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

        <Divider />

        <List>
          <ListItem button onClick={() => "/dashboard"}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Dashboard" />}
          </ListItem>

          <ListItem button onClick={() => push('/venues/menu-management')}>
            <ListItemIcon>
              <RestaurantMenuIcon />
            </ListItemIcon>
            {
              isOpen &&
              <ListItemText
                primary="Menu Management"
              />
            }
          </ListItem>

          <ListItem button onClick={toggleSettings}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Settings" />}
            {isOpen && (settingsOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={settingsOpen && isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => push('/venues/settings/qrcode')}>
                <ListItemText primary="QR Code" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => push('/venues/settings/venue-information')}>
                <ListItemText primary="Venue Information" />
              </ListItem>
            </List>
          </Collapse>
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
            width: `calc(100% - ${isOpen ? 240 : 80}px)`,
            left: isOpen ? 240 : 80,
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
