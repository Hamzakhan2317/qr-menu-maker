import connectDB from "@/db/mongodb";
import User from "@/models/user.model";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    await connectDB();
    if (![email, password].every(Boolean))
      return NextResponse.json(
        { message: "Please fill all inputs!" },
        { status: 400 }
      );
    const foundUser = await User.findOne({ email });

    if (!foundUser || !(await foundUser.matchesPassword(password))) {
      return NextResponse.json(
        { message: "Incorrect email or password" },
        { status: 400 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: foundUser._id, email: foundUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return NextResponse.json(
      {
        user: foundUser,
        token, // Send token to the client
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to connect to server" },
      { status: 500 }
    );
  }
}
