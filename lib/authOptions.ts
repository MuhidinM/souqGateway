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

        // Fetch user data from API
        const res = await fetch("http://192.168.2.78:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        // Check for successful login
        if (!res.ok) throw new Error("Invalid credentials");

        // Parse user data from response
        const user: { id: string; name: string; email: string } =
          await res.json();

        // Return user object
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
