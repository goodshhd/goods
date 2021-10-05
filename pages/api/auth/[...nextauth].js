import NextAuth from 'next-auth';

import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.DATABASE_URL,

  secret: process.env.SECRET,

  session: {
    jwt: true,
  },
  // More info here
  // https://next-auth.js.org/configuration
  jwt: {},
  pages: {},
  callbacks: {},
  events: {},
  theme: 'light',
  debug: false,
});
