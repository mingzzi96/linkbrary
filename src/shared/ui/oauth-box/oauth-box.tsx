// import { useRef } from 'react';

// import { useNaverInit } from '@entities/oauth/hooks';

import { signIn, useSession } from 'next-auth/react';

import * as S from './oauth-box-style';

const OauthBox = () => {
  const { data } = useSession();

  console.log(data);
  return (
    <S.OauthBox>
      <p>소셜 로그인</p>
      <div className='button-box'>
        <button type='button' onClick={() => signIn('naver', { redirect: true, callbackUrl: '/' })}>
          네이버
        </button>
      </div>
    </S.OauthBox>
  );
};

export { OauthBox };
