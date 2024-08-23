import { marqueeCardDetails } from "@/public/assets/static";
import { marqueeCards } from "@/styles/VidepSectionStyling/VidepSectionStyling";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";

const CardSection = () => {
    return (
        <Box sx={{ color: "#fff", width: "100%", display: "flex" }}>
            <marquee >
                <Box sx={{ display: "flex", width: "100%" }}>
                    {
                        marqueeCardDetails?.map(({ text, starImage, ceoImage, ceoName, companyName }, ind) => (
                            <Box sx={{ display: 'flex', marginRight: "20px" }} key={ind}>
                                <Card sx={{ ...marqueeCards }}>
                                    <Box>
                                        <Box sx={{ mt: "10px" }}>
                                            <Image src={starImage} alt="starImage" style={{ width: "30px", height: "30px" }} />
                                            <Image src={starImage} alt="starImage" style={{ width: "30px", height: "30px" }} />
                                            <Image src={starImage} alt="starImage" style={{ width: "30px", height: "30px" }} />
                                            <Image src={starImage} alt="starImage" style={{ width: "30px", height: "30px" }} />
                                            <Image src={starImage} alt="starImage" style={{ width: "30px", height: "30px" }} />
                                        </Box>
                                        <Typography sx={{ lineHeight: "1.5rem", fontSize: "1rem", margin: "20px 0px" }}>
                                            {text}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <Box>
                                            <Image  alt="" src={ceoImage} style={{ width: "60px", height: "60px", display: ceoImage ? "block" : "none" }} />
                                        </Box>
                                        <Box sx={{ marginLeft: "10px" }}>
                                            <Typography sx={{ fontSize: "14px" }}>
                                                {ceoName}
                                            </Typography>
                                            <Typography sx={{ fontSize: "14px" }}>
                                                {companyName}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </Box>
                        ))
                    }
                </Box >
            </marquee >
        </Box >
    );
}

export default CardSection;