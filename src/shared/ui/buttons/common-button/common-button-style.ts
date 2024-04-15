import styled from 'styled-components';

interface CommonButtonStyleProps {
  $backgroundColor?: string;
}

const CommonButton = styled.button<CommonButtonStyleProps>`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.white_FFFFFF};
  font-weight: 500;
  text-align: center;
  padding: 16px 0;
  border-radius: 8px;
  background: ${(props) => {
    if (props.$backgroundColor === 'gradient') {
      return ({ theme }) => theme.color.gradient;
    }

    if (props.$backgroundColor === 'red') {
      return ({ theme }) => theme.color.red_FF5B56;
    }

    return ({ theme }) => theme.color.violet_6D6AFE;
  }};

  &:disabled {
    background: ${({ theme }) => theme.color.gray_9FA6B2};
  }

  &.large {
    width: 100%;
  }

  &.medium {
    max-width: 128px;
    width: 100%;
  }
`;

export { CommonButton };
