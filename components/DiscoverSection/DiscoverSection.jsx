import { DiscoverBtnStyles, discoverContainerStyles, discoverImageStyles, discoverTextStyles, discoverTextWrapper } from "@/styles/DiscoverSectionStyling/DiscoverSectionStyling"
import { Box, Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import discoverImg from "../../public/assets/images/discoverimage.webp"
import ButtonComp from "../../components/ui/button"
const DiscoverSection = () => {
    return (
        <Container maxWidth="xl" sx={discoverContainerStyles}>
            <Grid container>
                <Grid item lg={6}>
                    <Box sx={discoverTextWrapper}>
                        <Box>
                            <Typography sx={discoverTextStyles}>
                                Discover how FineDine fits your business
                            </Typography>
                        </Box>
                        <Box sx={DiscoverBtnStyles}>
                            <ButtonComp fontWeight={"500"} marginTop={"0px"} borderRadius={"12px"} fontSize={"16px"} text={"Try Findine"} color='#fff' backgroundColor={"#E6034B"} padding='25px 30px' />
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={6}>
                    <Box>
                        <Image src={discoverImg} style={discoverImageStyles} />
                    </Box>
                </Grid>
            </Grid>
        </Container >
    )
}

export default DiscoverSection