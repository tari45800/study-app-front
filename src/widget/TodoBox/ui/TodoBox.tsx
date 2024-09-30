import {
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  CompositionEvent,
} from 'react';
import styled from 'styled-components';
import { getStoragedData } from '../../../shared/lib/getStorageData';

interface Props {
  todoId: number;
  todoContent: string;
  todoState: boolean;
}

export const TodoBox = () => {
  // 투두 인풋 스테이트
  const [todoInput, setTodoInput] = useState<string>('');
  const [isComposing, setIsComposing] = useState<boolean>(false); // 한글 입력 중인지 여부

  // 투두 배열 스테이트
  const [todoList, setTodoList] = useState<Props[]>(() => {
    const storageTodos = getStoragedData<Props[]>('todos');
    return storageTodos ? storageTodos : [];
  });

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  // 투두 문자열 길이
  const maxTodoLength = 25;
  // 투두를 추가 할 수 있는 갯수
  const maxTodosCount = 10;

  // 할 일을 추가하는 함수
  const addTodo = () => {
    if (todoInput.trim() === '') {
      return;
    }

    if (todoList.length >= maxTodosCount) {
      alert(`할 일은 최대 ${maxTodosCount}개까지만 추가할 수 있습니다.`);
      return;
    }

    const newTodo: Props = {
      todoId: todoList.length + 1,
      todoContent: todoInput,
      todoState: false, // 초기는 완료되지 않은 상태로 설정
    };

    setTodoList([...todoList, newTodo]);
    setTodoInput('');
  };

  // 할 일을 삭제하는 함수
  const deleteTodo = (todoId: number) => {
    const updatedTodos = todoList.filter((todo) => todo.todoId !== todoId);
    setTodoList(updatedTodos);
  };

  // 할 일의 완료 상태를 토글하는 함수
  const toggleComplete = (todoId: number) => {
    const updatedTodos = todoList.map((todo) =>
      todo.todoId === todoId ? { ...todo, todoState: !todo.todoState } : todo,
    );
    setTodoList(updatedTodos);
  };

  // 인풋의 변화를 감지하는 함수
  const handleTodo = (event: ChangeEvent<HTMLInputElement>) => {
    const newTodo = event.target.value;

    if (newTodo.length > maxTodoLength) {
      alert(`최대 ${maxTodoLength}글자까지만 입력할 수 있습니다.`);
      return;
    }

    setTodoInput(newTodo);
  };

  // 엔터를 눌리면 투두를 추가하는 함수
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isComposing) {
      addTodo();
    }
  };

  // 포커스가 나간다면 투두를 추가하는 함수
  const handleBlur = () => {
    if (!isComposing) {
      addTodo();
    }
  };

  // 한글 입력이 시작될 때
  const handleCompositionStart = (
    event: CompositionEvent<HTMLInputElement>,
  ) => {
    setIsComposing(true);
  };

  // 한글 입력이 끝났을 때
  const handleCompositionEnd = (event: CompositionEvent<HTMLInputElement>) => {
    setIsComposing(false);
    setTodoInput(event.currentTarget.value);
  };

  return (
    <TodoBoxContainer>
      <div className="todoBoxContent scroll">
        {/* 투두 리스트 */}
        <div className="todoList">
          {todoList &&
            todoList.map((el) => {
              return (
                <div
                  key={el.todoId}
                  className={`todoItem ${el.todoState ? 'completed' : ''}`}
                >
                  {/* 체크박스 */}
                  <input
                    type="checkbox"
                    className="todoCheckbox"
                    checked={el.todoState}
                    onChange={() => toggleComplete(el.todoId)}
                  />

                  {/* 투두 */}
                  <span>{el.todoContent}</span>

                  {/* 삭제버튼 */}
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
            value={todoInput}
            onChange={handleTodo}
            onKeyDown={handleKeyPress}
            onBlur={handleBlur}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            placeholder="+ 할 일 추가"
            style={{ width: `${todoInput.length * 0.65}rem` }}
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
    height: 2rem;
    display: flex;
    align-items: center;
    padding: 0.5rem;

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
    min-width: 5rem;
    height: 2rem;
    padding: 0.5rem;

    border: none;
    border-radius: 0.7rem;
    color: var(--light-text-color);
    background-color: var(--background-color);
    font-size: 0.7rem;
    cursor: pointer;
  }
`;
