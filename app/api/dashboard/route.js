import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { message: "Authorization token missing or invalid" },
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Proceed with the request, e.g., fetch protected data from the database
    const protectedData = { message: "This is protected data" };
    return NextResponse.json(protectedData, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { message: "Token verification failed" },
      { status: 401 }
    );
  }
}
