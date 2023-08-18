import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authenticationOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: ({ session, token, user }) => {
      if (process.env.ADMIN_EMAIL.includes(session?.user?.email)) {
        return session;
      } else {
        return false;
      }
    },
  },
};

export default NextAuth(authenticationOptions);

export async function isAdminRequest(req, res) {
  const session = await getServerSession(req, res, authenticationOptions);
  if (!process.env.ADMIN_EMAIL.includes(session?.user?.email)) {
    res.status(401);
    res.end();
    throw "not an admin";
  }
}
