import React from 'react';
import styled from 'styled-components';

const MainPageContainer = styled.div`
  border: 0.5rem solid red;
  padding: 1rem;
  margin-top: 1rem;
  color: var(--text-color);
`;

export const MainPage = () => {
  return (
    <MainPageContainer>
      <div>나는 메인 페이지</div>
    </MainPageContainer>
  );
};
