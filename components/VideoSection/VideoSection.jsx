import { videoCaptionStyles, videoContainer, videoHeadingBoxStyles, videoSectionContainer, videoSectionHeadingStyles, videoTextContainer, videoTextStyles } from "@/styles/VidepSectionStyling/VidepSectionStyling";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import CardSection from "./CardSection";

const VideoSection = () => {
    const t = useTranslations("Home.VideoSection");
    return (
        <Box sx={videoSectionContainer}>
            <Box sx={videoHeadingBoxStyles}>
                <Typography sx={videoSectionHeadingStyles}>
                    {t("Title")}
                </Typography>
            </Box>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item lg={7} sm={12} md={8}>
                        <Box sx={videoContainer}>
                            <iframe
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="Watch How Cafe Sanuki in Las Vegas Digitized Their Menu Operations with FineDine"
                                width="100%"
                                height="410"
                                src="https://www.youtube.com/embed/LrWMfkUypzU?playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.finedinemenu.com&widgetid=1"
                                id="widget2"
                                data-gtm-yt-inspected-15="true"
                                style={{ border: "none" }}
                            ></iframe>

                        </Box>
                    </Grid>
                    <Grid item lg={5} md={4}>
                        <Box sx={videoTextContainer}>
                            <Typography sx={videoTextStyles}>
                                {t("VideoText1")}
                            </Typography>
                            <Typography sx={videoCaptionStyles}>
                                {t("OwnerName")}
                            </Typography>
                            <Typography sx={videoCaptionStyles}>
                                {t("CompayName")}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{
                mt: "90px", display: {
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                    xxl: "block",
                    xs: "none"
                }
            }}>
                <CardSection />
            </Box>
        </Box >
    );
};

export default VideoSection;