import { useNavigate } from 'react-router-dom';
import { useTimerStore } from '../../../app/appStore';

export const ResetTimerButton = () => {
  const { resetTimer } = useTimerStore();
  const navigate = useNavigate();

  const handleReset = () => {
    resetTimer();
    navigate('/'); // 리셋 후 메인 페이지로 이동
  };

  return (
    <div>
      <button onClick={handleReset}>Reset Timer</button>
    </div>
  );
};
