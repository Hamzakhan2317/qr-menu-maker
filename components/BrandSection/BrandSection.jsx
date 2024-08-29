import {
  brandSectionContainer,
  branSectionImageBoxStyle,
  branSectionImageStyle,
} from "@/styles/BrandSectionStyling/BrandSectionStyling";
import { Box } from "@mui/material";
import Image from "next/image";
import brandImageOne from "../../public/assets/images/1.webp";
import brandImageTwo from "../../public/assets/images/2.webp";
import brandImageThree from "../../public/assets/images/3.webp";
import brandImageFour from "../../public/assets/images/4.webp";
import brandImageFive from "../../public/assets/images/5.webp";
import brandImageSix from "../../public/assets/images/6.webp";
import brandImageSeven from "../../public/assets/images/7.webp";
import brandImageEight from "../../public/assets/images/8.webp";
import brandImageNine from "../../public/assets/images/9.webp";
const BrandSection = () => {
  return (
    <Box sx={brandSectionContainer}>
      <marquee direction="left" scrollAmount="5">
        <Box sx={{ display: "flex" }}>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageOne}
              alt="img1 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageTwo}
              alt="img2 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageThree}
              alt="img3 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageFour}
              alt="img4 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageFive}
              alt="img5 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageSix}
              alt="img6 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageSeven}
              alt="img7 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageEight}
              alt="img8 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageNine}
              alt="img9 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageOne}
              alt="img1 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageTwo}
              alt="img2 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageThree}
              alt="img3 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageFour}
              alt="img4 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageFive}
              alt="img5 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageSix}
              alt="img6 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageSeven}
              alt="img7 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageEight}
              alt="img8 "
              style={branSectionImageStyle}
            />
          </Box>
          <Box sx={branSectionImageBoxStyle}>
            <Image
              src={brandImageNine}
              alt="img9 "
              style={branSectionImageStyle}
            />
          </Box>
        </Box>
      </marquee>
    </Box>
  );
};

export default BrandSection;
