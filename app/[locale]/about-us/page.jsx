"use client";

import BrandSection from "@/components/BrandSection/BrandSection.jsx";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ButtonComp from "@/components/ui/button";
import bannerSection from "@/public/assets/images/bannerSection.jpeg";
import catering from "@/public/assets/images/catering.webp";
import forCustomers from "@/public/assets/images/forCustomers.webp";
import merchantSChef from "@/public/assets/images/merchantSChef.webp";
import reservation from "@/public/assets/images/reservation.webp";
import { cardsGridTextStyle } from "@/styles/AboutStyles/AboutStyles";
import CheckIcon from "@mui/icons-material/Check";

import CustomHeading from "@/components/ui/CustomHeading";
import { useRouter } from "@/navigation";
import { getwhyChooseDetails } from "@/public/assets/static";
import {
  appFeatureHeadingStyles,
  appFeatureIconStyles,
  appFeaturesTextStyles,
} from "@/styles/AppFeatureSectionStyles/AppFeatureSectionStyles";
import { createCustomTheme } from "@/styles/theme";
import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutUs = () => {
  const theme = createCustomTheme();
  const t = useTranslations("About");
  const router = useRouter();
  const at = useTranslations("About.WhyChoose");
  const whyChooseDetails = getwhyChooseDetails(at);
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
            width: "100%", // Ensures 100% width across all screen sizes
            aspectRatio: "1320 / 250", // Maintain the aspect ratio of the image
            height: { xs: "auto", sm: "auto", md: "250px" }, // Responsive height; fixed height on medium screens
          }}
        >
          {/* <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            color="white"
            width="100%"
            maxWidth="900px"
            padding="0 4%"
          >
            <Typography variant="h1" sx={mainHeadingStyle}>
              {t("Mainbanner.Heading")}
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ marginTop: { xs: "1.5rem", md: "2.5rem" } }}
            >
              <ButtonComp
                variant="blue"
                onClick={() => router.push("/register")}
                text={t("Mainbanner.SignupButton")}
              />
            </Box>
          </Box> */}
        </Box>

        {/* <Box sx={middleTextStyle}>
          <Box sx={{ maxWidth: "600px" }}>
            <CustomHeading
              textAlign="center"
              text={t("BottomHeader.Heading")}
            />
            <Typography sx={{ fontSize: "1rem", textAlign: "center" }}>
              {t("BottomHeader.SubHeading")}
            </Typography>
          </Box>
        </Box> */}
        <Container
          sx={{
            my: "3%",
            minHeight: "85vh",
          }}
        >
          <CustomHeading
            textAlign="center"
            text={t("CardsSectionHeading.Heading")}
            color="#cb6fe5"
          />

          <Grid container my="5%">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", sm: "row" },
                alignItems: "center",
              }}
            >
              <Grid item xs={12} sm={12} md={6} lg={6} sx={cardsGridTextStyle}>
                <CustomHeading text={t("CustomerCard.Heading")} />

                <Typography
                  sx={{
                    fontSize: "1rem",
                    paddingLeft: "2px",
                    paddingRight: "5%",
                  }}
                >
                  {t("CustomerCard.SubHeading")}
                </Typography>
                <ButtonComp
                  text={t("CustomerCard.CustomerBtn")}
                  marginTop="30px"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Image
                  src={forCustomers}
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectPosition: "center top",
                    objectFit: "cover",
                  }}
                  alt="Customers"
                />
              </Grid>
            </Box>

            <Grid item xs={12} sm={6} md={6} lg={6} my="5%">
              <Image
                src={merchantSChef}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  marginTop: "50px",
                  objectPosition: "center top",
                }}
                alt="Merchents Chef"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} sx={cardsGridTextStyle}>
              <Box
                sx={{
                  marginLeft: { xs: "0", sm: "30px", md: "50px" },
                  marginTop: { xs: "0", sm: "5rem", md: "0" },
                }}
              >
                <CustomHeading text={t("RestaurantOwnersCard.Heading")} />

                <Typography
                  sx={{
                    fontSize: "1rem",
                    paddingLeft: "2px",
                    paddingRight: "5%",
                  }}
                >
                  {t("RestaurantOwnersCard.SubHeading")}
                </Typography>
                <ButtonComp
                  text={t("RestaurantOwnersCard.RestaurantOwnersBtn")}
                  marginTop="30px"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        {/* <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height={{ xs: "25vh", sm: "55vh", md: "90vh" }}
          sx={{
            marginTop: "20px",
            backgroundImage: `url(${TraditionalBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            color="white"
            width="100%"
            padding="0 2%"
          >
            <Typography sx={mainHeadingStyle}>
              {t("MiddleSection.Heading")}
            </Typography>
          </Box>
        </Box> */}

        <Container
          sx={{
            minHeight: "85vh",
            my: "3%",
          }}
        >
          <CustomHeading
            textAlign="center"
            text={t("OthersCardsSectionHeading.Heading")}
            color="#cb6fe5"
          />

          <Grid container mb="5%">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", sm: "row" },
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <CustomHeading text={t("CateringCard.Heading")} />
                <Typography
                  sx={{
                    fontSize: "1rem",
                    paddingLeft: "2px",
                    paddingRight: "5%",
                  }}
                >
                  {t("CateringCard.SubHeading")}
                </Typography>
                <ButtonComp
                  text={t("CateringCard.CateringBtn")}
                  marginTop="30px"
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6} my="5%">
                <Image
                  src={catering}
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectPosition: "center top",
                    objectFit: "cover",
                  }}
                  alt="Catering"
                />
              </Grid>
            </Box>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Image
                src={reservation}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  marginTop: "50px",
                  objectPosition: "bottom",
                }}
                alt="Reservation"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  marginLeft: { xs: "0", sm: "30px", md: "50px" },
                  marginTop: { xs: "0", sm: "4rem", md: "0" },
                }}
              >
                <CustomHeading text={t("ReservationsCard.Heading")} />

                <Typography
                  sx={{
                    fontSize: "1rem",
                    paddingLeft: "2px",
                    paddingRight: "5%",
                  }}
                >
                  {t("ReservationsCard.SubHeading")}
                </Typography>
                <ButtonComp text={t("ReservationsCard.ReservationsBtn")} />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xl">
          <CustomHeading text={t("WhyChoose.Title")} />
          <Grid container>
            <Grid item lg={12} md={12} sm={12}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                }}
              >
                <Box>
                  {whyChooseDetails?.map(({ heading, text }, ind) => (
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
                      }}
                    >
                      <Box sx={{
                        display: "flex", justifyContent: "center", alignItems: "center",
                        background: "#cb6fe5",
                        borderRadius: "8px",
                        width: "30px",
                        height: "30px",
                        minHeight: "30px",
                        minWidth: "30px",
                        mb: "15px"
                      }}>
                        <CheckIcon
                          sx={{
                            color: "white",
                            fontWeight: "600",
                            fontSize: "20px",

                          }}
                        />
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
                        }}
                      >
                        <Typography sx={appFeatureHeadingStyles}>
                          {heading}
                        </Typography>
                        <Typography sx={appFeaturesTextStyles}>
                          {text}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <BrandSection />
        {/* <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height={{ xs: "55vh", md: "90vh" }}
          sx={{
            backgroundImage: `url(${enjoyingBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginTop: "30px",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            color="white"
            width="100%"
            padding="0 2%"
            maxWidth="900px"
          >
            <Typography sx={mainHeadingStyle}>
              {t("BottomBanner.Heading")}
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ marginTop: { xs: "1.5rem", md: "2.5rem" } }}
            >
              <ButtonComp text={t("BottomBanner.SignupButton")} />
            </Box>
          </Box>
        </Box> */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default AboutUs;
