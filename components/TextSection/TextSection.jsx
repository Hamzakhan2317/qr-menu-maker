/* eslint-disable react/no-unknown-property */
import { marqueeTextClass } from "@/styles/BrandSectionStyling/BrandSectionStyling";
import { textSectionHeadingStyles } from "@/styles/TextSectionStyles/TextSectionStyles";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const TextSection = () => {
  const t = useTranslations("Home.TextSection");

  return (
    <Box sx={marqueeTextClass}>
      <Box>
        <marquee scrollamount="20">
          <Typography sx={textSectionHeadingStyles}>{t("Title")}</Typography>
        </marquee>
      </Box>
    </Box>
  );
};

export default TextSection;
