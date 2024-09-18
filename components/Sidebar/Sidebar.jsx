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
import MenuDropdown from "../ui/MenuDropdown";
import { useRouter } from "@/navigation";
import { sidebarHoverStyling, sidebarmenu } from "@/public/assets/static";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { push } = useRouter();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
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
    handleResize(); // Call on mount to set initial state

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
          width: isOpen ? 200 : 60,
          "& .MuiDrawer-paper": {
            width: isOpen ? 200 : 60,
            transition: "width 0.3s",
            position: "fixed",
            height: "100vh",
            top: 0,
            left: 0,
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

        <Divider />

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
