"use client";
import { Link, usePathname, useRouter } from "@/navigation";
import { logoComponents } from "@/public/assets/static";
import LogoSvg from "@/public/assets/svg/logoSvg";
import {
  containerFlexStyle,
  formStyle,
  imagesGridStyle,
  imageTextStyle,
  termsOfServiceBoxStyle,
  termsOfServiceTextStyle,
} from "@/styles/SignupStyles/SignupStyles";
import { createCustomTheme } from "@/styles/theme";
import { signupSchema } from "@/validations/signup/signupSchema";
import {
  Box,
  Container,
  Grid,
  MenuItem,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useLocale } from "next-intl";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "sonner";
import trFlag from "../../public/assets/images/turkeyflag.jpg";
import usaflag from "../../public/assets/images/usaflag.png";
import InputField from "../ui/InputField";
import ButtonComp from "../ui/button";
import SignUpLogo from "/public/SignUpImg.webp";
import SecondaryNavbar from "../Navbar/SecondaryNavbar";

const LoginPage = () => {
  const pathname = usePathname();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const locale = useLocale();
  const [lang, setLang] = useState(locale);
  const handleChange = (event) => {
    setLang(event.target.value);
  };
  const router = useRouter();
  const handelSignup = async ({ email, phone, password }) => {
    const toastId = toast.loading("Registring user...");

    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        body: JSON.stringify({
          email,
          phone: phone.replace("+", ""),
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
      if (isValidPhone) {
        handelSignup(values);
      } else {
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
      <SecondaryNavbar />
      <Container component="main">
        <Grid container sx={containerFlexStyle} marginTop="5%">
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
                    fontFamily: "Nunito Sans",
                  }}
                >
                  “Our sales and tips increased by 20%-30% using Garsonline.
                  Some days I don&apos;t understand how I get through without
                  Garsonline...”
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "0.5rem",
                    fontSize: "14px",
                    fontFamily: "Nunito Sans",
                  }}
                >
                  CHRIS GIA
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "#ADADAE",
                    fontFamily: "Nunito Sans",
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
                    fontFamily: "Nunito Sans",
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
                    fontFamily: "Nunito Sans",
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
                        borderColor: "#cb6fe5",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#cb6fe5",
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

                <PhoneInput
                  className="enter-phone-input-class"
                  value={formik.values.phone}
                  onChange={(value) => {
                    formik.setFieldValue("phone", value);
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
                    background: "#fff",
                    outline: "none",
                    color: "black",
                    border: `1px solid ${
                      formik.errors.phone ? "red" : "#C4C4C4"
                    }`,
                    // border: "1px solid #C4C4C4" ,
                    padding: "8px",
                    borderRadius: "4px",
                    marginBottom: "5px",
                  }}
                />
                {formik.errors.phone && (
                  <Typography
                    sx={{
                      mt: -1,
                      color: "red",
                      fontSize: "12px",
                      ml: 2,
                      mb: 0.5,
                    }}
                  >
                    {formik.errors.phone}
                  </Typography>
                )}

                <InputField
                  sx={{
                    marginBottom: "15px",
                    paddingLeft: "0px",
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#cb6fe5",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#cb6fe5",
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
                  width="100%"
                  text="Create Account"
                  onClick={formik.handleSubmit}
                />
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
                <Typography
                  variant="body2"
                  color="#605F62"
                  sx={{
                    fontFamily: "Nunito Sans",
                  }}
                >
                  Already have an account?{" "}
                  <Link
                    component={NextLink}
                    href="/login"
                    variant="bodyS"
                    style={{
                      color: "#cb6fe5",
                      textDecoration: "none",
                      fontFamily: "Nunito Sans",
                    }}
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
                    style={{
                      color: "#8338EC",
                      textDecoration: "none",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    variant="bodyS"
                    style={{
                      color: "#8338EC",
                      textDecoration: "none",
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    Privacy Policy
                  </Link>
                  . You also agree to receive marketing e-mails from Garsonline
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
