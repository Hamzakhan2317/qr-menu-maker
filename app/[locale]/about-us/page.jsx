"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/page";
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
  subHeadingStyle,
} from "@/styles/AboutStyles/AboutStyles";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { createCustomTheme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";



const AboutUs = () => {
  const theme = createCustomTheme();
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
          padding="0 4%"
        >
          <Typography variant="h1" sx={mainHeadingStyle}>
            The World&apos;s Most Delicious Cuisine At Your Fingertips!
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginTop: { xs: "1.5rem", md: "2.5rem" } }}
          >
            <ButtonComp
              backgroundColor="#e6034b"
              color="#FFF"
              fontSize={{ xs: "0.9rem", md: "1rem" }}
              padding="10px 15px"
              height={{ xs: "40px", md: "50px" }}
              borderRadius=".5rem"
              fontWeight="600"
              margin="0px 30px 0px 25px"
              hoverBackgroundColor="#c40542"
              text="Sign Up"
            />
            <ButtonComp
              fontSize={{ xs: "0.9rem", md: "1rem" }}
              padding="10px 15px"
              height={{ xs: "40px", md: "50px" }}
              backgroundColor="#e6034b"
              color="#FFF"
              borderRadius=".5rem"
              fontWeight="600"
              margin="0px 30px 0px 0px"
              hoverBackgroundColor="#c40542"
              text="Become a Partner"
            />
          </Box>
        </Box>
      </Box>

      <Box sx={middleTextStyle}>
        <Box sx={{ maxWidth: "800px" }}>
          <Typography
            sx={{
              fontSize: { xs: "1.9rem", sm: "2rem", md: "2.2rem" },
              fontWeight: 700,
            }}
          >
            What is Turkish Restaurant?
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", marginTop: "10px", paddingLeft: "2%" }}
          >
            Turkish Restaurant.com is a technology company that connects people
            with the best of their neighborhoods across the USA. Which is also
            the largest Turkish Restaurant portal in the United States. Reach
            new local customers, and grow your business by offering online
            ordering with TurkishRestaurant.com
          </Typography>
        </Box>
      </Box>
      <Container
        sx={{
          minHeight: "85vh",
        }}
      >
        <Typography sx={subHeadingStyle}>Who We Serve?</Typography>
        <Grid container>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
            }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} sx={cardsGridTextStyle}>
              <Typography
                sx={{
                  fontSize: { xs: "2.2rem", sm: "2.5", md: "3rem" },
                  fontWeight: 600,
                }}
              >
                Customers
              </Typography>
              <Typography
                sx={{ fontSize: "1rem", paddingLeft: "2%", paddingRight: "5%" }}
              >
                All of the best Turkish foods at your fingertips, Turkish
                Restaurant brings the best of your neighborhood on-demand.
              </Typography>
              <ButtonComp
                backgroundColor="#e6034b"
                color="#FFF"
                padding="10px 10px"
                borderRadius=".5rem"
                fontWeight="600"
                margin="10px 0 0 5px "
                hoverBackgroundColor="#c40542"
                text="Start Ordering"
              />
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
              <Typography
                sx={{
                  fontSize: { xs: "2.2rem", md: "3rem" },
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                Restaurant Owners
              </Typography>
              <Typography
                sx={{ fontSize: "1rem", paddingLeft: "2%", paddingRight: "5%" }}
              >
                Reach new customers and grow your business by offering Catering,
                Reservations, Delivery and Pickup with TurkishRestaurant.com
              </Typography>
              <ButtonComp
                backgroundColor="#e6034b"
                color="#FFF"
                padding="10px 10px"
                borderRadius=".5rem"
                fontWeight="600"
                margin={{ xs: "15px 0 40px 5px", md: "10px 0 0 0" }}
                hoverBackgroundColor="#c40542"
                text="Become a Partner"
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
          borderBottom: "28px solid #e6034b",
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
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "3.8rem" },
              fontWeight: { xs: "700", md: "900" },
            }}
          >
            All Traditional Flavors Together
          </Typography>
        </Box>
      </Box>

      <Container
        sx={{
          minHeight: "85vh",
        }}
      >
        <Typography sx={subHeadingStyle}>Unique Benefits</Typography>
        <Grid container>
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
              <Typography
                sx={{
                  fontSize: { xs: "2.2rem", md: "3rem" },
                  fontWeight: 600,
                }}
              >
                Catering
              </Typography>
              <Typography
                sx={{ fontSize: "1rem", paddingLeft: "2%", paddingRight: "5%" }}
              >
                You no longer need to use separate platforms for your regular
                and catering orders. Turkish Restaurant offers this two features
                together for you.
              </Typography>
              <ButtonComp
                backgroundColor="#e6034b"
                color="#FFF"
                padding="10px 10px"
                borderRadius=".5rem"
                fontWeight="600"
                margin={{ xs: "15px 0 0px 5px", md: "10px 0 0 0" }}
                hoverBackgroundColor="#c40542"
                text="Start Ordering"
              />
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
              <Typography
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 600,
                }}
              >
                Reservations
              </Typography>
              <Typography
                sx={{ fontSize: "1rem", paddingLeft: "2%", paddingRight: "5%" }}
              >
                Unlike other reservation providers, the Turkish Restaurant
                reservation system does not charge you any additional fees. As
                soon as you become a partner, the service becomes active for
                free.
              </Typography>
              <ButtonComp
                backgroundColor="#e6034b"
                color="#FFF"
                padding="10px 10px"
                borderRadius=".5rem"
                fontWeight="600"
                margin={{ xs: "15px 0 40px 5px", md: "10px 0 0 0" }}
                hoverBackgroundColor="#c40542"
                text="Become a Partner"
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
        height={{ xs: "55vh", md: "90vh" }}
        sx={{
          margin: "15px 0",
          backgroundImage: `url(${enjoyingBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "28px solid #e6034b",
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
        >
          <Typography sx={mainHeadingStyle}>
            Join Now & Start Enjoying The Most Beneficial Platform
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginTop: { xs: "1.5rem", md: "2.5rem" } }}
          >
            <ButtonComp
              backgroundColor="#e6034b"
              color="#FFF"
              fontSize={{ xs: "0.9rem", md: "1rem" }}
              padding="0px 15px"
              height={{ xs: "40px", md: "50px" }}
              borderRadius=".5rem"
              fontWeight="600"
              margin="0px 30px 0px 25px"
              hoverBackgroundColor="#c40542"
              text="Sign Up"
            />
            <ButtonComp
              fontSize={{ xs: "0.9rem", md: "1rem" }}
              padding="0px 15px"
              height={{ xs: "40px", md: "50px" }}
              backgroundColor="#e6034b"
              color="#FFF"
              borderRadius=".5rem"
              margin="0px 30px 0px 0px"
              fontWeight="600"
              hoverBackgroundColor="#c40542"
              text="Become a Partner"
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
    </ThemeProvider>
  );
};

export default AboutUs;
