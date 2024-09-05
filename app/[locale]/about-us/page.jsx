"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ButtonComp from "@/components/ui/button";
import bannerSection from "@/public/assets/images/bannerSection.webp";
import catering from "@/public/assets/images/catering.webp";
import enjoyingBackground from "@/public/assets/images/enjoyingBackground.webp";
import forCustomers from "@/public/assets/images/forCustomers.webp";
import merchantSChef from "@/public/assets/images/merchantSChef.webp";
import reservation from "@/public/assets/images/reservation.webp";
import TraditionalBackground from "@/public/assets/images/TraditionalBackground.webp";
import {
  cardsGridTextStyle,
  mainHeadingStyle,
  middleTextStyle,
} from "@/styles/AboutStyles/AboutStyles";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { createCustomTheme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";
import CustomHeading from "@/components/ui/CustomHeading";

const AboutUs = () => {
  const theme = createCustomTheme();
  const t = useTranslations("About");
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100% " }}>
        <Navbar />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="90vh"
          sx={{
            backgroundImage: `url(${bannerSection.src})`,
            backgroundSize: "cover",
            backgroundPosition: { xs: "center", md: "bottom" },
            height: { xs: "45vh", sm: "55vh", md: "90vh" },
          }}
        >
          <Box
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
            {/* <Box
              display="flex"
              justifyContent="center"
              sx={{ marginTop: { xs: "1.5rem", md: "2.5rem" } }}
            >
              <ButtonComp
                variant="blue"
                onClick={() => router.push("/register")}
                text={t("Mainbanner.SignupButton")}
              />
            </Box> */}
          </Box>
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
                <ButtonComp text={t("CustomerCard.CustomerBtn")} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Image
                  src={forCustomers}
                  style={{
                    width: "100%",
                    height: "55vh",
                    objectPosition: "center top",
                    objectFit: "cover",
                  }}
                  alt="Customers"
                />
              </Grid>
            </Box>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Image
                src={merchantSChef}
                style={{
                  width: "100%",
                  height: "55vh",
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
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
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
            borderBottom: "15px solid #cb6fe5",
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
        </Box>

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

          <Grid container my="5%">
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
                <ButtonComp text={t("CateringCard.CateringBtn")} />
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Image
                  src={catering}
                  style={{
                    width: "100%",
                    height: "55vh",
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
                  height: "55vh",
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
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height={{ xs: "55vh", md: "90vh" }}
          sx={{
            backgroundImage: `url(${enjoyingBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderBottom: "15px solid #e6034b",
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
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default AboutUs;
