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
      {/* <MainTodo></MainTodo> */}
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  /* border: 0.5rem solid red;
  padding: 1rem;
  .mainName {
    font-size: 2rem;
    font-weight: bold;
  } */
  display: flex;
  justify-content: center;
`;
