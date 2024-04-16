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
    text-align: left;
  }

  .input-box {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.gray_CCD5E3};
    padding: 18px 15px;

    &:focus-within {
      border: 1px solid ${({ theme }) => theme.color.violet_6D6AFE};
    }
  }

  &.error {
    .input-box {
      border: 1px solid ${({ theme }) => theme.color.red_FF5B56};
    }
  }

  input {
    width: calc(100% - 24px);
    font-size: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray_9FA6B2};
    }
  }

  .input-error {
    font-size: 1.4rem;
    text-align: left;
    margin-top: 8px;
    color: ${({ theme }) => theme.color.red_FF5B56};
  }
`;
