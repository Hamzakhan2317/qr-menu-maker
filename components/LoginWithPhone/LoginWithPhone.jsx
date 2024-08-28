"use client";
// import { signIn } from "next-auth/react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useRef, useState } from "react";
// import { toast } from "sonner";

// const LoginWithPhone = () => {
//   const ref = useRef();

//   const router = useRouter();

//   const [userInfo, setUserInfo] = useState({
//     phone: "",
//     otp: "",
//   });

//   const [phoneFound, setPhoneFound] = useState(false);

//   const [pending, setPending] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setUserInfo({
//       ...userInfo,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (!userInfo.email || !userInfo.password) {
//   //     setError("Must provide all the Credentials!");
//   //   }
//   //   try {
//   //     setPending(true);
//   //     const res = await signIn("credentials", {
//   //       email: userInfo.email,
//   //       password: userInfo.password,
//   //       redirect: false,
//   //       // callbackUrl: process.env.NEXTAUTH_URL
//   //     });

//   //     if (res?.error) {
//   //       setError("invalid email or password");
//   //     }
//   //     if (res?.ok) {
//   //       router.push("/dashboard");
//   //     }

//   //     setPending(false);

//   //   } catch (error) {

//   //     console.log("error>>>>>>>>>>>>>", error)
//   //     setPending(false);
//   //     setError("Something went wrong");
//   //   }
//   // };
//   const handleSendOTP = async (e) => {
//     e.preventDefault();

//     try {
//       if (phoneFound) {
//         const res = await fetch("/api/verifyotp", {
//           method: "POST",
//           body: JSON.stringify({ phone: userInfo?.phone, otp: userInfo?.otp }),
//           headers: { "Content-Type": "application/json" },
//         });

//         if (!res.ok) {
//           const errorData = await res.json();
//           throw new Error(errorData.message || "Failed to verify otp");
//         }
//         const result = await res.json();
//         console.log("result>>>>", result);
//         toast.success(result?.message);
//       } else {
//         const res = await fetch("/api/sendotp", {
//           method: "POST",
//           body: JSON.stringify({ phone: userInfo?.phone }),
//           headers: { "Content-Type": "application/json" },
//         });

//         if (!res.ok) {
//           const errorData = await res.json();
//           throw new Error(errorData.message || "Failed to send otp");
//         }
//         const result = await res.json();
//         console.log("result>>>>", result);
//         toast.success(result?.message);
//         setPhoneFound(true);
//       }

//       // toast.success("phone found successfully");
//     } catch (error) {
//       toast.error(error.message || "errror in catch");
//       console.log("Error>>>>>>", error.message);
//     }

//     console.log("userinfo>>>>", userInfo);
//   };
//   // const handleOTPLogin = async (e) => {
//   //   e.preventDefault();
//   //   const res = await signIn("credentials", {
//   //     phone: userInfo?.phone,
//   //     otp: userInfo?.otp,
//   //     redirect: false,
//   //   });

//   //   if (res.ok) {
//   //     // router.push("/dashboard");
//   //     console.log("res>>>>", res);
//   //   } else {
//   //     console.error(res.error);
//   //   }
//   // };
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form
//         ref={ref}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//         onSubmit={handleSendOTP}
//       >
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="phone"
//           >
//             phone
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="phone"
//             type="text"
//             placeholder="phone"
//             name="phone"
//             value={userInfo.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="otp"
//           >
//             OTP
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="otp"
//             type="number"
//             placeholder="********"
//             name="otp"
//             value={userInfo.otp}
//             // required
//             onChange={handleChange}
//             disabled={!phoneFound}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           {error && <span className="text-red-600 mx-2 px-2">{error}</span>}
//           <button
//             disabled={pending === true}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             {pending ? "Loggin in..." : "Log In"}
//           </button>
//           <br />

//           <Link href={"/register"}>
//             <span className="bg-green-600 mx-2 px-2 py-1 rounded-lg">
//               Dont have an account? Register
//             </span>
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginWithPhone;

