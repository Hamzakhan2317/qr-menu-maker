"use client";
import Footer from "@/components/Footer/Footer";
import { MapComponent } from "@/components/MapComponent/MapComponent";
import Navbar from "@/components/Navbar/Navbar";
import CustomHeading from "@/components/ui/CustomHeading";
import InputField from "@/components/ui/InputField";
import ButtonComp from "@/components/ui/button";
import ContactUsBanner from "@/public/assets/images/ContactUsBanner.jpg";
import { contactUsCardsData } from "@/public/assets/static";
import { mainHeadingStyle } from "@/styles/AboutStyles/AboutStyles";
import { createCustomTheme } from "@/styles/theme";

import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";

const ContactUs = () => {
  const theme = createCustomTheme();
  const t = useTranslations("ContactUs");
  const contactUsCardsDataDetail = contactUsCardsData(t);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
        sx={{
          backgroundImage: `url(${ContactUsBanner.src})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "bottom center", md: "bottom" },
          position: "relative",
          minHeight: { xs: "45vh", sm: "55vh", md: "95vh" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#000",
            width: "100%",
            height: "100%",
            position: "absolute",
            opacity: "0.4",
          }}
        ></Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          color="white"
          width="100%"
          zIndex="1"
        >
          <Typography variant="h1" sx={mainHeadingStyle}>
            {t("Mainbanner.Heading")}
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Grid container spacing={4} justifyContent="center" my={"5%"}>
          {contactUsCardsDataDetail?.map(
            ({ icon: IconComponent, info1, info2, title }, ind) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={ind}>
                <Card
                  sx={{
                    minHeight: 280,
                    boxShadow: "none",
                    borderRadius: "0rem",
                    background: "#F6F5F3",
                  }}
                >
                  <CardContent sx={{ padding: "40px 70px 20px 30px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        mb: 5,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 40, color: "#A327F0" }} />
                    </Box>
                    <Typography
                      fontSize="24px"
                      fontWeight="800"
                      align="start"
                      gutterBottom
                      color="#000"
                    >
                      {title}
                    </Typography>
                    <Typography
                      fontSize="18px"
                      fontWeight="600"
                      align="start"
                      marginTop="15px"
                    >
                      {info1}
                    </Typography>
                    <Typography
                      fontSize="18px"
                      fontWeight="600"
                      align="start"
                      gutterBottom
                    >
                      {info2}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MapComponent />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                component="main"
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  padding: "2rem",
                }}
              >
                <Box
                  sx={{
                    marginBottom: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CustomHeading text={t("FormHeading.Heading")} />
                </Box>

                <Grid container spacing={2}>
                  <InputField placeholder={t("FormFields.Name")} name="name" />

                  <InputField
                    placeholder={t("FormFields.Email")}
                    name="email"
                  />

                  <InputField
                    placeholder={t("FormFields.Company")}
                    name="company"
                  />

                  <InputField
                    placeholder={t("FormFields.Phone")}
                    name="phone"
                  />

                  <InputField
                    placeholder={t("FormFields.Message")}
                    name="message"
                    rows={3}
                    cols={12}
                    multiline
                  />
                </Grid>

                <ButtonComp marginTop="20px" text={t("FormButton.FormBtn")} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  paddingBottom: "20px",
                  marginTop: "1rem",
                }}
              >
                <Typography
                  color="#cb6fe5"
                  variant="body2"
                  sx={{ mx: 2, fontSize: "12px" }}
                >
                  {t("FormFotter.TermsOfService")}
                </Typography>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: "#ccc", mx: 1 }}
                />
                <Typography
                  color="#cb6fe5"
                  variant="body2"
                  sx={{ mx: 2, fontSize: "12px" }}
                >
                  {t("FormFotter.PrivacyPolicy")}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default ContactUs;
