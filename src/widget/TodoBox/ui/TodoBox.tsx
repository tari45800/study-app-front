import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';

interface Todo {
  todoId: number;
  todoContent: string;
  todoState: boolean;
}

export const TodoBox = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [todo, setTodo] = useState<string>('');

  const maxTodoLength = 25;
  const maxTodosCount = 10;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleTodo = (event: ChangeEvent<HTMLInputElement>) => {
    const newTodo = event.target.value;

    if (newTodo.length > maxTodoLength) {
      alert(`최대 ${maxTodoLength}글자까지만 입력할 수 있습니다.`);
      return;
    }

    setTodo(newTodo);
  };

  // 할 일을 추가하는 함수
  const addTodo = () => {
    if (todo.trim() === '') {
      return;
    }

    if (todos.length >= maxTodosCount) {
      alert(`할 일은 최대 ${maxTodosCount}개까지만 추가할 수 있습니다.`);
      return;
    }

    const newTodo: Todo = {
      todoId: todos.length + 1,
      todoContent: todo,
      todoState: false, // 처음엔 완료되지 않은 상태로 설정
    };

    setTodos([...todos, newTodo]);
    setTodo('');
  };

  // 할 일을 삭제하는 함수
  const deleteTodo = (todoId: number) => {
    const updatedTodos = todos.filter((todo) => todo.todoId !== todoId);
    setTodos(updatedTodos);
  };

  // 할 일의 완료 상태를 토글하는 함수
  const toggleComplete = (todoId: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.todoId === todoId ? { ...todo, todoState: !todo.todoState } : todo,
    );
    setTodos(updatedTodos);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const handleBlur = () => {
    addTodo();
  };

  return (
    <TodoBoxContainer>
      <div className="todoBoxContent">
        <div className="todoList">
          {todos &&
            todos.map((el) => {
              return (
                <div
                  key={el.todoId}
                  className={`todoItem ${el.todoState ? 'completed' : ''}`}
                >
                  <input
                    type="checkbox"
                    className="todoCheckbox"
                    checked={el.todoState}
                    onChange={() => toggleComplete(el.todoId)}
                  />
                  <span>{el.todoContent}</span>
                  <button
                    onClick={() => deleteTodo(el.todoId)}
                    className="deleteButton"
                  >
                    x
                  </button>
                </div>
              );
            })}
          <input
            className="addTodo"
            type="text"
            value={todo}
            onChange={handleTodo}
            onKeyPress={handleKeyPress}
            onBlur={handleBlur}
            placeholder="+ 할 일 추가"
            style={{ width: `${todo.length * 0.65}rem` }}
          />
        </div>
      </div>
    </TodoBoxContainer>
  );
};

const TodoBoxContainer = styled.div`
  width: 100%;
  height: 100%;

  .todoBoxContent {
    max-height: 8rem;
    display: flex;
    align-items: start;
    gap: 0.5rem;
    overflow: scroll;
  }

  .todoList {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .todoItem {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    height: 2rem;
    border-radius: 0.7rem;
    background-color: var(--background-color);
    color: var(--light-text-color);
    font-size: 0.7rem;

    &.completed span {
      text-decoration: line-through;
    }

    .deleteButton {
      margin-left: 0.5rem;
      color: var(--light-text-color);
      cursor: pointer;
    }
  }

  .addTodo {
    padding: 0.5rem;
    min-width: 5rem;
    height: 2rem;
    color: var(--light-text-color);
    font-size: 0.7rem;
    border: none;
    border-radius: 0.7rem;
    background-color: var(--background-color);
    cursor: pointer;
  }
`;
