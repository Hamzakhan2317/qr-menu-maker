"use client";
import InputField from "@/components/ui/InputField";
import ButtonComp from "@/components/ui/button";
// import { usePathname } from "@/navigation";
// import trFlag from "@/public/assets/images/turkeyflag.jpg";
// import usaflag from "@/public/assets/images/usaflag.png";
// import LogoSvg from "@/public/assets/svg/logoSvg";
import {
  Box,
  Container,
  Divider,
  //  MenuItem, Select,
  Typography,
} from "@mui/material";
// import { useLocale } from "next-intl";
// import Image from "next/image";
// import NextLink from "next/link";
import { useRouter } from "@/navigation";

// import { useState } from "react";
import SecondaryNavbar from "@/components/Navbar/SecondaryNavbar";

const ForgetPassword = () => {
  // const pathname = usePathname();
  // const locale = useLocale();
  // const [lang, setLang] = useState(locale);
  // const handleChange = (event) => {
  //   setLang(event.target.value);
  // };

  const { push } = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(200, 170, 230, 0.5), rgba(220, 190, 240, 0.9), rgba(255, 255, 255, 0))",
      }}>
      <SecondaryNavbar />
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}>
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
            }}>
            <Box
              sx={{
                marginBottom: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  mb: 2,
                  fontFamily: "Nunito Sans",
                }}>
                Forgot Password
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#757575",
                  fontFamily: "Nunito Sans",
                }}>
                Enter your email, and we’ll send you instructions on how to reset your password.
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
              <ButtonComp width="100%" text="Continue" />
              <ButtonComp
                width="100%"
                variant="light"
                text="Back to login"
                onClick={() => push("/login")}
              />
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
            marginTop: "10px",
          }}>
          <Typography
            color="#8338EC"
            variant="body2"
            sx={{
              mx: 2,
              fontSize: "12px",
              fontFamily: "Nunito Sans",
            }}>
            Terms of Service
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ borderColor: "#ccc", mx: 1 }} />
          <Typography
            color="#8338EC"
            variant="body2"
            sx={{
              mx: 2,
              fontSize: "12px",
              fontFamily: "Nunito Sans",
            }}>
            Privacy Policy
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default ForgetPassword;
