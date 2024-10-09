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
// import { sendOTP } from "@/utils/otpService/sendOTP";
import { NextResponse } from "next/server";
import twilio from "twilio";

const {
  // VERIFICATION_SECRET,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  // TWILIO_SMS_SERVICE,
} = process.env;

export const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export async function POST(req) {
  const { phone } = await req.json();
  try {
    await connectDB();
    if (![phone].every(Boolean))
      return NextResponse.json({ message: "Please enter phone" }, { status: 400 });
    const user = await User.findOne({ phone });
    if (!user) {
      return NextResponse.json({ message: "Phone number not found" }, { status: 400 });
    }

    // const otpSent = await sendOTP(phone);

    // console.log("otpSent>>>>", otpSent);

    // const verification = await twilioClient.verify.v2
    //   .services(TWILIO_SMS_SERVICE)
    //   .verifications.create({
    //     //   to: user?.number ?? number,
    //     to: `+${phone}`,
    //     channel: "sms",
    //   })
    //   .then(async () => {
    //     return NextResponse.json(
    //       { message: "OTP send successfully" },
    //       { status: 201 }
    //     );
    //   })
    //   .catch((error) => {
    //     console.log("error========", error);
    //     if (error.code === 20003) {
    //       // return res.status(500).json({
    //       //   success: false,
    //       //   message: 'Twilio account is expired or has no balance',
    //       // });
    //       return NextResponse.json(
    //         { message: "Twilio account is expired or has no balance" },
    //         { status: 400 }
    //       );
    //       // return {
    //       //   success: false,
    //       //   message: "Twilio account is expired or has no balance",
    //       // };
    //     }
    //     if (error.code === 60203) {
    //       // return res.status(500).json({
    //       //   success: false,
    //       //   message: 'Max send attempts reached',
    //       // });
    //       return NextResponse.json(
    //         { message: "Max send attempts reached" },
    //         { status: 400 }
    //       );
    //       // return false;
    //     }
    //     // return false;

    //     return NextResponse.json(
    //       { message: "Something went wrong" },
    //       { status: 400 }
    //     );
    //   });

    // const verification = await client.verify.v2.services(TWILIO_SMS_SERVICE).verifications.create({
    //   channel: "sms",
    //   to: `+${phone}`,
    // });

    // console.log("verification>>>>>>>>", verification);
    // const service = await client.verify.v2.services.create({
    //   friendlyName: "QR MENU MAKER",
    // });

    // console.log(service.sid);

    // const savedUser = await newUser.save();

    // if (!savedUser) {
    //   return NextResponse.json(
    //     { message: "Failed to create user" },
    //     { status: 400 }
    //   );
    // }

    // Update otpExpiry when sending OTP
    user.otpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes from now
    await user.save();

    return NextResponse.json({ message: "OTP send seccessfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to connect to server" },
      { status: 500 },
    );
  }
}
