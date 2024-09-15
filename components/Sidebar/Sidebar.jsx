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
import Dashboard from "../Dashboard/Dashboard";
import MenuDropdown from "../ui/MenuDropdown";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);

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

          <ListItem button>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Menu Management" />}
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
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Sublink 1" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Sublink 2" />
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
            padding: "16px",
            transition: "width 0.3s",
            backgroundColor: "#F0F2F5",
          }}
        >
          <Dashboard />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
