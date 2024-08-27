import twilio from "twilio";

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SMS_SERVICE } =
  process.env;

export const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export async function sendOTP(phone) {
  // const verification = await client.verify.v2
  //   .services(TWILIO_SMS_SERVICE)
  //   .verifications.create({
  //     channel: "sms",
  //     to: `+${phone}`,
  //   });

  // return verification;

  try {
    const verification = await client.verify.v2
      .services(process.env.TWILIO_SMS_SERVICE)
      .verifications.create({
        channel: "sms",
        to: phone,
      });

    return verification; // Return the verification object on success
  } catch (error) {
    console.error("Error sending OTP:", error);
    // Throw a new error with a custom message or use the error from Twilio
    throw new Error(error.message || "Failed to send OTP. Please try again.");
  }

  // Code to create Msg Service
  // twilioClient.verify.v2.services
  //   .create({ friendlyName: "My First Verify Service" })
  //   .then((service) => console.log(service.sid));
}
