import { displaySectionTextHeadingStyles, displaySectionTextStyles, displaySectionWrapper, tabSectionImageStyles } from "@/styles/TabSectionStyles/TabSectionStyles";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import displayImage from "../../../public/assets/images/tab1image.webp";
import ButtonComp from "@/components/ui/button";

const DisplayScreen = () => {
    return (
        <Box sx={displaySectionWrapper}>
            <Grid container
                spacing={2} sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: {
                        xs: "column-reverse",
                        sm: "column-reverse",
                        lg: "row"
                    },
                }}>
                <Grid item lg={6} sm={12} xs={12}>
                    <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <Box sx={{ width: "100%", mb: "20px" }}>
                            <Typography sx={displaySectionTextHeadingStyles}>
                                Transform Your Guests’ Experience
                            </Typography>
                            <Typography sx={displaySectionTextStyles}>
                                Enhance the visual appeal of your restaurant with our exquisite and fully customizable menu solutions. Create a delightful dining experience that excites your diners and brings your culinary vision and brand to life
                            </Typography>
                        </Box>
                        <Box sx={{ width: "100%" }}>
                            <Typography sx={displaySectionTextHeadingStyles}>
                                Promote Guest Well-Being and Drive Value
                            </Typography>
                            <Typography sx={displaySectionTextStyles}>
                                You can take further steps to protect your guests using FineDine. Provide them with allergen, calorie, and nutritional information for each dish to assist them in choosing safely. Combine aesthetics with information to drive up to 40% in order value.
                            </Typography>

                        </Box>
                        <Box sx={{ width: "100%", display: "flex", my: "20px", flexWrap: "wrap" }}>
                            <Box sx={{
                                marginRight: {
                                    lg: "15px",
                                    xs: "0px"
                                },
                                marginBottom: {
                                    xs: "10px",
                                    lg: "0",
                                    md: "0px",
                                    sx: "0px"
                                }
                            }}>
                                <ButtonComp marginTop={"0px"} borderRadius={"8px"} border={"1px solid #e6034b"} fontWeight={"500"}
                                    fontSize={"16px"} text={"Dine-in QR Menu →"} boxShadow={"none"} color='#e6034b' backgroundColor={"#fff"} padding='25px 19px' />
                            </Box>
                            <Box>
                                <ButtonComp marginTop={"0px"} borderRadius={"8px"} border={"1px solid #e6034b"} fontWeight={"500"} fontSize={"16px"} text={"Dine-in Tablet Menu →"} boxShadow={"none"} color='#e6034b' backgroundColor={"#fff"} padding='25px 19px' />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={6} xs={12} sm={12} sx={{ height: "100%" }}>
                    <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", }}>
                        <Box sx={tabSectionImageStyles}>
                            <Image
                                src={displayImage}
                                alt="Display Image"
                                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default DisplayScreen;