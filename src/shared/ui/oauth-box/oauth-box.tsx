import { useRouter } from 'next/router';

import * as S from './oauth-box-style';

const CLIENT_ID = '9NjBfBE6YM2diWzMy19n';

const CALLBACK_URL = 'http://localhost:3000/test';

const OauthBox = () => {
  const router = useRouter();

  const goNaverLogin = () => {
    router.push(
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URL}&state=asd2222222`,
    );
  };
  return (
    <S.OauthBox>
      <p>소셜 로그인</p>
      <div className='button-box'>
        <button type='button' onClick={goNaverLogin}>
          네이버
        </button>
      </div>
    </S.OauthBox>
  );
};

export { OauthBox };
