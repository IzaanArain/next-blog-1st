import User from "@/models/user.model";
import connectDB from "@/utils/db";
import bcrypt from "bcryptjs"
import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        try {
          await connectDB();
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            // check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            )
            if (isPasswordCorrect) {
              return user
            } else {
              throw new Error("Wrong Credentials!")
            }
          } else {
            console.error()
            throw new Error("User not found!");
          }
        } catch (error) {
          throw new Error(error)
        }
      }
    })
  ],
  pages:{
    error: "/dashboard/login"
  }
}

const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST }
export const GET = handler;
export const POST = handler;
