import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure session storage options
  session: {
    strategy: "jwt",
    maxAge: 30 * 60, // Set session expiration time to 30 minutes
  },

  // Define authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const res = await fetch("http://127.0.0.1:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (!res.ok) throw new Error("Invalid credentials");

        const user: { id: string; name: string; email: string } =
          await res.json();
        return user;
      },
    }),
  ],

  // Define custom callbacks
  callbacks: {
    // Customize session data
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub, // Access user ID from JWT token
        },
      };
    },

    // Customize JWT token content
    jwt: ({ token, user }) => {
      if (user) {
        const { id, name, email } = user;
        return {
          ...token,
          id,
          name,
          email,
        };
      }
      return token;
    },
  },
};
