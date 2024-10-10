import createIntlMiddleware from "next-intl/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { locales, localePrefix } from "./navigation";

// Create the next-intl middleware
const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix,
  defaultLocale: "tr",
});

export async function middleware(req) {
  const { pathname, origin } = req.nextUrl;

  // First, run the next-intl middleware to handle locale detection
  const intlResponse = intlMiddleware(req);
  if (intlResponse) {
    return intlResponse;
  }

  // Extract the locale from the pathname
  const locale = pathname.split("/")[1];

  // Extract the token from the request (checks for a JWT session)
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_JWT_SECRET,
  });
  // If the token is not available, redirect to the locale-specific login page
  if (!token) {
    const loginUrl = new URL(`/${locale}/login`, origin);
    return NextResponse.redirect(loginUrl);
  }

  // Continue with the request if the token exists
  return NextResponse.next();
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|.*\\..*).*)", "/(tr|es|en)/:path*"], // Adjust the matcher to your needs
};
