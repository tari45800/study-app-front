import { useTimerStore } from '../../app/appStore';
import { useConfirmModal } from './useConfirmModal';
import { useNavigate } from 'react-router-dom';

type Props = {
  title: string;
  to: string;
};

export const TimerEndModal = ({ title, to }: Props) => {
  const { seconds, resetTimer } = useTimerStore();

  const logoutModal = useConfirmModal();
  const navigate = useNavigate();

  const onConfirm = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (seconds !== 0) {
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

  return <div onClick={onConfirm}>{title}</div>;
};
