import React from 'react';
import styled from 'styled-components';

export const LoginPage = () => {
  return <LoginPageContainer>나는 로그인 페이지</LoginPageContainer>;
};

const LoginPageContainer = styled.div`
  border: 0.5rem solid blue;
  padding: 1rem;
  margin-top: 1rem;
  color: var(--text-color);
`;
