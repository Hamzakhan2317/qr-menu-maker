import ButtonComp from "@/components/ui/button";
import { displaySectionTextHeadingStyles, displaySectionTextStyles, displaySectionWrapper, tabSectionImageStyles } from "@/styles/TabSectionStyles/TabSectionStyles";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import marketImage from "../../../public/assets/images/marketImage.webp";

const MarketScreen = () => {
    return (
        <Box sx={displaySectionWrapper}>
            <Grid container spacing={2} sx={{ height: "100%" }}>
                <Grid item lg={6}>
                    <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <Box sx={{ width: "100%", mb: "20px" }}>
                            <Typography sx={displaySectionTextHeadingStyles}>
                                Boost Your Restaurant&apos;s Success with FineDine&apos;s Marketing Tools
                            </Typography>
                            <Typography sx={displaySectionTextStyles}>
                                Supercharge your restaurant&apos;s growth and customer engagement with a comprehensive suite of marketing tools designed to empower your business and drive success from every angle. Let AI do the heavy lifting for you with FineDine&apos;s advanced recommendation engine, or maximize your marketing impact with enticing coupons and discounts.                            </Typography>
                        </Box>
                        <Box sx={{ width: "100%" }}>
                            <Box sx={{ marginRight: "10px" }}>
                                <ButtonComp marginTop={"0px"} borderRadius={"8px"} border={"1px solid #e6034b"} fontWeight={"500"} fontSize={"16px"} text={"Campaigns →"} boxShadow={"none"} color='#e6034b' backgroundColor={"#fff"} padding='25px 19px' />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={6} sx={{ height: "100%" }}>
                    <Box sx={tabSectionImageStyles}>
                        <Image
                            src={marketImage}
                            alt="Display Image"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default MarketScreen;