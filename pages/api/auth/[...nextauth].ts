import NextAuth from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';

import { API_NAVER_CLIENT_ID, API_NAVER_CLIENT_SECRET } from '@shared/constants/oauth';

const handler = NextAuth({
  providers: [
    NaverProvider({
      clientId: API_NAVER_CLIENT_ID,
      clientSecret: API_NAVER_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
