import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import supabase from '@/supabase';
// Initialize NextAuth

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async signIn({ user }) {
      const { error } = await supabase
        .from('users')
        .insert({ name: user.name, email: user.email, image: user.image });
      return true;
    },
    async session({ session }) {
      console.log('SESSION', session);
      let { user } = session;
      const { data, error } = await supabase.from('users').select().eq('email', user?.email);
      let obj = {
        ...session,
        data,
        error,
      };
      return obj;
    },
  },
});
