// // import { PrismaClient } from "@prisma/client";
// import connectDB from "@/db/mongodb";
// import User from "@/models/user.model";
// import NextAuth, { getServerSession } from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { NextResponse } from "next/server";
// // import { compare } from "bcrypt";

// // const prisma = new PrismaClient();

// export const authOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "email", type: "email" },
//         password: { label: "password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         console.log("credentials>>>>", credentials);
//         // Add logic here to look up the user from the credentials supplied

//         if (!credentials.email || !credentials.password) {
//           return null;
//           // return NextResponse.json(
//           //   { message: "Please fill all inputs!" },
//           //   { status: 400 }
//           // );
//         }

//         // user in DB

//         // const user = await prisma.user.findUnique({
//         //     where: {
//         //         email: credentials.email
//         //     }
//         // })
//         await connectDB();

//         const user = await User.findOne({ email: credentials.email });

//         console.log("user found", user);

//         // if (!user) {
//         //     return null;
//         // }

//         // const isPasswordValid = await compare(credentials.password, user.password);

//         // if (!isPasswordValid) {
//         //     return null;
//         // }

//         if (!user || !(await user.matchesPassword(credentials.password)))
//           return null;
//         // return NextResponse.json(
//         //   { message: "invalid email or password" },
//         //   { status: 400 }
//         // );

//         // return {
//         //   id: user._id,
//         //   email: user.email,
//         //   username: user.username,
//         //   //   role: user.role,
//         //   //   permissions: user?.permissions,
//         // };
//         return user
//       },
//     }),
//   ],

//   callbacks: {
//     async session({ session, token }) {
//       // console.log("session token", token);
//       // return {
//       //   ...session,
//       //   user: {
//       //     ...session.user,
//       //     id: token._id,
//       //     email: token.email,
//       //     username: token.username,
//       //     //   role: token.role,
//       //     //   permissions: token?.permissions,
//       //   },
//       // };

//       session.user = token.user;
//       return session;
//     },

//     async jwt({ token, user }) {
//       // after login jwt token and get the user data from here

//       if (user) {
//         // return {
//         //   ...token,
//         //   id: user._id,
//         //   email: user.email,
//         //   username: user.username,
//         //   //   role: user.role,
//         //   //   permissions: user?.permissions,
//         // };
//         token.user = user;
//       }
//       return token;
//     },
//   },

//   pages: {
//     signIn: "/login",

//     // signIn: "/auth/signin",
//     // error: "/auth/error", // Error code passed in query string as ?error=
//   },

//   debug: process.env.NODE_ENV === "development",
//   jwt: {
//     secret: process.env.NEXTAUTH_JWT_SECRET,
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

// import connectDB from "@/db/mongodb";
// import User from "@/models/user.model";
// import { verifyOTP } from "@/utils/otpService/verifyOTP";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// // import { sendOTP, verifyOTP } from "@/utils/otpService"; // Assume these functions are implemented

// export const authOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//         phone: { label: "Phone", type: "text" },
//         otp: { label: "OTP", type: "text" },
//       },
//       async authorize(credentials) {
//         await connectDB();

//         // Email & Password Login
//         if (credentials.email && credentials.password) {
//           const user = await User.findOne({ email: credentials.email });

//           if (!user || !(await user.matchesPassword(credentials.password))) {
//             throw new Error("Invalid email or password");
//           }

//           return user;
//         }

//         // Phone & OTP Login
//         if (credentials.phone && credentials.otp) {
//           const user = await User.findOne({ phone: credentials.phone });

//           if (!user) {
//             throw new Error("Phone number not found");
//           }

//           const isOTPValid = await verifyOTP(credentials.phone, credentials.otp);

//           if (!isOTPValid) {
//             throw new Error("Invalid OTP");
//           }

//           return user;
//         }

//         throw new Error("Invalid credentials");
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.user = user;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = token.user;
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import connectDB from "@/db/mongodb";
import User from "@/models/user.model";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// import { sendOTP, verifyOTP } from "@/utils/twilio";
// import bcrypt from "bcrypt";
import { verifyOTP } from "@/utils/otpService/verifyOTP";
import { sendOTP } from "@/utils/otpService/sendOTP";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        phone: { label: "Phone", type: "text" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials, req) {
        await connectDB();

        if (credentials.email && credentials.password) {
          // Email and Password Login
          const user = await User.findOne({ email: credentials.email });

          if (!user || !(await user.matchesPassword(credentials.password)))
            throw new Error("Invalid email or password.");

          // if (!user) {
          //   throw new Error("No user found with this email.");
          // }

          // const isPasswordValid = await bcrypt.compare(
          //   credentials.password,
          //   user.password
          // );

          // if (!isPasswordValid) {
          //   throw new Error("Invalid password.");
          // }

          return user;
        } else if (credentials.phone) {
          // Phone Number and OTP Login
          const user = await User.findOne({ phone: credentials.phone });

          if (!user) {
            throw new Error("No user found with this phone number.");
          }

          if (credentials.otp) {
            // Verify OTP
            const isValidOTP = await verifyOTP(
              credentials.phone,
              credentials.otp
            );

            console.log("isValidOTP>>>>>>>>>>>", isValidOTP)

            if (!isValidOTP) {
              throw new Error("Invalid OTP.");
            }

            return user;
          } else {
            // Send OTP
            await sendOTP(credentials.phone);

            throw new Error(
              JSON.stringify({
                status: "otp_sent",
                message: "OTP sent. Please verify.",
              })
            );

            // return { status: "otp_sent", message: "OTP sent. Please verify." };
          }
        }

        throw new Error("Invalid credentials.");
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },

  pages: {
    signIn: "/login",
  },

  debug: process.env.NODE_ENV === "development",
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// export const getServerAuthSession = () => getServerSession(authOptions); //(6)
