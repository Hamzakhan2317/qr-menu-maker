"use client";
import LogoSvg from "@/public/assets/svg/logoSvg";
import { createCustomTheme } from "@/styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
// import Link from "next/link";
import { Link, usePathname, useRouter } from "@/navigation";
// import { useRouter } from "next/navigation";
import React from "react";
import ButtonComp from "../../components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact-us" },
];

function Navbar(props) {
  const theme = createCustomTheme();
  const router = useRouter();
  const pathname = usePathname()

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  // Set drawer width and anchor based on screen size
  const drawerWidth = isSm ? "100%" : isXs ? "100%" : "defaultWidth"; // Set defaultWidth to fit your design
  const drawerAnchor = isXs ? "top" : "top"; // Use 'right' for medium and larger screens
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "start" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 24px",
        }}
      >
        <Link href="/" style={{ width: "100%" }}>
          <LogoSvg width="140" height="38" />
        </Link>
        <Box
          sx={{
            flexGrow: 1,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton color="inherit" sx={{ display: { sm: "none" } }}>
            <CloseIcon style={{ color: theme.palette.primary.main }} />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <List sx={{ mb: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "start" }}
              component={Link}
              href={item.href}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Box sx={{ padding: "0px 16px" }}>
          <ButtonComp
            onClick={() => router.push("/login")}
            backgroundColor={"#fff"}
            color="#e6034b"
            border="1px solid #e6034b"
            borderRadius={".5rem"}
            fontWeight="400"
            padding="18px 24px"
            width={"100%"}
            text={"Sign in"}
          />
          <ButtonComp
            onClick={() => router.push("/register")}
            backgroundColor={"#e6034b"}
            color="#fff"
            borderRadius={".5rem"}
            fontWeight="400"
            padding="18px 24px"
            width={"100%"}
            text={"Get Started"}
          />
        </Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        sx={{
          background: "#fff",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
          padding: "15px 0px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid item lg={2} md={9} xs={12} sm={9}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: {
                    xs: "center",
                    sm: "start !important",
                  },
                  flexDirection: "column",
                  height: "100%",
                  paddingTop: {
                    xs: "20px",
                    lg: "0px",
                    md: "0px",
                    sm: "0px",
                  },
                }}
              >
                <Link
                  href="/"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <LogoSvg width="158px" height="36" />
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              lg={7}
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "block" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Link href={pathname} locale="en">
                  English
                </Link>
                <Link href={pathname} locale="tr">
                  turkish
                </Link>
                <Box>
                  {navItems.map((item) => (
                    <Link
                      href={item.href}
                      key={item.name}
                      style={{
                        textDecoration: "none",
                        color: "#111827",
                        background: "#fff",
                        margin: "0 10px",
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "end",
                  },
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: {
                        sm: "none",
                        lg: "flex",
                        xs: "none",
                      },
                    }}
                  >
                    <Box sx={{ marginRight: "10px" }}>
                      <ButtonComp
                        onClick={() => router.push("/login")}
                        marginTop={"0px"}
                        borderRadius={"8px"}
                        fontWeight={"500"}
                        fontSize={"15px"}
                        text={"Sign in"}
                        boxShadow={"none"}
                        color="#1f2937"
                        backgroundColor={"#fff"}
                        padding="22px 26px"
                      />
                    </Box>

                    <Box>
                      <ButtonComp
                        onClick={() => router.push("/register")}
                        marginTop={"0px"}
                        borderRadius={"8px"}
                        fontWeight={"500"}
                        fontSize={"15px"}
                        text={"Get Started"}
                        boxShadow={"none"}
                        color="#fff"
                        backgroundColor={"#e6034b"}
                        padding="22px 26px"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { sm: "block", md: "block", lg: "none" } }}
                  >
                    <MenuIcon style={{ color: "#1f2937" }} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor={drawerAnchor}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "block", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
