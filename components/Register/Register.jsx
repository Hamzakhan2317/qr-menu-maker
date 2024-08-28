"use client";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { createCustomTheme } from "@/styles/theme";

import LogoSvg from "@/public/assets/svg/logoSvg";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  Container,
  Grid,
  Typography,
  Rating,
  Link,
  Divider,
} from "@mui/material";
import Image from "next/image";
import SignUpLogo from "/public/SignUpImg.webp";
import InputField from "../ui/InputField";
import ButtonComp from "../ui/button";

import { useFormik } from "formik";
import { signupSchema } from "@/validations/signup/signupSchema";
import { logoComponents } from "@/public/assets/static";
import {
  containerFlexStyle,
  formStyle,
  imagesGridStyle,
  imageTextStyle,
  termsOfServiceBoxStyle,
  termsOfServiceTextStyle,
} from "@/styles/SignupStyles/SignupStyles";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";


const LoginPage = () => {
  const theme = createCustomTheme();
  const [passwordVisible, setPasswordVisible] = useState(false)

  const router = useRouter();
  const handelSignup = async ({ email, phone, password }) => {
    const toastId = toast.loading("Registring user...");

    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        body: JSON.stringify({
          email,
          phone,
          password,
        }),
      });
      const result = await res.json();
      if (!res.ok) {
        toast.error(result?.message || "Failed to register user", {
          id: toastId,
        });
      } else {
        toast.success(result?.message || "User register successfully", {
          id: toastId,
        });
        router.push("/login");
      }
    } catch (error) {
      toast.error(error.message, {
        id: toastId,
      });
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      const isValidPhone = isValidPhoneNumber(values?.phone);
      if(isValidPhone){
        handelSignup(values);
      }else{
        toast.error("Invalid phone number");
      }

    },
  });
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(200, 170, 230, 0.5), rgba(220, 190, 240, 0.9), rgba(255, 255, 255, 0))",
      }}
    >
      <Container component="main">
        <Box sx={{ padding: "0.875rem" }}>
          <Link component={NextLink} href="/">
            <LogoSvg />
          </Link>
        </Box>
        <Grid container sx={containerFlexStyle}>
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <Box sx={imageTextStyle}>
              <Box>
                <Image
                  src={SignUpLogo}
                  alt="Top Image"
                  width={125}
                  height={125}
                />
              </Box>
              <Box sx={{ marginLeft: "1rem" }}>
                <Rating name="read-only" value={5} readOnly />
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "0.4rem",
                    fontSize: "20px",
                    fontWeight: 400,
                  }}
                >
                  “Our sales and tips increased by 20%-30% using FineDine. Some
                  days I don&apos;t understand how I get through without
                  FineDine...”
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "0.5rem",
                    fontSize: "14px",
                  }}
                >
                  CHRIS GIA
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "#ADADAE",
                  }}
                >
                  Cafe Sanuki, Manager
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={6} sx={imagesGridStyle}>
              {logoComponents.map((LogoComponent, index) => (
                <Grid item xs={6} sm={3} md={3} lg={3} key={index}>
                  <LogoComponent />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <Box sx={formStyle}>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                  padding: "1rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  Create Your Free Account
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#757575",
                    mb: 1,
                  }}
                >
                  No credit card required.
                </Typography>
                <InputField
                  sx={{
                    marginBottom: "5px",
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
                  cols="12"
                  paddingLeft="7px"
                  backgroundColor="#fff"
                  variant="outlined"
                  name="email"
                  formik={formik}
                />
                {/* <InputField
                  sx={{
                    marginBottom: "5px",
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
                  backgroundColor="#fff"
                  type={"text"}
                  cols="12"
                  variant="outlined"
                  name="phone"
                  formik={formik}
                /> */}
 <PhoneInput
        className="enter-phone-input-class"
        value={formik.values.phone}
        onChange={(value) => {
          formik.setFieldValue("phone", value);
          // formik.setFieldTouched("phone", true);
        }}
        placeholder="Enter phone number"
        required
        international
        defaultCountry="TR"
        inputExtraProps={{
          name: "phone",
          required: true,
          autoFocus: true,
        }}
        style={{
          background:"#fff",
          outline: "none",
          color: "black",
          // border: `1px solid ${formik.errors.phone ? "red":"#8338ec"}` ,
          border: "1px solid #C4C4C4" ,
          padding: "8px",
          borderRadius: "4px",
          marginBottom:"5px"
        }}
      />
      { formik.errors.phone && (
        <Typography sx={{mt:-1, color: "red", fontSize:"12px", ml:2, mb:.5 }}>{formik.errors.phone}</Typography>
      )}

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
                  cols="12"
                  icon
                  type={passwordVisible ? "text" : "password"}

                  passwordVisible={passwordVisible}
            setPasswordVisible={setPasswordVisible}
                  variant="outlined"
                  name="password"
                  formik={formik}
                />

                <ButtonComp
                  marginTop="0.7rem"
                  backgroundColor="#8338EC"
                  color="#FFF"
                  borderRadius=".5rem"
                  fontWeight="300"
                  width="100%"
                  hoverBackgroundColor="#A764FA"
                  text="Create Account"
                  marginBottom="0.5rem"
                  onClick={formik.handleSubmit}
                />
                {/* <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Divider sx={{ flex: 1 }} />
                  <Typography color="#757575" variant="body2" sx={{ mx: 2 }}>
                    or
                  </Typography>
                  <Divider sx={{ flex: 1 }} />
                </Box>
                <Grid item xs={12}>
                  <ButtonComp
                    backgroundColor="#fff"
                    color="#262626"
                    border="1px solid #DDDDDD"
                    borderRadius=".5rem"
                    fontWeight="300"
                    width="100%"
                    padding="5px 12px"
                    text="Sign up with Google"
                    hoverBackgroundColor="#fff"
                    hoverColor="#8338EC"
                    hoverBorder="#8338EC"
                    icon={<GoogleIcon />}
                  />
                </Grid> */}
              </Box>
              <Box
                sx={{
                  padding: "0.7rem",
                  textAlign: "center",
                  backgroundColor: "#F9F5FE",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  zIndex: 1,
                }}
              >
                <Typography variant="body2" color="#605F62">
                  Already have an account?{" "}
                  <Link
                    component={NextLink}
                    href="/login"
                    variant="bodyS"
                    sx={{ color: "#8338EC", textDecoration: "none" }}
                  >
                    Log in
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                marginTop: "2rem",
              }}
            >
              <Box sx={termsOfServiceBoxStyle}>
                <Typography
                  color="#ADADAE"
                  variant="body2"
                  sx={termsOfServiceTextStyle}
                >
                  By signing up, you agree to the{" "}
                  <Link
                    href="#"
                    variant="bodyS"
                    sx={{ color: "#8338EC", textDecoration: "none" }}
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    variant="bodyS"
                    sx={{ color: "#8338EC", textDecoration: "none" }}
                  >
                    Privacy Policy
                  </Link>
                  . You also agree to receive marketing e-mails from FineDine
                  which you can unsubscribe anytime.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginPage;
