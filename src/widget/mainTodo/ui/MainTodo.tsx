import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getData } from '../../../shared/lib/server/api/apis';
import { appStore } from '../../../app/appStore';
import { useAlertModal } from '../../../shared/lib';
import { useConfirmModal } from '../../../shared/lib';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const MainTodo = () => {
  const count = appStore((state) => state.count);
  const incrementCount = appStore((state) => state.incrementCount);
  const removeCount = appStore((state) => state.removeCount);

  const {
    isPending,
    error,
    data: todoList,
  } = useQuery<Todo[], Error>({
    queryKey: ['main'],
    queryFn: () => getData('user'),
  });

  const alertModal = useAlertModal(); // useAlertModal을 컴포넌트 최상위에서 호출
  const confirmModal = useConfirmModal();
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

  // const modal = () => {
  //   alertModal.show({
  //     title: '내가만든 모달',
  //     buttonText: '살짜쿵',
  //     onButtonClick: () => {
  //       alertModal.remove();
  //     },
  //   });
  // };

  const modal = () => {
    confirmModal.show({
      title: '내가만든 컨펌 모달',
      onConfirm: () => {
        alert('쪼아');
        confirmModal.remove();
      },

      onCancel: () => {
        alert('취소');
        confirmModal.remove();
      },
    });
  };

  if (isPending) return 'Loading...';

  if (error) return 'Error...';

  return (
    <MainPageContainer>
      <div>나는 메인 투두 위젯</div>
      {count}
      <div>
        <button onClick={incrementCount}>카운트 증가</button>
        <button onClick={removeCount}>카운트 리셋</button>
        <button onClick={modal}>모달</button>
      </div>
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

  button {
    background-color: var(--text-color);
    border-radius: 0.5rem;
    margin: 0.5rem;
    padding: 1rem;
    color: white;
  }
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
