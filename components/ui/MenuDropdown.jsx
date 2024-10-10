"use client";
import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import { useRouter } from "@/navigation";
import { toast } from "sonner";
import {
  //  useSession,
  signOut,
} from "next-auth/react";

export default function MenuListComposition() {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  // Function to handle logout
  const handleLogout = async () => {
    const toastId = toast.loading("Please wait...");
    await signOut({ redirect: false });
    router.push("/login");
    toast.success("Logout successfully", { id: toastId });

    // Add your actual logout logic here, such as clearing user session or redirecting
    // For example:
    // authService.logout(); or navigate("/login");
  };

  const navbarProfile = [
    {
      icon: <SettingsIcon fontSize="small" />,
      txt: "Account Settings",
    },
    {
      icon: <NotificationsNoneIcon fontSize="small" />,
      txt: "Notifications",
    },
    {
      icon: <HelpOutlineOutlinedIcon fontSize="small" />,
      txt: "Help Center",
    },
    {
      icon: <VolumeUpOutlinedIcon fontSize="small" />,
      txt: "Change Sound",
    },
    {
      icon: <LogoutIcon fontSize="small" />,
      txt: "Logout",
      onClick: handleLogout, // Adding the logout handler
    },
  ];

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <IconButton
          ref={anchorRef}
          size="small"
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}>
          <Avatar sx={{ width: 32, height: 32 }}>W</Avatar>
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
              }}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}>
                    {navbarProfile?.map((item, index) => {
                      return (
                        <MenuItem
                          // onClick={handleClose}
                          onClick={(event) => {
                            handleClose(event);
                            if (item.txt === "Logout") {
                              handleLogout();
                            }
                          }}
                          key={index}
                          sx={{ alignItems: "center" }}>
                          <Box sx={{ marginRight: "5px", marginTop: "5px" }}>{item.icon}</Box>
                          <Box>{item.txt}</Box>
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
