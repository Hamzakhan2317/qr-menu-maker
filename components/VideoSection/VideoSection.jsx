import { videoCaptionStyles, videoContainer, videoHeadingBoxStyles, videoSectionContainer, videoSectionHeadingStyles, videoTextContainer, videoTextStyles } from "@/styles/VidepSectionStyling/VidepSectionStyling";
import { Box, Container, Grid, Typography } from "@mui/material";
import CardSection from "./CardSection";

const VideoSection = () => {
    return (
        <Box sx={videoSectionContainer}>
            <Box sx={videoHeadingBoxStyles}>
                <Typography sx={videoSectionHeadingStyles}>
                    Discover the FineDine Difference: Stories from Our Partners
                </Typography>
            </Box>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item lg={7} sm={12}>
                        <Box sx={videoContainer}>
                            <iframe
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="Watch How Cafe Sanuki in Las Vegas Digitized Their Menu Operations with FineDine"
                                width="100%"
                                height="410"
                                src="https://www.youtube.com/embed/LrWMfkUypzU?accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;&amp;autoplay=1&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.finedinemenu.com&amp;widgetid=1"
                                id="widget2"
                                data-gtm-yt-inspected-15="true"
                                style={{ border: "none" }}
                            ></iframe>
                        </Box>
                    </Grid>
                    <Grid item lg={5}>
                        <Box sx={videoTextContainer}>
                            <Typography sx={videoTextStyles}>
                                Our sales and tips increased by 20%-30% using FineDine. Some days I don't understand how I got through without FineDine.
                            </Typography>
                            <Typography sx={videoCaptionStyles}>
                                Chris Gia
                            </Typography>
                            <Typography sx={videoCaptionStyles}>
                                Cafe Sanuki, Manager
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
        </Box>
    );
};

export default VideoSection;