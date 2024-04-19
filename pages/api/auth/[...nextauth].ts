import NextAuth from 'next-auth/next';
import NaverProvider from 'next-auth/providers/naver';

import { API_NAVER_CLIENT_ID, API_NAVER_CLIENT_SECRET } from '@shared/constants/oauth';

const options = {
  providers: [
    NaverProvider({
      clientId: API_NAVER_CLIENT_ID,
      clientSecret: API_NAVER_CLIENT_SECRET,
    }),
    // 다른 인증 프로바이더들을 여기에 추가할 수 있습니다.
  ],
  // 필요한 추가적인 옵션들을 설정할 수 있습니다.
};

export default NextAuth(options);
