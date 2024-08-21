import styled from 'styled-components';
import { useTimerStore } from '../../app/appStore';
import { useConfirmModal } from './useConfirmModal';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: string;
};

export const TimerEndModal = ({ children, to }: Props) => {
  const { isRunning, resetTimer } = useTimerStore();

  const logoutModal = useConfirmModal();
  const navigate = useNavigate();

  const onConfirm = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRunning) {
      logoutModal.show({
        title: '타이머가 종료됩니다!',
        onConfirm: () => {
          logoutModal.remove(), resetTimer(), navigate(to);
        },
        onCancel: () => logoutModal.remove(),
        confirmText: '떠나기',
        cancelText: '머무르기',
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
