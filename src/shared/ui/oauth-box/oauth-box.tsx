import { signIn } from 'next-auth/react';

import * as S from './oauth-box-style';

const OauthBox = () => {
  return (
    <S.OauthBox>
      <p>소셜 로그인</p>
      <div className='button-box'>
        <button
          type='button'
          onClick={() =>
            signIn('naver', {
              redirect: false,
              callbackUrl: 'https://linkbrary-neon.vercel.app/api/auth/callback/naver',
            })
          }
        >
          네이버
        </button>
      </div>
    </S.OauthBox>
  );
};

export { OauthBox };
