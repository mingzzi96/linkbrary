import styled from 'styled-components';

export const LoginFormWrap = styled.div`
  max-width: 520px;
  width: 100%;

  form {
    width: 100%;

    & > div ~ div {
      margin-top: 24px;
    }

    .submit-button {
      margin-top: 30px;
    }
  }
`;
