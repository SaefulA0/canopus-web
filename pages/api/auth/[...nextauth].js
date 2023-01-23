import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "login",
      async authorize(credentials) {
        try {
          const res = await fetch("http://canopusapi.test/api/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const login = await res.json();
          const user = login.data;

          if (user) {
            return user;
          }
          return null;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.token = user.token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.token = token.token;
      session.user = token.user;

      return session;
    },
    async signIn({ user }) {
      const users = user.user;

      if (users.username) {
        return true;
      }
      return false;
    },
  },
});
