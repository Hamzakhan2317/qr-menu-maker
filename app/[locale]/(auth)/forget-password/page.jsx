"use client";
import InputField from "@/components/ui/InputField";
import ButtonComp from "@/components/ui/button";
import { Link, usePathname } from "@/navigation";
import trFlag from "@/public/assets/images/turkeyflag.jpg";
import usaflag from "@/public/assets/images/usaflag.png";
import LogoSvg from "@/public/assets/svg/logoSvg";
import { Box, Container, Divider, MenuItem, Select, Typography } from "@mui/material";
import { useLocale } from "next-intl";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";

const ForgetPassword = () => {
  const pathname = usePathname()
  const locale = useLocale();
  const [lang, setLang] = useState(locale);
  const handleChange = (event) => {
    setLang(event.target.value);
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(200, 170, 230, 0.5), rgba(220, 190, 240, 0.9), rgba(255, 255, 255, 0))",
      }}
    >
      <Box sx={{ padding: "15px 35px", display: "flex", justifyContent: "space-between", boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px", background: "#fff" }}>
        <Link component={NextLink} href="/">
          <LogoSvg />
        </Link>
        <Box sx={{ ml: "10px" }}>
          <Select
            value={lang}
            placeholder="lng"
            onChange={handleChange}
            sx={{
              width: 60,
              height: 45,
              ".MuiSvgIcon-root": {
                display: "none"
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccc",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccc",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccc",
              },
            }}
          >
            <MenuItem value={"en"}>
              <Link style={{
                textDecoration: "none", fontSize: "14px", color: "#111827", fontFamily: "Nunito Sans",
              }} href={pathname} locale="en">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image alt="usaflag" src={usaflag} style={{ width: "15px", height: "15px", marginRight: "3px" }} /> eng
                </Box>
              </Link>
            </MenuItem>
            <MenuItem value={"tr"}>
              <Link style={{
                textDecoration: "none", fontSize: "14px", color: "#111827", fontFamily: "Nunito Sans",
              }} href={pathname} locale="tr">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image alt="trFlag" src={trFlag} style={{ width: "15px", height: "15px", marginRight: "3px", objectFit: "contain" }} /> tur
                </Box>
              </Link>
            </MenuItem>
          </Select>
        </Box>
      </Box>
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
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "700", mb: 2, fontFamily: "Nunito Sans" }}>
                Forgot Password
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#757575",
                  fontFamily: "Nunito Sans"
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
              <Link style={{
                textDecoration: "none", color: "#8338EC", fontSize: "14px", fontFamily: "Nunito Sans"
              }}
                href="/login">
                Back to login
              </Link>
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
          }}
        >
          <Typography
            color="#8338EC"
            variant="body2"
            sx={{
              mx: 2, fontSize: "12px", fontFamily: "Nunito Sans"
            }}
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
            sx={{
              mx: 2, fontSize: "12px", fontFamily: "Nunito Sans"
            }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default ForgetPassword;
