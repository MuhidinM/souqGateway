import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt, { JwtPayload } from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        if (!email || !password) {
          throw new Error("Missing username or password");
        }
        // const user = await prismadb.user.findUnique({

        if (!email || !password) {
          console.log("Missing username or password");
          throw new Error("Missing username or password");
        }

        // Fetch user data from API
        const res = await fetch("http://192.168.2.78:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: email, password }),
        });

        // Check for successful login
        if (!res.ok) throw new Error("Invalid credentials");

        // Parse user data from response
        const userData = await res.json();
        const { token } = userData;
        const decodedData = jwt.decode(token) as JwtPayload;
        console.log(decodedData);

        if (!decodedData) {
          return null;
        }

        return {
          id: decodedData.user_id || "",
          email: decodedData.email_address,
          name: decodedData.email_address,
          role: decodedData.role,
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          name: u.name,
          email: u.email,
          role: u.role,
        };
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth",
  },
};
