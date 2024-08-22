"use client";
import { Box, Divider, Typography, Link, Container } from "@mui/material";
import LogoSvg from "@/public/assets/svg/logoSvg";
import InputField from "@/components/ui/InputField";
import ButtonComp from "@/components/ui/button";
import NextLink from "next/link";

const ForgetPassword = () => {
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
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "700", mb: 2 }}>
                Forgot Password
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#757575",
                }}
              >
                Enter your email, and we’ll send you instructions on how to
                reset your password.
              </Typography>
            </Box>
            <Box component="form">
              <InputField
                sx={{
                  marginBottom: "15px",
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
                name="email"
                paddingLeft="7px"
                backgroundColor="#fff"
                variant="outlined"
              />
              <ButtonComp
                marginTop="0.7rem"
                backgroundColor="#8338EC"
                color="#FFF"
                borderRadius=".5rem"
                fontWeight="300"
                width="100%"
                hoverBackgroundColor="#A764FA"
                text="Continue"
                marginBottom="2.4rem"
              />
            </Box>
            <Box
             

              sx={{
                padding: "0.7rem",
                textAlign: "center",
                backgroundColor: "#F9F5FE",
                position: "absolute",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
              }}
            >
              <Typography variant="body2" color="#8338EC"  sx={{textDecoration:"none"}} component={NextLink}
              href="/login">
                Back to login
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            paddingBottom: "20px",
            marginTop: "3rem",
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
export default ForgetPassword;
