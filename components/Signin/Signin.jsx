"use client";
import { signIn } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import LogoSvg from "@/public/assets/svg/logoSvg";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Typography,
  Container,
} from "@mui/material";
import InputField from "../ui/InputField";
import ButtonComp from "../ui/button";
import { useFormik } from "formik";
import { loginSchema } from "@/validations/login/loginSchema";

import { toast } from "sonner";


const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async ({ email, password }) => {
    const toastId = toast.loading("Login user...");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        // callbackUrl: process.env.NEXTAUTH_URL
      });

      // const result = await res.json();
      console.log("res>>>>>>>>>>>>>>>", res);

      if (res?.error) {
        toast.error("Invalid email or password", { id: toastId });
      }
      if (res?.ok) {
        toast.success("Login successfully", { id: toastId });
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("error>>>>>>>>>>>>>", error);
      toast.error("Something went wrong", { id: toastId });
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      handleLogin(values);
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to left, rgba(235, 210, 250, 0.3), rgba(245, 235, 250, 0.2))",
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
                Log in to your account
              </Typography>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12}>
                  <ButtonComp
                    backgroundColor="#fff"
                    color="#262626"
                    border="1px solid #DDDDDD"
                    borderRadius=".5rem"
                    fontWeight="300"
                    width="100%"
                    padding="5px 12px"
                    text="Log in with Google"
                    hoverBackgroundColor="#fff"
                    hoverColor="#8338EC"
                    hoverBorder="#8338EC"
                    icon={<GoogleIcon />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonComp
                    backgroundColor="#fff"
                    color="#262626"
                    padding="5px 12px"
                    border="1px solid #DDDDDD"
                    borderRadius=".5rem"
                    fontWeight="300"
                    width="100%"
                    text="Log in with Apple"
                    hoverBackgroundColor="#fff"
                    hoverColor="#8338EC"
                    hoverBorder="#8338EC"
                    icon={<AppleIcon />}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2.5 }}>
              <Divider sx={{ flex: 1 }} />
              <Typography color="#757575" variant="body2" sx={{ mx: 2 }}>
                or
              </Typography>
              <Divider sx={{ flex: 1 }} />
            </Box>
            <Box component="form" onSubmit={formik.handleSubmit}>
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
                paddingLeft="7px"
                backgroundColor="#fff"
                variant="outlined"
                name="email"
                formik={formik}
              />
              <InputField
                sx={{
                  marginBottom: "15px",
                  paddingLeft: "0px",
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#8338EC",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#AE83EA",
                    },
                  },
                }}
                Placeholder="Password"
                height="2.5rem"
                backgroundColor="#fff"
                type={"password"}
                icon
                variant="outlined"
                name="password"
                formik={formik}
              />
              <Grid container alignItems="center">
                <Grid item xs>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="remember"
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 18,
                          },
                          color: "#ECECEC",
                          "&.Mui-checked": {
                            color: "#8338EC",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography color="#757575" sx={{ fontSize: "0.875rem" }}>
                        Keep me logged in
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item>
                  <Link
                    href="/forget-password"
                    variant="body2"
                    sx={{
                      color: "#8338EC",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#AE83EA",
                      },
                    }}
                  >
                    Forgot Password?
                  </Link>
                </Grid>
              </Grid>
              <ButtonComp
                onClick={formik.handleSubmit}
                marginTop="0.7rem"
                backgroundColor="#8338EC"
                color="#FFF"
                borderRadius=".5rem"
                fontWeight="300"
                width="100%"
                hoverBackgroundColor="#A764FA"
                text="Login"
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
              <Typography variant="body2" color="#605F62">
                Don&apos;t have an account?{" "}
                <Link
                  component={NextLink}
                  href="/register"
                  variant="bodyS"
                  sx={{
                    color: "#8338EC",
                    textDecoration: "none",
                  }}
                >
                  Sign up
                </Link>
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

export default LoginPage;
