import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { auth, signIn, signOut, handlers } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: {
        params: {
          scope: 'read:user user:email repo',
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Save access_token to the token
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Add access_token to session
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
});
