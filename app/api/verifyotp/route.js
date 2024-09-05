// import connectDB from "@/db/mongodb";
// import User from "@/models/user.model";
// import { sendOTP } from "@/utils/otpService/sendOTP";
// import { sendOTP } from "@/utils/otpService";

// export default async function POST(req, res) {
// //   const { phone } = req.body;
//   const { phone} = await req.json();
//   console.log("phone>>>>>", phone)

//   await connectDB();

//   const user = await User.findOne({ phone });

//   if (!user) {
//     return res.status(404).json({ message: "Phone number not found" });
//   }

//   const otpSent = await sendOTP(phone);

//   if (!otpSent) {
//     return res.status(500).json({ message: "Failed to send OTP" });
//   }

//   return res.status(200).json({ message: "OTP sent successfully" });
// }

import connectDB from "@/db/mongodb";
import User from "@/models/user.model";
import { sendOTP } from "@/utils/otpService/sendOTP";
import { NextResponse } from "next/server";
import twilio from "twilio";

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SMS_SERVICE } =
  process.env;

export const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export async function POST(req) {
  const { phone, otp } = await req.json();

  try {
    await connectDB();
    if (![phone, otp].every(Boolean))
      return NextResponse.json(
        { message: "Please enter phone and otp" },
        { status: 400 }
      );
    const user = await User.findOne({ phone });
    if (!user) {
      return NextResponse.json(
        { message: "Phone number not found" },
        { status: 400 }
      );
    }

    if (user.isOTPExpired()) {
      return NextResponse.json(
        { message: "OTP has expired. Please request a new one." },
        { status: 400 }
      );
    }

    const verificationCheck = await client.verify.v2
      .services(TWILIO_SMS_SERVICE)
      .verificationChecks.create({
        code: otp,
        to: `+${phone}`,
      });

    if (!verificationCheck) {
      return NextResponse.json(
        { message: "an error occured while verify otp" },
        { status: 201 }
      );
    }
    await user?.updateOne({ isPhoneVerified: true, otpExpiry: undefined });

    return NextResponse.json(
      { message: "OTP verified seccessfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to connect to server" },
      { status: 500 }
    );
  }
}
