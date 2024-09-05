import User from "@/models/user.model";
import twilio from "twilio";

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SMS_SERVICE } =
  process.env;

export const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export async function verifyOTP(phone, otp) {
  //   const verificationCheck = await client.verify.v2
  //     .services(TWILIO_SMS_SERVICE)
  //     .verificationChecks.create({
  //       to: `+${phone}`,
  //       code: otp,
  //     });

  //   return verificationCheck;
  // try {
  //   const verificationCheck = await client.verify.v2
  //     .services(TWILIO_SMS_SERVICE)
  //     .verificationChecks.create({
  //       to: phone,
  //       code: otp,
  //     });

  //   console.log("verificationCheck");

  //   // return verificationCheck?.valid; // Return the verification object on success

  //   if (verificationCheck.status === "approved") {
  //     // OTP is correct and verified
  //     // throw new Error("OTP verified successfully.");
  //     return true;
  //   } else {
  //     // OTP is incorrect
  //     throw new Error("Invalid OTP. Please try again.");
  //   }
  // } catch (error) {
  //   console.log("error>>>>>....", error);
  //   if (error.code === 20404) {
  //     // Twilio error code for expired OTP
  //     throw new Error("The OTP has expired. Please request a new one.");
  //   } else if (error.code === 20003) {
  //     // Twilio error code for account issues
  //     throw new Error(
  //       "Account expired or authentication failed. Please contact support."
  //     );
  //   } else if (error.code === 21610) {
  //     // Twilio error code for SMS opt-out or no balance
  //     throw new Error(
  //       "Cannot send messages to this number. Please check your balance."
  //     );
  //   } else if (error.code === 21614) {
  //     // Twilio error code for invalid phone number
  //     throw new Error(
  //       "The phone number is invalid or cannot receive SMS messages."
  //     );
  //   } else {
  //     throw new Error(
  //       error?.message || "  An error occurred while verifying the OTP."
  //     );
  //   }
  // }

  try {
    const user = await User.findOne({ phone });
    console.log("user>>>>>>>", user)
    if (user?.otpCode !== otp) throw new Error("Invalid OTP. Please try again.");
    const currentTime = Date.now();
    if (currentTime > user?.otpExpiry)
      throw new Error("The OTP has expired. Please request a new one.");
    return true;

  } catch (error) {
    throw new Error(
      error?.message || "An error occurred while verifying the OTP."
    );
  }
}
