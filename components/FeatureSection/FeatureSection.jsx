import { featureCardData } from '@/public/assets/static';
import { FeatureCard, featureCardImageStyles, featureClassBg, featureSectionHeadingStyles, featureSectionTextStyles, headingStyles, headingWrapper, textWrapperStyles } from '@/styles/FeatureSectionStyling/FeatureSectionStyling';
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const FeatureSection = () => {
    console.log("featureCardData", featureCardData);

    return (
        <Box sx={featureClassBg}>
            <Container maxWidth={"xl"}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <Box sx={headingWrapper}>
                        <Typography sx={headingStyles}>
                            Next-Gen Features to Elevate Your Restaurant
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Grid container spacing={4}>
                        {
                            featureCardData?.map(({ heading, columns, text, cardImage, imageWidth, bottom, imageHeight, left }, index) => (
                                <Grid
                                    key={index}
                                    item
                                    lg={columns}
                                    sm={6}                                >
                                    <Box>
                                        <Card sx={FeatureCard}>
                                            <Box >
                                                <Box>
                                                    <Typography sx={featureSectionHeadingStyles}>
                                                        {heading}
                                                    </Typography>
                                                </Box>
                                                <Box sx={textWrapperStyles}>
                                                    <Typography sx={featureSectionTextStyles}>
                                                        {text}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ position: "absolute", bottom: { bottom }, left: { left } }}>
                                                <Box sx={featureCardImageStyles}>
                                                    <Image src={cardImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid >
                </Box >
            </Container>
        </Box >
    );
};

export default FeatureSection;