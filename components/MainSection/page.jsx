import { ButtonGroupStyles, mainSectionParagraphStyle, mainSectionTextStyle, mainSectionWrapper } from '@/styles/MainSectionStyles/MainSectionStyles';
import { createCustomTheme } from '@/styles/theme';
import { Box, Container, Grid, Typography } from '@mui/material';
import ButtonComp from "../../components/ui/button"
const MainSection = () => {
    const theme = createCustomTheme()
    return (
        <Box sx={mainSectionWrapper}>
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
                                    Next-gen restaurant management platform at your fingertips
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={mainSectionParagraphStyle}>
                                    From speedy payments to smooth reservations, FineDine is your all-in-one restaurant management solution.
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
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

                                    }} marginTop={"15px"} borderRadius={"10px"} fontWeight={"500"} fontSize={"16px"} text={"Start Your Trial"} color='#fff'
                                        backgroundColor={theme.palette.secondary.main} />
                                </Box>
                                <Box sx={{
                                    ml: {
                                        xs: "0px",
                                        lg: 1.4,
                                        sm: 1.4
                                    },
                                    mt: {
                                        xs: "10px",
                                        lg: "0",
                                        sm: "0px"
                                    },
                                    width: { xs: "100%", lg: "auto", sm: "auto" }

                                }}>
                                    <ButtonComp
                                        sx={{
                                            width: {
                                                xs: "100%"
                                            },
                                            height: {
                                                xs: "50px"
                                            },
                                            marginTop: {
                                                sm: "0px"
                                            }

                                        }}
                                        border={`1px solid ${theme.palette.secondary.main}`} borderRadius={"10px"} fontWeight={"500"} fontSize={"16px"} text={"Book Your Demo"}
                                        color={theme.palette.secondary.main}
                                        backgroundColor={"#fff"} />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{
                            display: {
                                xs: "none",
                                sm: "block",
                                md: "block",
                                lg: "block",

                            }
                        }}>
                            <video
                                src="/assets/video/samplevideo.mp4"
                                autoPlay
                                muted
                                loop
                                style={{ width: "100%", height: "560px" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MainSection;