import { ReactNode, forwardRef } from 'react';

import * as S from './common-input-style';

interface CommonInputProps {
  label?: string;
  id: string;
  inputType: string;
  placeholder: string;
  errorMessage?: ReactNode;
}

const CommonInput = forwardRef<HTMLInputElement, CommonInputProps>(
  ({ label, id, inputType, placeholder, errorMessage, ...rest }, ref) => {
    return (
      <S.CommonInputWrap className={errorMessage ? 'error' : ''}>
        {label && <label htmlFor={id}>{label}</label>}
        <div className='input-box'>
          <input ref={ref} id={id} type={inputType} placeholder={placeholder} {...rest} />
        </div>
        {errorMessage && (
          <p aria-live='assertive' className='input-error'>
            {errorMessage}
          </p>
        )}
      </S.CommonInputWrap>
    );
  },
);

CommonInput.displayName = 'CommonInput';

CommonInput.defaultProps = {
  errorMessage: undefined,
};

export { CommonInput };
