"use client";
import { Box, Container, Divider, Grid,  Link,Typography } from "@mui/material";
import LogoSvg from "@/public/assets/svg/logoSvg";
import InputField from "@/components/ui/InputField";
import ButtonComp from "@/components/ui/button";
import NextLink from "next/link";
const ContactUs = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
        "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(200, 170, 230, 0.5), rgba(220, 190, 240, 0.9), rgba(255, 255, 255, 0))",
      }}
    >
      <Container maxWidth="lg" sx={{ padding: "1rem" }}>
      <Link component={NextLink} href="/">
            <LogoSvg />
          </Link>
      </Container>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="main"
            sx={{
              marginTop: "1rem",
              marginBottom: "2rem",
              backgroundColor: "white",
              padding: "2rem",
              flex: 1,
              borderRadius: "8px",
              boxShadow:
                "0 9px 28px 8px rgba(0, 0, 0, 0.05), 0 6px 16px rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12)",
              position: "relative",
              zIndex: 1,
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
              <Typography
                color="#8338EC"
                sx={{ fontSize: "1.5rem", fontWeight: "700" }}
              >
                Any Questions ?
              </Typography>
              <Typography
                color="#E6034B"
                sx={{ fontSize: "1.2rem", fontWeight: "500" }}
              >
                Contact us Today.
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <InputField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#8338EC",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#AE83EA",
                      },
                    },
                  }}
                  Placeholder="Name"
                  height="2.5rem"
                  cols={12}
                  name="name"
                  paddingLeft="7px"
                  backgroundColor="#fff"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <InputField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#8338EC",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#AE83EA",
                      },
                    },
                  }}
                  Placeholder="E-Mail"
                  height="2.5rem"
                  cols={12}
                  name="email"
                  paddingLeft="7px"
                  backgroundColor="#fff"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <InputField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#8338EC",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#AE83EA",
                      },
                    },
                  }}
                  Placeholder="Company"
                  height="2.5rem"
                  cols={12}
                  name="company"
                  paddingLeft="7px"
                  backgroundColor="#fff"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <InputField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#8338EC",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#AE83EA",
                      },
                    },
                  }}
                  Placeholder="Phone"
                  height="2.5rem"
                  cols={12}
                  name="phone"
                  paddingLeft="7px"
                  backgroundColor="#fff"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{ marginBottom: "2rem" }}
              >
                <InputField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#8338EC",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#AE83EA",
                      },
                    },
                  }}
                  Placeholder="Message"
                  cols={12}
                  name="message"
                  rows={3}
                  multiline
                  padding="0"
                  backgroundColor="#fff"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <ButtonComp
              backgroundColor="#8338EC"
              color="#FFF"
              borderRadius=".5rem"
              fontWeight="300"
              width="100%"
              hoverBackgroundColor="#A764FA"
              text="Submit"
            />
          </Box>
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
            color="#8338EC"
            variant="body2"
            sx={{ mx: 2, fontSize: "12px" }}
          >
            Terms of Service
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#ccc", mx: 1 }}
          />
          <Typography
            color="#8338EC"
            variant="body2"
            sx={{ mx: 2, fontSize: "12px" }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default ContactUs;