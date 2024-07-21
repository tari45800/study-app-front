import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const LoginWidget = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('https://example.com/login')
      .then((res) => res.json())
      .then((json: Todo[]) => {
        // 처음 10개의 항목만 선택
        const limitedTodos = json.slice(0, 10);
        setTodoList(limitedTodos);
      });
  }, []);

  console.log(JSON.stringify(todoList));

  return (
    <LoginWidgetContainer>
      <div>로그인 위젯</div>
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
