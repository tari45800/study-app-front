import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { api } from '../../../shared/lib/server/api/api';
import { getData } from '../../../shared/lib/server/api/apis';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const LoginWidget = () => {
  const {
    isPending,
    error,
    data: todoList,
  } = useQuery<Todo[], Error>({
    queryKey: ['todoList'],
    queryFn: () => getData('/login'),
  });

  if (isPending) return 'Loading...';

  if (error) return 'Error...';

  return (
    <LoginWidgetContainer>
      <div>로그인 위젯</div>
      <TodoContainer>
        {todoList &&
          todoList.map((todo) => (
            <div
              className={`todoCard ${todo.completed ? 'completed' : ''}`}
              key={todo.id}
            >
              {todo.title}
            </div>
          ))}
      </TodoContainer>
    </LoginWidgetContainer>
  );
};

const LoginWidgetContainer = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoContainer = styled.div`
  border: 0.1rem solid black;

  .todoCard {
    border: 0.1rem solid black;
    padding: 1rem 0;
  }

  .completed {
    text-decoration-line: line-through;
  }
`;
