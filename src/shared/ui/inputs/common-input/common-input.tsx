import { ReactNode, forwardRef } from 'react';

import * as S from './style/common-input-style';

interface CommonInputProps {
  id: string;
  inputType: string;
  placeholder: string;
  errorMessage?: ReactNode;
}

const CommonInput = forwardRef<HTMLInputElement, CommonInputProps>(
  ({ id, inputType, placeholder, errorMessage, ...rest }, ref) => {
    return (
      <S.CommonInputWrap>
        <div>
          <input ref={ref} id={id} type={inputType} placeholder={placeholder} {...rest} />
        </div>
        {errorMessage && <p className='input-error'>{errorMessage}</p>}
      </S.CommonInputWrap>
    );
  },
);

CommonInput.displayName = 'CommonInput';

CommonInput.defaultProps = {
  errorMessage: undefined,
};

export { CommonInput };
