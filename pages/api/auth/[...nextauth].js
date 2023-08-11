import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const adminEmails = ["harrisbe@sonoma.edu"];

export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};
