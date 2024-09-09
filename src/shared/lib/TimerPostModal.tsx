import styled from 'styled-components';
import { useTimerStore } from '../../app/appStore';
import { useConfirmModal } from './useConfirmModal';
import { useNavigate } from 'react-router-dom';
import { postData } from './server/api/apis';
import { arrivalInfoType } from '../../shared/model/type';

interface Todo {
  todoId: number;
  todoContent: string;
  todoState: boolean;
}

interface PostDatas {
  userId: number;
  arrivalInfo: arrivalInfoType;
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
  const onConfirm = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRunning || isPaused) {
      logoutModal.show({
        title: '타이머를 종료합니다.',
        onConfirm: async () => {
          try {
            await postData('/timerPost', postDatas); // postData 요청
            localStorage.removeItem('todos'); // postData 요청 후 todos 삭제
          } catch {
            alert('포스트 요청에 실패했습니다.');
            logoutModal.remove();
            resetTimer();
            navigate('/');
          }
          logoutModal.remove();
          resetTimer();
          navigate(to); // postData가 완료된 후에 navigate 실행
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
