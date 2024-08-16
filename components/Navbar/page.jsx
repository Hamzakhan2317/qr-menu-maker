"use client";
import LogoSvg from '@/public/assets/svg/logoSvg';
import { createCustomTheme } from '@/styles/theme';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import React from 'react';
import ButtonComp from '../LoadingSkeleton/ui/button';

const drawerWidth = "100%";
const navItems = ['Home', 'About', 'Contact'];

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const theme = createCustomTheme()
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'start' }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px" }}>
                <Link href={""} style={{ width: "100%" }}>
                    <LogoSvg width="140" height="38" />
                </Link>
                <Box sx={{ flexGrow: 1, alignItems: "center", display: "flex", justifyContent: "center" }}>
                    <IconButton
                        color="inherit"
                        sx={{ display: { sm: 'none' } }}
                    >
                        <CloseIcon style={{ color: theme.palette.primary.main }} />
                    </IconButton>
                </Box>
            </Box>
            <Divider />
            <List sx={{ mb: 1 }}>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'start' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Box sx={{ padding: "0px 16px" }}>
                    <ButtonComp backgroundColor={"#fff"} color="#e6034b" border="1px solid #e6034b" borderRadius={".5rem"} fontWeight="400" padding="18px 24px" width={"100%"} text={"Sign in"} />
                    <ButtonComp backgroundColor={"#e6034b "} color="#fff" borderRadius={".5rem"} fontWeight="400" padding="18px 24px" width={"100%"} text={"Get Started"} />
                </Box>
            </List>
        </Box >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" position='static' sx={{ background: "#fff", boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>
                <Toolbar>
                    <Box sx={{
                        display: "flex", justifyContent: {
                            xl: "start",
                            xs: "center",
                            sm: "start"
                        },
                        alignItems: "center", width: "100%", pt: "15px"
                    }}>
                        <Box sx={{
                            display: "flex", justifyContent: "space-between",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                            <Link href={"/home"} style={{
                                display: "flex", alignItems: "center"
                            }}>
                                <LogoSvg width='158px' height='36' />
                            </Link>
                            <Box sx={{ flexGrow: 1 }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ display: { sm: 'none' } }}
                                >
                                    <MenuIcon style={{ color: "#1f2937" }} />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: 'red', background: "#fff" }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    anchor={'top'}
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box >
    );
}

export default Navbar;
