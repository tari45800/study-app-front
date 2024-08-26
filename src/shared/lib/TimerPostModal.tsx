import styled from 'styled-components';
import { useTimerStore } from '../../app/appStore';
import { useConfirmModal } from './useConfirmModal';
import { useNavigate } from 'react-router-dom';
import { postData } from './server/api/apis';

interface Todo {
  todoId: number;
  todoContent: string;
  todoState: boolean;
}

interface PostDatas {
  userId: number;
  flightTime: string;
  departureTime: string;
  arrivalTime: string;
  delayTime: string;
  todos: Todo[];
}

type Props = {
  children: React.ReactNode;
  to: string;
  postDatas: PostDatas; // 프롭스로 postData를 전달받음
};

export const TimerPostModal = ({ children, to, postDatas }: Props) => {
  const { isRunning, isPaused, resetTimer } = useTimerStore();

  const logoutModal = useConfirmModal();
  const navigate = useNavigate();

  const onConfirm = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRunning || isPaused) {
      logoutModal.show({
        title: '타이머를 종료합니다.',
        onConfirm: () => {
          postData('/timerPost', postDatas);
          logoutModal.remove();
          resetTimer();
          navigate(to);
        },
        onCancel: () => logoutModal.remove(),
        confirmText: '종료하기',
        cancelText: '계속하기',
      });
    } else {
      navigate(to);
    }
  };

  return (
    <TimerEndModalContainer>
      <div onClick={onConfirm}>{children}</div>
    </TimerEndModalContainer>
  );
};

const TimerEndModalContainer = styled.div`
  cursor: pointer;
`;
