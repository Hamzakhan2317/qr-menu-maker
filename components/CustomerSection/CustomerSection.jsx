import {
  customerHeadingStyles,
  customerSectionWrapper,
  customerTextStyles,
} from "@/styles/CustomerSectionStyles/CustomerSectionStyles";
import { createCustomTheme } from "@/styles/theme";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import customerImage from "../../public/assets/images/happyguestimage.webp";

const CustomerSection = () => {
  const t = useTranslations("Home.Customer");

  return (
    <Box sx={customerSectionWrapper}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
          sx={{
            height: "100%",
            flexDirection: {
              xs: "column-reverse",
              sm: "row",
              lg: "row",
            },
          }}
        >
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start", // Corrected typo
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography sx={customerHeadingStyles}>{t("Title")}</Typography>
              <Typography sx={customerTextStyles}>{t("Subtitle")}</Typography>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: {
                    xs: "300px",
                    lg: "450px",
                    sm: "250px",
                    md: "500px",
                  },
                  height: {
                    xs: "25 0px",
                    lg: "450px",
                    sm: "250px",
                    md: "500px",
                  },
                }}
              >
                <Image
                  src={customerImage}
                  alt="customerImage"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerSection;
