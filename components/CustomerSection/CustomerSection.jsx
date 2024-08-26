import { customerHeadingStyles, customerSectionWrapper, customerTextStyles } from '@/styles/CustomerSectionStyles/CustomerSectionStyles';
import { createCustomTheme } from '@/styles/theme';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import customerImage from "../../public/assets/images/happyguestimage.webp";

const CustomerSection = () => {
    const theme = createCustomTheme();

    return (
        <Box sx={customerSectionWrapper}>
            <Container maxWidth="xl">
                <Grid container spacing={3} sx={{
                    height: "100%", flexDirection: {
                        xs: "column-reverse",
                        sm: "row",
                        lg: "row"
                    },
                }}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "start", // Corrected typo
                            flexDirection: "column",
                            height: "100%"
                        }}>
                            <Typography sx={customerHeadingStyles}>
                                Great Design, Happy Guests
                            </Typography>
                            <Typography sx={customerTextStyles}>
                                FineDine Dine-in QR Menu offers a unique experience and easy navigation to your customers. They can easily check out your menu, look at your high-quality visuals and detailed descriptions, and get information such as calories, nutrition, and allergen warnings. A top-notch experience compared to traditional paper menus or low-quality PDF menus guests hate.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "center"
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: {
                                    xs: "300px",
                                    lg: "450px",
                                    sm: "250px",
                                    md: "500px",
                                },
                                height: {
                                    xs: "25 0px",
                                    lg: "450px",
                                    sm: "250px",
                                    md: "500px",

                                }
                            }}>
                                <Image src={customerImage} style={{
                                    width: "100%",
                                    height: "100%"
                                }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CustomerSection;
