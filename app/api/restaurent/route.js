import connectDB from "@/db/mongodb";
import Restaurent from "@/models/restaurent.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("Request received"); // Added log
  return NextResponse.json({ message:"Restaurent Created successfully" }, { status: 201 });

  const { userId, restaurantName } = await req.json();
  try {
    await connectDB();
    if (![userId, restaurantName].every(Boolean))
      return NextResponse.json(
        { message: "Please fill all inputs!" },
        { status: 400 }
      );

    const newRestaurent = new Restaurent({
      name: restaurantName,
      owner: userId,
    });

    const savedRestaurent = await newRestaurent.save();

    if (!savedRestaurent) {
      return NextResponse.json(
        { message: "Failed to create Restaurent" },
        { status: 400 }
      );
    }
    return NextResponse.json({ message:"Restaurent Created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || "Failed to connect to server" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  return NextResponse.json({ message:"Restaurent Created successfully" }, { status: 201 });
  // Your code
}
