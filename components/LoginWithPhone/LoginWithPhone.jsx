"use client";

import {
  Box,
  Container,
  Divider,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import NextLink from "next/link";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import ButtonComp from "../ui/button";

import { Link, usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import AuthCode from "react-auth-code-input";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import trFlag from "../../public/assets/images/turkeyflag.jpg";
import usaflag from "../../public/assets/images/usaflag.png";
import SecondaryNavbar from "../Navbar/SecondaryNavbar";

const LoginWithPhone = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [usePhoneLogin, setUsePhoneLogin] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const [lang, setLang] = useState(locale);
  const handleChange = (event) => {
    setLang(event.target.value);
  };

  const [number, setNumber] = useState("");

  const router = useRouter();

  const sendOTP = async () => {
    if (!number) {
      toast.error("Phone number is required");
      return;
    }
    const isValidPhone = isValidPhoneNumber(number);
    if (isValidPhone) {
      const toastId = toast.loading("Please wait...");

      const result = await signIn("credentials", {
        redirect: false,
        phone: number.replace("+", ""),
      });

      if (result?.error) {
        let errorData;
        try {
          errorData = JSON.parse(result.error);
        } catch (err) {
          console.error("Error parsing response:", err);
          errorData = { status: "error", message: result.error };
        }
        if (errorData.status === "otp_sent") {
          setIsOTPSent(true);
          toast.success(errorData.message, { id: toastId });
        } else {
          console.error(errorData.message);
          toast.error(errorData.message, { id: toastId });
        }
      }
    } else {
      toast.error("Invalid phone number");
    }
  };

  const verifyOTP = async () => {
    if (otp?.length < 6) {
      toast.error("The OTP must be 6 digits long.");
      return;
    }
    const toastId = toast.loading("Please wait...");

    const result = await signIn("credentials", {
      redirect: false,
      phone: number.replace("+", ""),
      otp,
    });


    if (result.error) {
      toast.error(result.error, { id: toastId });
    } else {
      toast.success("OTP varified, Logged in successfully!", { id: toastId });
      router.push("/dashboard");
      // Redirect or show a success message
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      handleLogin(values);
    },
  });
  const handleOnOtpChange = (otp) => {
    setOTP(otp);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to left, rgba(235, 210, 250, 0.3), rgba(245, 235, 250, 0.2))",
      }}
    >
      <SecondaryNavbar />
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
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
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  mb: 2,
                  fontFamily: "Nunito Sans",
                }}
              >
                Log in to your account
              </Typography>
            </Box>

            <Box component="form">
              <Typography
                variant="body2"
                sx={{ marginBottom: "10px", fontFamily: "Nunito Sans" }}
              >
                Enter your phone number:
              </Typography>
              <PhoneInput
                className="enter-phone-input-class"
                onChange={(e) => setNumber(e)}
                placeholder="Enter phone number"
                required
                international
                defaultCountry="TR"
                inputExtraProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
                disabled={isOTPSent}
                style={{
                  border: "none",
                  outline: "none",
                  color: "black",
                  border: "1px solid #cb6fe5",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              />
              <Typography
                sx={{
                  color: "red",
                  mb: 1,
                  mt: 1,
                  fontFamily: "Nunito Sans",
                  fontSize: "12px",
                }}
              >
                {number
                  ? isValidPhoneNumber(number)
                    ? undefined
                    : "Invalid phone number"
                  : "Phone number required"}
              </Typography>
              {isOTPSent && (
                <>
                  <Typography
                    variant="body2"
                    sx={{ marginTop: "20px", marginBottom: "10px" }}
                  >
                    Enter OTP Here:
                  </Typography>
                  <AuthCode
                    allowedCharacters="numeric"
                    onChange={handleOnOtpChange}
                    inputClassName="otpinput"
                    containerClassName="otpcontainer"
                    length={6}
                  />
                </>
              )}

              {isOTPSent ? (
                <ButtonComp
                  onClick={verifyOTP}
                  width="100%"
                  text="Verify Otp"
                  marginBottom="2.4rem"
                />
              ) : (
                <ButtonComp
                  onClick={sendOTP}
                  width="100%"
                  text="Send Otp"
                  marginBottom="1.5rem"
                />
              )}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2.5 }}>
              <Divider sx={{ flex: 1 }} />
              <Link
                href={"/login"}
                style={{
                  fontFamily: "Nunito Sans",
                  color: "#cb6fe5",
                  textDecoration: "none",
                  padding: "0 5px",
                  fontSize: "14px",
                }}
              >
                Login with email
              </Link>
              <Divider sx={{ flex: 1 }} />
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
              <Typography
                variant="body2"
                color="#605F62"
                sx={{ fontFamily: "Nunito Sans" }}
              >
                Don&apos;t have an account?{" "}
                <Link
                  component={NextLink}
                  href="/register"
                  variant="bodyS"
                  style={{
                    color: "#cb6fe5",
                    textDecoration: "none",
                    fontFamily: "Nunito Sans",
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
            color="#cb6fe5"
            variant="body2"
            sx={{ mx: 2, fontSize: "12px", fontFamily: "Nunito Sans" }}
          >
            Terms of Service
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#ccc", mx: 1 }}
          />
          <Typography
            color="#cb6fe5"
            variant="body2"
            sx={{ mx: 2, fontSize: "12px", fontFamily: "Nunito Sans" }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginWithPhone;
