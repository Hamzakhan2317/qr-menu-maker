import { servicesCardDetails } from "@/public/assets/static";
import { iconStyles,servicesBgContainer, servicesCardStyles, servicesBgImageStyle , } from "@/styles/ServicesSectionStyling/ServciesSectionStyling";
import CheckIcon from '@mui/icons-material/Check';
import { Box, Card, Container, Grid, Typography } from "@mui/material";

const ServicesSection = () => {
    return (
        <Container maxWidth={"xl"} >
            <Box sx={servicesBgContainer}>
                <Box sx={servicesBgImageStyle}>
                    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Grid item lg={10} md={11}>
                            <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", height: "100%" }}>
                                <Card sx={servicesCardStyles}>
                                    {
                                        servicesCardDetails?.map(({ heading, text }, ind) => (
                                            <Box key={ind} sx={{
                                                display: "flex", justifyContent: "center", alignItems: "start", mt: "30px",
                                            }}>
                                                <Box sx={iconStyles}>
                                                    <CheckIcon sx={{ color: "white", fontWeight: "600", fontSize: "38px" }} />
                                                </Box>
                                                <Box sx={{ marginLeft: "15px" }}>
                                                    <Typography sx={{
                                                        color: "#111827",
                                                        fontSize: "1.5rem",
                                                        lineHeight: "2rem",
                                                        fontWeight: "700"
                                                    }}>
                                                        {heading}
                                                    </Typography>
                                                    <Typography sx={{
                                                        color: "#1f2937",
                                                        fontSize: "1.05rem",
                                                        lineHeight: "1.45rem",
                                                        fontWeight: "400"
                                                    }}>
                                                        {text}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))
                                    }
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                }}>
                    <Box sx={{
                        display: {
                            sm: "block",
                            lg: "none",
                            md: "none"
                        }
                    }}>
                        {
                            servicesCardDetails?.map(({ heading, text }, ind) => (
                                <Box key={ind} sx={{
                                    display: "flex", justifyContent: "start", alignItems: "start", mt: "30px",
                                    flexDirection: {
                                        xs: "column",
                                        sm: "row"
                                    }

                                }}>
                                    <Box sx={iconStyles}>
                                        <CheckIcon sx={{ color: "white", fontWeight: "600", fontSize: "38px" }} />
                                    </Box>
                                    <Box sx={{
                                        marginLeft: {
                                            xs: "0px",
                                            sm: "15px",
                                        }
                                    }}>
                                        <Typography sx={{
                                            color: "#111827",
                                            fontSize: "1.5rem",
                                            lineHeight: "2rem",
                                            fontWeight: "700"
                                        }}>
                                            {heading}
                                        </Typography>
                                        <Typography sx={{
                                            color: "#1f2937",
                                            fontSize: "1.05rem",
                                            lineHeight: "1.45rem",
                                            fontWeight: "400"
                                        }}>
                                            {text}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default ServicesSection;