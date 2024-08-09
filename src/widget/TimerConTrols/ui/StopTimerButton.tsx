import { useTimerStore } from '../../../app/appStore';

export const StopTimerButton = () => {
  const { stopTimer, startTimer, isRunning } = useTimerStore();

  const handleToggle = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isRunning ? 'Stop Timer' : 'Start Timer'}
      </button>
    </div>
  );
};
