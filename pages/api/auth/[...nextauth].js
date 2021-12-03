import NextAuth from 'next-auth';

import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    // Providers.Email({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    })
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
  theme: 'dark',
  debug: false,
});
