import styled from 'styled-components';

export const AuthArea = styled.div`
  padding: 230px 0 200px;
  background: ${({ theme }) => theme.color.gray_F0F6FF};
`;

export const AuthLogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    margin-bottom: 16px;
  }

  h2 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.6rem;
    font-weight: 400;

    a {
      color: ${({ theme }) => theme.color.violet_6D6AFE};
      text-decoration: underline;
      font-weight: 600;
    }
  }
`;

export const AuthFormWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    max-width: 520px;
    width: 100%;

    & > div ~ div {
      margin-top: 24px;
    }

    .submit-button {
      margin-top: 30px;
      font-family: ${({ theme }) => theme.font.pretendard_100};
      color: ${({ theme }) => theme.color.gray_E7EFFB};
    }
  }
`;
