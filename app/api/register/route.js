import connectDB from "@/db/mongodb";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, phone, password } = await req.json();
  try {
    await connectDB();
    if (![email, phone, password].every(Boolean))
      return NextResponse.json(
        { message: "Please fill all inputs!" },
        { status: 400 }
      );
    const existUserWithEmail = await User.findOne({ email });
    if (existUserWithEmail) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    const existingUserWithPhone = await User.findOne({ phone });
    if (existingUserWithPhone) {
      return NextResponse.json(
        { message: "Phone already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({
      email,
      phone,
      password,
    });

    const savedUser = await newUser.save();

    if (!savedUser) {
      return NextResponse.json(
        { message: "Failed to create user" },
        { status: 400 }
      );
    }
    return NextResponse.json({ message:"User register successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to connect to server" },
      { status: 500 }
    );
  }
}
