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
        <button onClick={handleClickNaver} type='button'>
          네이버
        </button>
      </div>
    </S.OauthBox>
  );
};

export { OauthBox };
