"use client";

import BrandSection from "@/components/BrandSection/BrandSection.jsx";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ButtonComp from "@/components/ui/button";
import CustomHeading from "@/components/ui/CustomHeading";
import { useRouter } from "@/navigation";
import bannerSection from "@/public/assets/images/bannerSection.jpeg";
import appFeatureImg from "@/public/assets/images/about-us-image.jpg";
import { getOurServicesDetails, getwhyChooseDetails } from "@/public/assets/static";
import {
  aboutIconStyles,
  appFeatureHeadingStyles,
  // appFeatureIconStyles,
  appFeaturesTextStyles,
  bottomParagrphButtonStyle,
  bottomParagrphStyles,
} from "@/styles/AppFeatureSectionStyles/AppFeatureSectionStyles";
import { createCustomTheme } from "@/styles/theme";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutUs = () => {
  const theme = createCustomTheme();
  const router = useRouter();
  const t = useTranslations("About.OurServices");
  const OurServicesDetails = getOurServicesDetails(t);
  const at = useTranslations("About.CardsSectionHeading");
  const p = useTranslations("About.AboutUsParagraphs");
  const bp = useTranslations("About.BottomParagraph");
  const d = useTranslations("About.WhyChoose");
  const btn = useTranslations("About.BottomBanner");
  const WhyChooseDetails = getwhyChooseDetails(d);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100% " }}>
        <Navbar />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundImage: `url(${bannerSection.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            aspectRatio: "1320 / 250",
            height: { xs: "auto", sm: "auto", md: "250px" },
          }}></Box>

        <Container
          maxWidth="lg"
          sx={{
            my: "50px",
            minHeight: "60vh",
          }}>
          <Box sx={{ marginBottom: "40px" }}>
            <CustomHeading textAlign="center" text={at("Heading")} />
          </Box>

          <Grid container spacing={5}>
            <Grid item lg={6} md={6} sm={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: {
                      xs: "100%",
                      sm: "400px",
                      md: "430px",
                      lg: "100%",
                    },
                    height: {
                      xs: "100%",
                      sm: "400px",
                      md: "430px",
                      lg: "100%",
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
                  justifyContent: "center",
                  height: "100%",
                  gap: 2,
                }}>
                <Typography>{p("Paragraph1")}</Typography>
                <Typography>{p("Paragraph2")}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="lg" sx={{ my: "40px" }}>
          <CustomHeading textAlign="center" text={t("Title")} />
          <Grid container>
            {OurServicesDetails?.map(({ heading, text }, ind) => (
              <Grid item lg={6} md={6} sm={12} key={ind}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                  }}>
                  <Box>
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
                      <Box sx={aboutIconStyles}>
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
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        <BrandSection />

        <Container maxWidth="lg" sx={{ my: "60px" }}>
          <CustomHeading textAlign="center" text={d("Title")} />
          <Grid container>
            {WhyChooseDetails?.map(({ heading, text }, ind) => (
              <Grid item lg={6} md={6} sm={12} key={ind}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                  }}>
                  <Box>
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
                      <Box sx={aboutIconStyles}>
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
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box sx={bottomParagrphStyles}>
          <Typography sx={{ textAlign: "center" }}>{bp("Paragraph")}</Typography>
        </Box>

        <Box sx={bottomParagrphButtonStyle}>
          <ButtonComp text={btn("SignupButton")} onClick={() => router.push("/register")} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default AboutUs;
