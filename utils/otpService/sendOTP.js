import User from "@/models/user.model";
// import twilio from "twilio";
import axios from "axios";

// const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SMS_SERVICE } =
//   process.env;

// export const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export async function sendOTP(phone) {
  // try {
  //   const verification = await client.verify.v2
  //     .services(process.env.TWILIO_SMS_SERVICE)
  //     .verifications.create({
  //       channel: "sms",
  //       to: phone,
  //     });

  //   return verification; // Return the verification object on success
  // } catch (error) {
  //   console.error("Error sending OTP:", error);
  //   // Throw a new error with a custom message or use the error from Twilio
  //   throw new Error(error.message || "Failed to send OTP. Please try again.");
  // }

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // Call to Verimor SMS API to send the OTP
     await axios.post(
      "https://sms.verimor.com.tr/v2/send.json",
      {
        username: "908502419412",
        password: "muzaffertest",
        source_addr: "08502419412", 
        messages: [
          {
            msg: `Your OTP is: ${otp}`,
            dest: phone,
          },
        ],
      }
    );

    const updated = await User.findOneAndUpdate(
      { phone },
      { otpCode: otp, otpExpiry: Date.now() + 5 * 60 * 1000 },
      { new: true }
    );
    if (!updated) throw new Error("An error occured while updating data ");
    // return response;
    return true;
  } catch (error) {
    throw new Error(error.message || "Failed to send OTP. Please try again.");
  }
}
