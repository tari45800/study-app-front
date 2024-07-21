import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainTodo } from '../../../widget/mainTodo';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const MainPage = () => {
  return (
    <MainPageContainer>
      <div className="mainName">나는 메인 페이지</div>
      <MainTodo></MainTodo>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  border: 0.5rem solid red;
  padding: 1rem;
  .mainName {
    font-size: 2rem;
    font-weight: bold;
  }
`;
