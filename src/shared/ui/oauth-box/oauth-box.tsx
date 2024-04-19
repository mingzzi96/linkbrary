// import { useRef } from 'react';

// import { useNaverInit } from '@entities/oauth/hooks';

import { signIn } from 'next-auth/react';

import * as S from './oauth-box-style';

const OauthBox = () => {
  // useNaverInit();
  // const naverButtonRef = useRef<HTMLDivElement>(null);

  // const handleClickNaverLogin = () => {
  //   if (!naverButtonRef || !naverButtonRef.current || !naverButtonRef.current.children) return;

  //   console.log('clicked');
  //   // (naverButtonRef.current.children[0] as HTMLImageElement).click();
  // };
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
