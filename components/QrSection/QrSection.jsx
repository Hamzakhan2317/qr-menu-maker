import { ButtonGroupStyles, mainSectionParagraphStyle, mainSectionTextStyle } from '@/styles/MainSectionStyles/MainSectionStyles';
import { QrSectionWrapper } from '@/styles/QrSectionStyles/QrSectionStyles';
import { createCustomTheme } from '@/styles/theme';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import ButtonComp from "../../components/ui/button";
import qrImage from "../../public/assets/images/qrimage.webp";



const QrSection = () => {
    const theme = createCustomTheme()
    return (
        <Box sx={QrSectionWrapper}>
            <Container maxWidth="xl">
                <Grid container spacing={3} sx={{ height: "100%" }}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItemsCenter: "center", flexDirection: "column", height: "100%" }}>
                            <Box sx={ButtonGroupStyles}>
                                <Box>
                                    <ButtonComp height="22px" marginTop={"0px"} borderRadius={"3rem"} fontSize={"12px"} text={"New Product"} color='#fff' backgroundColor={"#8338ec"} padding='4px 12px' />
                                </Box>
                                <Box sx={{ marginLeft: "10px" }}>
                                    <ButtonComp boxShadow="none" height="22px" marginTop={"0px"} fontWeight={500} borderRadius={"3rem"} fontSize={"12px"} text={"See Reservations! >"} color='#6b7280' backgroundColor={"#fff"} padding='4px 12px' />
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={mainSectionTextStyle}>
                                    A Single QR Code for Simplified and Fast Order & Pay
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={mainSectionParagraphStyle}>
                                    Streamline Your Business with Unmatched Speed: Create Menus, Collect Orders, and Manage Payments Effortlessly - A Hassle-Free Solution for Your Success!                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Box sx={{
                                    width: { xs: "100%", lg: "auto", sm: "auto" }
                                }}>
                                    <ButtonComp sx={{
                                        width: {
                                            xs: "100%"
                                        },
                                        height: {
                                            xs: "50px"
                                        },
                                        marginTop: {
                                            sm: "0px"
                                        }

                                    }} marginTop={"15px"} borderRadius={"10px"} fontWeight={"500"} fontSize={"16px"} text={"Try for Free"} color='#fff'
                                        backgroundColor={theme.palette.secondary.main} padding='28px 45px' />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{
                            width: {
                                lg: "500px",
                                xl: "500px",
                                sm: "500px",
                            },
                            height: {
                                lg: "500px",
                                xl: "500px",
                                sm: "500px",
                            }
                        }}>
                            <Image src={qrImage} style={{
                                width: "100%",
                                height: "100%"
                            }} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default QrSection;
