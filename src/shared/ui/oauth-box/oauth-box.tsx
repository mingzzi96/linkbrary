import { MouseEvent } from 'react';

import * as S from './oauth-box-style';

interface OauthBoxProps {
  explainText: string;
  handleClickNaver: (e: MouseEvent<HTMLElement>) => void;
}

const OauthBox = ({ explainText, handleClickNaver }: OauthBoxProps) => {
  return (
    <S.OauthBox>
      <p>{explainText}</p>
      <div className='button-box'>
        <button onClick={handleClickNaver} type='button' className='oauth-button--naver'>
          <img alt='네이버로 로그인하기' src='./assets/images/icons/naver_logo.png' />
        </button>
      </div>
    </S.OauthBox>
  );
};

export { OauthBox };
