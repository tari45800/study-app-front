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

export const MainTodo = () => {
  const {
    isPending,
    error,
    data: todoList,
  } = useQuery<Todo[], Error>({
    queryKey: ['main'],
    queryFn: () => getData('user'),
  });

  // const [todoList, setTodoList] = useState<Todo[]>([]);
  //
  // useEffect(() => {
  //   fetch('https://example.com/user')
  //     .then((res) => res.json())
  //     .then((json: Todo[]) => {
  //       // 처음 10개의 항목만 선택
  //       const limitedTodos = json.slice(0, 10);
  //       setTodoList(limitedTodos);
  //     });
  // }, []);

  // console.log(JSON.stringify(todoList));

  if (isPending) return 'Loading...';

  if (error) return 'Error...';

  return (
    <MainPageContainer>
      <div>나는 메인 투두 위젯</div>
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
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  margin-top: 1rem;
  color: var(--text-color);
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
