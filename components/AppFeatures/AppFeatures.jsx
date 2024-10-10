"use client";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Container, Grid, Typography } from "@mui/material";
import appFeatureImg from "../../public/assets/images/appfeatureimg.webp";

import { getAppFeatureCardDetails } from "@/public/assets/static";
import {
  appFeatureHeadingStyles,
  appFeatureIconStyles,
  AppFeatureSectionContainer,
  appFeaturesTextStyles,
} from "@/styles/AppFeatureSectionStyles/AppFeatureSectionStyles";
import { useTranslations } from "next-intl";
import Image from "next/image";
const AppFeatureSection = () => {
  const t = useTranslations("Home.Appfeatures");
  const appfeatureCardDetails = getAppFeatureCardDetails(t);
  return (
    <Box sx={AppFeatureSectionContainer}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "center",
              }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: {
                    xs: "100%",
                    lg: "100%",
                    sm: "400px",
                    md: "430px",
                  },
                  height: {
                    xs: "100%",
                    lg: "100%",
                    sm: "400px",
                    md: "430px",
                  },
                }}>
                <Image
                  src={appFeatureImg}
                  alt="appFeatureImg"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              }}>
              <Box>
                {appfeatureCardDetails?.map(({ heading, text }, ind) => (
                  <Box
                    key={ind}
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                      mt: "30px",
                      borderRadius: "16px",
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                        xl: "row",
                        xxl: "row",
                      },
                    }}>
                    <Box sx={appFeatureIconStyles}>
                      <CheckIcon sx={{ color: "white", fontWeight: "600", fontSize: "25px" }} />
                    </Box>
                    <Box
                      sx={{
                        marginLeft: {
                          xs: "0px",
                          sm: "0px",
                          md: "15px",
                          lg: "15px",
                          xl: "15px",
                          xxl: "15px",
                        },
                      }}>
                      <Typography sx={appFeatureHeadingStyles}>{heading}</Typography>
                      <Typography sx={appFeaturesTextStyles}>{text}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppFeatureSection;
