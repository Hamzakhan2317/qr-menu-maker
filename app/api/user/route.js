import connectDB from "@/db/mongodb";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, name, image, username } = await req.json();
  try {
    await connectDB();
    const isExistUser = await User.findOne({ email });
    if (isExistUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }
    const newUser = await User.create({ email, name, image, username });
    if (!newUser) {
      return NextResponse.json({ message: "Failed to create user" }, { status: 400 });
    }
    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to connect to server" }, { status: 500 });
  }
}

// Get all users
// export const GET = async (_req, _res) => {
//   try {
//     await connectDB();
//     const allUsers = await User.find()
//       .populate("notes")
//       .sort({ createdAt: -1 });
//     if (!allUsers) {
//       return NextResponse.json({ message: "No users found" }, { status: 404 });
//     }
//     return NextResponse.json({ allUsers });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to fetch users" },
//       { status: 500 }
//     );
//   }
// };

// Get a user's information (including their restaurants)
// exports.getUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).populate('restaurants');
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.status(200).json({ user });
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching user information' });
//   }
// };
