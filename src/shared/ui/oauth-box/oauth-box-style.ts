import styled from 'styled-components';

const OauthBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.gray_CCD5E3};
  border-radius: 8px;
  padding: 12px 24px;
  background: ${({ theme }) => theme.color.gray_E7EFFB};

  p {
    font-size: 1.4rem;
  }

  .oauth-button {
    width: 42px;
    height: 42px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export { OauthBox };
