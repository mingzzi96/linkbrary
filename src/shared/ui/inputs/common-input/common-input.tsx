import { ReactNode, forwardRef, useState } from 'react';

import Image from 'next/image';

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
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleClickShowPasswordButton = () => {
      setIsShowPassword((prev) => !prev);
    };

    return (
      <S.CommonInputWrap className={errorMessage ? 'error' : ''}>
        {label && <label htmlFor={id}>{label}</label>}
        <div className='input-box'>
          <input ref={ref} id={id} type={isShowPassword ? 'text' : inputType} placeholder={placeholder} {...rest} />
          {inputType === 'password' && (
            <button type='button' onClick={handleClickShowPasswordButton}>
              <Image
                src={
                  isShowPassword ? './assets/images/icons/eye-on-icon.svg' : './assets/images/icons/eye-off-icon.svg'
                }
                alt='비밀번호 보기'
                width={16}
                height={16}
              />
            </button>
          )}
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
