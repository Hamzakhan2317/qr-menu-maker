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
  const images = [
    brandImageOne,
    brandImageTwo,
    brandImageThree,
    brandImageFour,
    brandImageFive,
    brandImageSix,
    brandImageSeven,
    brandImageEight,
    brandImageNine,
    brandImageOne,
    brandImageTwo,
    brandImageThree,
    brandImageFour,
    brandImageFive,
    brandImageSix,
    brandImageSeven,
    brandImageEight,
    brandImageNine,
  ];
  return (
    <Box sx={brandSectionContainer}>
      <marquee direction="left" scrollAmount="5">
        <Box sx={{ display: "flex" }}>

          {images.map((img, ind)=>(
          <Box sx={branSectionImageBoxStyle} key={ind}>
          <Image
            src={img}
            alt="img "
            style={branSectionImageStyle}
          />
        </Box>
          ))}
         
        </Box>
      </marquee>
    </Box>
  );
};

export default BrandSection;