import LogoSvg from "@/public/assets/svg/logoSvg";
import {
  Box,
  Container,
  Divider,
  // Link,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import NextLink from "next/link";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import ButtonComp from "../ui/button";

import { Link, useRouter } from "@/navigation";
import AuthCode from "react-auth-code-input";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";


const LoginWithPhone = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [usePhoneLogin, setUsePhoneLogin] = useState(false);

  const [number, setNumber] = useState("");
  console.log("number>>>>>>>", number);

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
        phone: number,
      });

      console.log("result>>>>>>", result);

      // if (result?.status === "otp_sent") {
      //   setIsOTPSent(true);
      //   console.log(result.message);
      //   toast.success(result.message);
      //   // Display message or trigger next step
      // } else if (result.error) {
      //   console.log(result.error);

      //   toast.error(result.error);
      // }

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
          console.log(errorData.message);
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
      phone: number,
      otp,
    });

    console.log("result verifyOTP>>>>>>", result);

    if (result.error) {
      console.error(result.error);
      toast.error(result.error, { id: toastId });
    } else {
      console.log("Logged in successfully!");
      toast.success("OTP varified, Logged in successfully!", { id: toastId });
      router.push("/dashboard");
      // Redirect or show a success message
    }

    // if (result?.error) {
    //   let errorData;
    //   try {
    //     errorData = JSON.parse(result.error);
    //   } catch (err) {
    //     console.error("Error parsing response:", err);
    //     errorData = { status: "error", message: result.error };
    //   }

    //   if (errorData.status === "otp_verify") {
    //     // setIsOTPSent(true);
    //     console.log(errorData.message);
    //     toast.success(errorData.message, { id: toastId });
    //   } else {
    //     console.error(errorData.message);
    //     toast.error(errorData.message, { id: toastId });
    //   }
    // }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: loginSchema,
    onSubmit: async (values) => {
      handleLogin(values);
    },
  });
  const handleOnOtpChange = (otp) => {
    // console.log("Res>>>>>>>", otp)
    setOTP(otp);
  };

  return (
    // <div>
    //   {usePhoneLogin ? (
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="Phone number"
    //         value={phone}
    //         onChange={(e) => setPhone(e.target.value)}
    //       />
    //       <button onClick={sendOTP}>Send OTP</button>

    //       {isOTPSent && (
    //         <>
    //           <input
    //             type="text"
    //             placeholder="Enter OTP"
    //             value={otp}
    //             onChange={(e) => setOTP(e.target.value)}
    //           />
    //           <button onClick={verifyOTP}>Verify OTP</button>
    //         </>
    //       )}
    //       <button onClick={() => setUsePhoneLogin(false)}>
    //         Use Email/Password
    //       </button>
    //     </div>
    //   ) : (
    //     <div>
    //       <input
    //         type="email"
    //         placeholder="Email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <button onClick={handleEmailPasswordLogin}>Login</button>
    //       <button onClick={() => setUsePhoneLogin(true)}>Use Phone/OTP</button>
    //     </div>
    //   )}
    // </div>

    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to left, rgba(235, 210, 250, 0.3), rgba(245, 235, 250, 0.2))",
      }}
    >
      <Container maxWidth="lg" sx={{ padding: "1rem" }}>
        <Link href="/">
          <LogoSvg />
        </Link>      </Container>
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
            </Box>

            <Box component="form" >
              <Typography variant="body2" sx={{ marginBottom: "10px" }}>
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
                // error={
                //   number
                //     ? isValidPhoneNumber(number)
                //       ? undefined
                //       : "Invalid phone number"
                //     : "Phone number required"
                // }
                // error={"Phone number required"}
                style={{
                  border: "none",
                  outline: "none",
                  color: "black",
                  border: "1px solid #8338ec",
                  padding: "10px",
                  borderRadius: "5px"
                }}
              />
              <Typography sx={{ color: "red", mb: 1 }}>
                {number
                  ? isValidPhoneNumber(number)
                    ? undefined
                    : "Invalid phone number"
                  : "Phone number required"}
              </Typography>
              {isOTPSent && (
                <>
                  <Typography variant="body2" sx={{ marginTop: "20px", marginBottom: "10px" }}>
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
              {/* <InputField
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
              /> */}
              {isOTPSent ? (
                <ButtonComp
                  onClick={verifyOTP}
                  marginTop="0.7rem"
                  backgroundColor="#8338EC"
                  color="#FFF"
                  borderRadius=".5rem"
                  fontWeight="300"
                  width="100%"
                  hoverBackgroundColor="#A764FA"
                  text="Verify Otp"
                  marginBottom="2.4rem"
                />
              ) : (
                <ButtonComp
                  onClick={sendOTP}
                  marginTop="0.7rem"
                  backgroundColor="#8338EC"
                  color="#FFF"
                  borderRadius=".5rem"
                  fontWeight="300"
                  width="100%"
                  hoverBackgroundColor="#A764FA"
                  text="Send Otp"
                  marginBottom="2.4rem"
                />
              )}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2.5 }}>
              <Divider sx={{ flex: 1 }} />
              <Link href={"/login"} style={{ fontFamily: "Nunito Sans", color: "#8338EC", textDecoration: "none" }}>
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

export default LoginWithPhone;
