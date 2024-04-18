import { ReactNode } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import * as S from './common-button-style';

interface CommonButtonProps {
  onClickHandler?: (() => void) | SubmitHandler<FieldValues>;
  children: ReactNode;
  size?: string;
  backgroundColor?: string;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
}

/**
 *
 * @param onClickHandler
 * @param children
 * @param size
 * @param backgroundColor
 * @param buttonType
 * @returns
 */

const CommonButton = ({
  onClickHandler,
  children,
  size = 'large',
  backgroundColor = 'violet',
  buttonType = 'button',
  className,
}: CommonButtonProps) => {
  return (
    <S.CommonButton
      type={buttonType}
      className={`${size} ${className}`}
      $backgroundColor={backgroundColor}
      onClick={onClickHandler}
    >
      {children}
    </S.CommonButton>
  );
};

export { CommonButton };
