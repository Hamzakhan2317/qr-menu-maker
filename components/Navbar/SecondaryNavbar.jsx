"use client";
import { Link, usePathname, useRouter } from "@/navigation";
// import LogoSvg from "@/public/assets/svg/logoSvg";
import { createCustomTheme } from "@/styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, MenuItem, Select, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import trFlag from "../../public/assets/images/turkeyflag.jpg";
import usaflag from "../../public/assets/images/usaflag.png";
import logo from "../../public/assets/images/logo.png";

function SecondaryNavbar(props) {
  const theme = createCustomTheme();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  // const t = useTranslations("Home.NavSection");

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  const handleLocaleChange = (newLocale) => {
    if (newLocale !== locale && window) {
      router.push(router?.pathname, { locale: newLocale });
    }
  };

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
        }}>
        <Link href="/" style={{ width: "100%" }}>
          {/* <LogoSvg width="140" height="38" /> */}
          <Image
            alt="logo"
            src={logo}
            style={{
              width: "140px",
              height: "38px",
            }}
          />
        </Link>
        <Box
          sx={{
            flexGrow: 1,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}>
          <IconButton color="inherit" sx={{ display: { sm: "none" } }}>
            <CloseIcon style={{ color: theme.palette.primary.main }} />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ m: "10px" }}>
        <Select
          value={locale}
          placeholder="lng"
          onChange={handleLocaleChange}
          sx={{
            height: "50px",
            padding: "5px",
            width: "100%",
            ".MuiSvgIcon-root": {
              display: "none",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ccc",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ccc",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ccc",
            },
          }}>
          <MenuItem value={"en"}>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "16px",
                color: "#000",
                fontFamily: "Nunito Sans",
              }}
              href={pathname}
              locale="en">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Image
                  alt="usaflag"
                  src={usaflag}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "3px",
                  }}
                />{" "}
                eng
              </Box>
            </Link>
          </MenuItem>
          <MenuItem value={"tr"}>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "16px",
                color: "#000",
                fontFamily: "Nunito Sans",
              }}
              href={pathname}
              locale="tr">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Image
                  alt="trFlag"
                  src={trFlag}
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "3px",
                    objectFit: "contain",
                  }}
                />{" "}
                tur
              </Box>
            </Link>
          </MenuItem>
        </Select>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

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
        }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid container justifyContent={"space-between"}>
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
                }}>
                <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                  {/* <LogoSvg width="158px" height="36" /> */}
                  <Image
                    alt="logo"
                    src={logo}
                    style={{
                      width: "140px",
                      height: "38px",
                    }}
                  />
                </Link>
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
                }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}>
                  <Box
                    sx={{
                      width: "100%",
                      display: {
                        sm: "none",
                        lg: "flex",
                        xs: "none",
                      },
                    }}>
                    <Box sx={{ ml: "10px" }}>
                      <Select
                        value={locale}
                        placeholder="lng"
                        onChange={handleLocaleChange}
                        sx={{
                          height: "50px",
                          padding: "5px",
                          ".MuiSvgIcon-root": {
                            display: "none",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ccc",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ccc",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ccc",
                          },
                        }}>
                        <MenuItem value={"en"}>
                          <Link
                            style={{
                              textDecoration: "none",
                              fontSize: "16px",
                              color: "#000",
                              fontFamily: "Nunito Sans",
                            }}
                            href={pathname}
                            locale="en">
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Image
                                alt="usaflag"
                                src={usaflag}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  marginRight: "3px",
                                }}
                              />{" "}
                              eng
                            </Box>
                          </Link>
                        </MenuItem>
                        <MenuItem value={"tr"}>
                          <Link
                            style={{
                              textDecoration: "none",
                              fontSize: "16px",
                              color: "#000",
                              fontFamily: "Nunito Sans",
                            }}
                            href={pathname}
                            locale="tr">
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Image
                                alt="trFlag"
                                src={trFlag}
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  marginRight: "3px",
                                  objectFit: "contain",
                                }}
                              />{" "}
                              tur
                            </Box>
                          </Link>
                        </MenuItem>
                      </Select>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { sm: "block", md: "block", lg: "none" } }}>
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
          }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default SecondaryNavbar;
