"use client";
import { Link, usePathname, useRouter } from "@/navigation";
import LogoSvg from "@/public/assets/svg/logoSvg";
import { loginSchema } from "@/validations/login/loginSchema";
import {
  Box,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useLocale } from "next-intl";
import Image from "next/image";
import NextLink from "next/link";
import { useState,useEffect } from "react";
import { toast } from "sonner";
import trFlag from "../../public/assets/images/turkeyflag.jpg";
import usaflag from "../../public/assets/images/usaflag.png";
import InputField from "../ui/InputField";
import ButtonComp from "../ui/button";
import SecondaryNavbar from "../Navbar/SecondaryNavbar";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

const LoginPage = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const dispatch = useDispatch()
  const [lang, setLang] = useState(locale);
  const handleChange = (event) => {
    setLang(event.target.value);
  };


  console.log(" LoginPage session>>>>>>>", session)

  const handleLogin = async ({ email, password }) => {
    const toastId = toast.loading("Login user...");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        // callbackUrl: process.env.NEXTAUTH_URL
      });

      // console.log("Resp>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", res)
      if (res?.error) {
        toast.error("Invalid email or password", { id: toastId });
      }
      if (res?.ok) {
        console.log("session?.user?._id>>>>>", session?.user?._id)
        toast.success("Login successfully", { id: toastId });
      }
    } catch (error) {
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

  useEffect(()=>{
    if(session?.user?._id){
      router.push(`/venues/${session?.user?._id}/dashboard`);
    }
  },[session?.user?._id])

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
            <Box component="form" onSubmit={formik.handleSubmit}>
              <InputField
                sx={{
                  marginBottom: "15px",
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
                icon
                variant="outlined"
                type={passwordVisible ? "text" : "password"}
                passwordVisible={passwordVisible}
                setPasswordVisible={setPasswordVisible}
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
                      <Typography
                        color="#757575"
                        sx={{ fontSize: "0.875rem", fontFamily: "Nunito Sans" }}
                      >
                        remember me
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item>
                  <Link
                    href="/forget-password"
                    style={{
                      fontFamily: "Nunito Sans",
                      color: "#cb6fe5",
                      textDecoration: "none",
                      fontSize: "13px",
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
                width="100%"
                text="Login"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2.5 }}>
              <Divider sx={{ flex: 1 }} />
              <Link
                href={"/Login-with-phone"}
                style={{
                  fontFamily: "Nunito Sans",
                  color: "#cb6fe5",
                  textDecoration: "none",
                  padding: "0 5px",
                  fontSize: "14px",
                }}
              >
                Login with phone
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
            textAlign: "center",
            paddingBottom: "0px",
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

export default LoginPage;
