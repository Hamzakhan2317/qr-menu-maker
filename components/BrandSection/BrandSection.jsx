import { brandSectionContainer } from "@/styles/BrandSectionStyling/BrandSectionStyling"
import { Box } from "@mui/material"
import Image from "next/image"
import brandImageOne from "../../public/assets/images/1.webp"
import brandImageTwo from "../../public/assets/images/2.webp"
import brandImageThree from "../../public/assets/images/3.webp"
import brandImageFour from "../../public/assets/images/4.webp"
import brandImageFive from "../../public/assets/images/5.webp"
import brandImageSix from "../../public/assets/images/6.webp"
import brandImageSeven from "../../public/assets/images/7.webp"
import brandImageEight from "../../public/assets/images/8.webp"
import brandImageNine from "../../public/assets/images/9.webp"
const BrandSection = () => {
    return (
        <Box sx={brandSectionContainer}>
            <marquee direction="left" scrollAmount="5">
                <Box sx={{ display: "flex" }}>
                    <Box sx={{ marginRight: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image src={brandImageOne} alt="img1 " style={{ width: "178px", height: "60px", objectFit: "contain" }} />
                    </Box>
                    <Box sx={{ marginRight: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image src={brandImageTwo} alt="img2 " style={{ width: "178px", height: "60px", objectFit: "contain" }} />
                    </Box>
                    <Box sx={{ marginRight: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image src={brandImageThree} alt="img3 " style={{ width: "178px", height: "60px", objectFit: "contain" }} />
                    </Box>
                    <Box sx={{ marginRight: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image src={brandImageFour} alt="img4 " style={{ width: "178px", height: "60px", objectFit: "contain" }} />
                    </Box>
                    <Box sx={{ marginRight: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image src={brandImageFive} alt="img5 " style={{ width: "178px", height: "60px", objectFit: "contain" }} />
                    </Box>
                    <Box sx={{ marginRight: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image src={brandImageSix} alt="img6 " style={{ width: "178px", height: "60px", objectFit: "contain" }} />
                    </Box>
                    <Box sx={{ marginRight: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image src={brandImageSeven} alt="img7 " style={{ width: "178px", height: "60px", objectFit: "contain" }} />
                    </Box>
                    <Box sx={{ marginRight: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image src={brandImageEight} alt="img8 " style={{ width: "178px", height: "60px", objectFit: "contain" }} />
                    </Box>
                    <Box sx={{ marginRight: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image src={brandImageNine} alt="img9 " style={{ width: "178px", height: "60px", objectFit: "contain" }} />
                    </Box>

                </Box>
            </marquee >
        </Box >
    )
}

export default BrandSection