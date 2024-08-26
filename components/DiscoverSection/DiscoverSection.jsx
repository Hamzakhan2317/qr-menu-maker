import { DiscoverBtnStyles, discoverContainerStyles, discoverImageStyles, discoverTextStyles, discoverTextWrapper } from "@/styles/DiscoverSectionStyling/DiscoverSectionStyling"
import { Box, Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import ButtonComp from "../../components/ui/button"
import discoverImg from "../../public/assets/images/discoverimage.webp"
const DiscoverSection = () => {
    return (
        <Container maxWidth="xl" sx={discoverContainerStyles}>
            <Grid container>
                <Grid item lg={6} sm={12} md={6}>
                    <Box sx={discoverTextWrapper}>
                        <Box sx={{ width: "100%" }}>
                            <Typography sx={discoverTextStyles}>
                                Discover how FineDine fits your business
                            </Typography>
                        </Box>
                        <Box sx={DiscoverBtnStyles}>
                            <ButtonComp fontWeight={"500"} marginTop={"0px"} borderRadius={"12px"} fontSize={"16px"} text={"Try Findine"} color='#fff' backgroundColor={"#E6034B"} padding='25px 30px' />
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={6} xs={12} md={6} sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={discoverImageStyles}>
                        <Image alt="" src={discoverImg} style={{ width: "100%", height: "100%" }} />
                    </Box>
                </Grid>
            </Grid>
        </Container >
    )
}

export default DiscoverSection