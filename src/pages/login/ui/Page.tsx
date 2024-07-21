import React from 'react';
import styled from 'styled-components';
import { LoginWidget } from '../../../widget/loginWidget';

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <h1>나는 로그인 페이지</h1>
      <LoginWidget />
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  border: 0.5rem solid blue;
  padding: 1rem;
  margin-top: 1rem;
  color: var(--text-color);
`;
