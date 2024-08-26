import { imageSectionImageStyling, imagesHeadingTextStyles, ImagesSectionWrapper, imageTextStyles, numberTextStyles } from '@/styles/ImageSectionStyles/ImageSectionStyles';
import { createCustomTheme } from '@/styles/theme';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import imgSection1 from "../../public/assets/images/imgSection1.webp";
const ImagesSection = () => {
    const theme = createCustomTheme()
    return (
        <Box sx={ImagesSectionWrapper}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={imageSectionImageStyling}>
                                <Image src={imgSection1} style={{ width: "100%", height: "100%" }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography sx={imageTextStyles}>
                                    Some numbers that matter
                                </Typography>
                            </Box>
                            <Grid container spacing={2}>
                                <Grid item lg={6} sm={6} xs={6}>
                                    <Box sx={{
                                        mb: "20px",
                                        textAlign: "center"
                                    }}>
                                        <Typography sx={numberTextStyles}>
                                            0%
                                        </Typography>
                                        <Typography sx={imagesHeadingTextStyles}>
                                            Commission Rate
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} sm={6} xs={6}>
                                    <Box sx={{
                                        mb: "20px",
                                        textAlign: "center"
                                    }}>
                                        <Typography sx={numberTextStyles}>
                                            +30 %
                                        </Typography>
                                        <Typography sx={imagesHeadingTextStyles}>
                                            Check Size
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} sm={6} xs={6}>
                                    <Box sx={{
                                        textAlign: "center"
                                    }}>
                                        <Typography sx={numberTextStyles}>
                                            -25%
                                        </Typography>
                                        <Typography sx={imagesHeadingTextStyles}>
                                            Labor Costs
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} sm={6} xs={6}>
                                    <Box sx={{
                                        textAlign: "center"
                                    }}>
                                        <Typography sx={numberTextStyles}>
                                            4x
                                        </Typography>
                                        <Typography sx={imagesHeadingTextStyles}>
                                            Conversion Rate
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    );
};

export default ImagesSection;
