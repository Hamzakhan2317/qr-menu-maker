import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // console.log("req>>>>>>>>>>", req)
  // Extract the token from the request (this checks for a JWT session)
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_JWT_SECRET,
  });

  // If token is not available, redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Continue with the request if the token exists
  return NextResponse.next();
}

// Define which routes should use the middleware
export const config = {
  matcher: ["/dashboard/:path*"], // Add the routes you want to protect
};
