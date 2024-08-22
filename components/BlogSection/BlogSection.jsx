import { blogCardData } from "@/public/assets/static";
import { blogCardStyles, blogContainerStyles, blogHeadingStyles, blogSubHeadingStyles, cardContentStyles, cardTextStyling } from "@/styles/FeatureSectionStyling/FeatureSectionStyling";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const BlogSection = () => {
    return (
        <Container maxWidth="xl" sx={blogContainerStyles}>
            <Box sx={{
                padding: "20px 0px"
            }}>
                <Box sx={{
                    mb: "100px", padding: {
                        xs: "22px", lg: "0"
                    }
                }}>
                    <Typography sx={blogHeadingStyles}>
                        Latest Articles
                    </Typography >
                    <Typography sx={blogSubHeadingStyles}>
                        Explore trends, tips, and strategies to elevate your restaurant’s success.
                    </Typography>
                </Box>
                <Grid container spacing={4} sx={{ height: "100%" }}>
                    {blogCardData?.map(({ cardData, date, time, cardImage, altText }, ind) => (
                        <Grid item lg={4} xs={12} key={ind}>
                            <Card sx={blogCardStyles}>
                                <Box>
                                    <Image src={cardImage} alt={altText} style={{ width: "100%", height: "250px", objectFit: "cover", objectPosition: "center" }} />
                                </Box>
                                <CardContent sx={cardContentStyles}>
                                    <Box sx={{ height: "100%", minHeight: "150px" }}>
                                        <Typography variant="body2" color="#7632D4" fontWeight={"500"} component="p">
                                            Blog
                                        </Typography>
                                        <Typography sx={cardTextStyling}>
                                            {cardData}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: "40px", display: "flex", flex: 1 }}>
                                        <Typography variant="caption" color="textSecondary" >
                                            {date} |
                                        </Typography>
                                        <Typography variant="caption" sx={{ paddingLeft: "5px" }}>
                                            {time}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container >
    );
}

export default BlogSection;