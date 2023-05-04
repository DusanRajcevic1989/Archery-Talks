import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../../lib/mongoDbClient";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.JWT_SECRET,
};
export default NextAuth(authOptions);
