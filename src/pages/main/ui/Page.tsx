import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainTodo } from '../../../widget/mainTodo';
import { BoardingPass } from '../../../widget/BoardingPass';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const MainPage = () => {
  return (
    <MainPageContainer>
      <BoardingPass />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--spacing-small);
`;
