"use client";
import { Link, useRouter } from "@/navigation";
import { logoComponents } from "@/public/assets/static";
import {
  containerFlexStyle,
  formStyle,
  imagesGridStyle,
  imageTextStyle,
  termsOfServiceBoxStyle,
  termsOfServiceTextStyle,
} from "@/styles/SignupStyles/SignupStyles";
import { signupSchema } from "@/validations/signup/signupSchema";
import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { toast } from "sonner";
import InputField from "../ui/InputField";
import ButtonComp from "../ui/button";
import SignUpLogo from "/public/SignUpImg.webp";
import SecondaryNavbar from "../Navbar/SecondaryNavbar";
import {
  useRegisterMutation,
  useResendOTPMutation,
  useVerifyOTPMutation,
} from "@/redux/services/api/authApis";
import AuthCode from "react-auth-code-input";

const LoginPage = () => {
  // const pathname = usePathname();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [otpValue, setOTPValue] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(true);
  // const locale = useLocale();
  // const [lang, setLang] = useState(locale);
  // const handleChange = (event) => {
  //   setLang(event.target.value);
  // };
  const router = useRouter();
  const [register] = useRegisterMutation();
  const [verifyOTP] = useVerifyOTPMutation();
  const [resendOTP] = useResendOTPMutation();

  const handelSignup = async (values) => {
    try {
      // const toastId = toast.loading("Please wait...");
      const resp = await register({
        ...values,
        phone: values?.phone.replace("+", ""),
      }).unwrap();

      console.log("resp>>>>>", resp);
      // if (errorData.status === "otp_sent") {
      //   setIsOTPSent(true);
      //   toast.success(errorData.message, { id: toastId });
      // } else {
      //   console.error(errorData.message);
      //   toast.error(errorData.message, { id: toastId });
      // }
      if (resp) {
        toast.success(resp?.message || "User register successfully");
        setIsOTPSent(true);
      }
    } catch (error) {
      console.log("error>>>>>", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => handelSignup(values),
  });
  const handleVerifyOTP = async () => {
    const phoneValue = formik?.values?.phone;
    try {
      if (phoneValue) {
        const resp = await verifyOTP({
          phone: phoneValue.replace("+", ""), // Send phone and OTP for verification
          otp: otpValue,
        }).unwrap();

        console.log("OTP verification response>>>>>", resp);
        if (resp) {
          // toast.success(resp?.message || "OTP verified. Registration complete.");
          router.push("/login");
        }
      }
    } catch (error) {
      // console.log("OTP verification error>>>>>", error);
      // toast.error(error?.message || "OTP verification failed. Please try again.");
    }
  };
  const handleResendOTP = async () => {
    const phoneValue = formik?.values?.phone;
    try {
      if (phoneValue) {
        const resp = await resendOTP({
          phone: phoneValue.replace("+", ""), // Send phone and OTP for verification
          otp: otpValue,
        }).unwrap();

        console.log("OTP verification response>>>>>", resp);
        if (resp) {
          // toast.success(resp?.message || "OTP verified. Registration complete.");
          router.push("/login");
        }
      }
    } catch (error) {
      // console.log("OTP verification error>>>>>", error);
      // toast.error(error?.message || "OTP verification failed. Please try again.");
    }
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(200, 170, 230, 0.5), rgba(220, 190, 240, 0.9), rgba(255, 255, 255, 0))",
      }}>
      <SecondaryNavbar />
      <Container component="main">
        <Grid container sx={containerFlexStyle} marginTop="5%">
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <Box sx={imageTextStyle}>
              <Box>
                <Image src={SignUpLogo} alt="Top Image" width={125} height={125} />
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
                  }}>
                  “Our sales and tips increased by 20%-30% using Garsonline. Some days I don&apos;t
                  understand how I get through without Garsonline...”
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "0.5rem",
                    fontSize: "14px",
                    fontFamily: "Nunito Sans",
                  }}>
                  CHRIS GIA
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "#ADADAE",
                    fontFamily: "Nunito Sans",
                  }}>
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
                }}>
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "Nunito Sans",
                  }}>
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
                  }}>
                  No credit card required.
                </Typography>
                {isOTPSent ? (
                  <>
                    <Typography variant="body2" sx={{ paddingBottom: "10px" }}>
                      Enter OTP Here:
                    </Typography>
                    <AuthCode
                      allowedCharacters="numeric"
                      onChange={(otp) => setOTPValue(otp)}
                      inputClassName="otpinput"
                      containerClassName="otpcontainer signupotp"
                      length={6}
                    />
                    <Typography
                      variant="body2"
                      color="#605F62"
                      sx={{
                        fontFamily: "Nunito Sans",
                        textAlign: "right",
                      }}>
                      OTP Expired?{" "}
                      <span
                        style={{ color: "#cb6fe5", cursor: "pointer" }}
                        onClick={handleResendOTP}>
                        {" "}
                        Request a New One.
                      </span>
                    </Typography>
                  </>
                ) : (
                  <>
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
                      value={formik.values.phone}
                      onChange={(value) => {
                        formik.setFieldValue("phone", value);
                      }}
                      onBlur={formik.handleBlur}
                      placeholder="Enter phone number"
                      required
                      name="phone"
                      defaultCountry="tr"
                      style={{
                        background: "none",
                        outline: "none",
                        color: "black",
                        border: `1px solid ${formik.touched.phone && formik.errors.phone ? "red" : "#C4C4C4"}`,
                        borderRadius: "4px",
                        marginBottom: "5px",
                        height: "56px",
                        padding: "10px",
                        alignItems: "center",
                      }}
                      inputStyle={{
                        width: "100%",
                        border: "none",
                        fontSize: "16px",
                        background: "none",
                      }}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <Typography
                        sx={{
                          mt: -1,
                          color: "red",
                          fontSize: "12px",
                          ml: 2,
                          mb: 0.5,
                        }}>
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
                  </>
                )}
                <ButtonComp
                  width="100%"
                  text={isOTPSent ? "Verify OTP" : "Create Account"}
                  onClick={isOTPSent ? handleVerifyOTP : formik.handleSubmit}
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
                }}>
                <Typography
                  variant="body2"
                  color="#605F62"
                  sx={{
                    fontFamily: "Nunito Sans",
                  }}>
                  Already have an account?{" "}
                  <Link
                    component={NextLink}
                    href="/login"
                    variant="bodyS"
                    style={{
                      color: "#cb6fe5",
                      textDecoration: "none",
                      fontFamily: "Nunito Sans",
                    }}>
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
              }}>
              <Box sx={termsOfServiceBoxStyle}>
                <Typography color="#ADADAE" variant="body2" sx={termsOfServiceTextStyle}>
                  By signing up, you agree to the{" "}
                  <Link
                    href="#"
                    variant="bodyS"
                    style={{
                      color: "#8338EC",
                      textDecoration: "none",
                      fontFamily: "Nunito Sans",
                    }}>
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
                    }}>
                    Privacy Policy
                  </Link>
                  . You also agree to receive marketing e-mails from Garsonline which you can
                  unsubscribe anytime.
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
