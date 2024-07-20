import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const MainPage = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((json: Todo[]) => {
        // 처음 10개의 항목만 선택
        const limitedTodos = json.slice(0, 10);
        setTodoList(limitedTodos);
      });
  }, []);

  console.log(JSON.stringify(todoList));

  return (
    <MainPageContainer>
      <div>나는 메인 페이지</div>
      <h1>Todo</h1>
      <TodoContainer>
        {todoList.map((todo) => (
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
  border: 0.5rem solid red;
  padding: 1rem;
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
