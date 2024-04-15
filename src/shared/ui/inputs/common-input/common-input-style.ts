import styled from 'styled-components';

interface CommonInputWrapProps {
  $errorMessage?: string; // errorMessage props의 타입을 정의합니다.
}

export const CommonInputWrap = styled.div<CommonInputWrapProps>`
  width: 100%;

  label {
    font-size: 1.4rem;
    margin-bottom: 12px;
    display: block;
  }

  .input-box {
    width: 100%;
    font-size: 1.6rem;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.gray_CCD5E3};

    &:focus-within {
      border: 1px solid ${({ theme }) => theme.color.primary_6D6AFE};
    }
  }

  &.error {
    .input-box {
      border: 1px solid ${({ theme }) => theme.color.red_FF5B56};
    }
  }

  input {
    width: 100%;
    padding: 18px 15px;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray_9FA6B2};
    }
  }

  .input-error {
    font-size: 1.4rem;
    margin-top: 8px;
    color: ${({ theme }) => theme.color.red_FF5B56};
  }
`;
