import { useEffect } from 'react';
import styled from 'styled-components';
import { useTimerStore } from '../../../app/appStore';

export const Timer = () => {
  const {
    seconds,
    initializeTimer,
    pausedTimerSeconds,
    startTimer,
    resetTimer,
  } = useTimerStore();

  useEffect(() => {
    initializeTimer();
  }, []);

  useEffect(() => {
    startTimer();

    return () => {
      resetTimer();
    };
  }, []);

  const formatTime = (seconds: number): string => {
    const totalMinutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${totalMinutes}:${formattedSeconds}`;
  };

  return (
    <TimerContainer>
      <div>
        <div>{formatTime(seconds)}</div>
      </div>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    cursor: pointer;
  }

  h2 {
    margin: 0;
  }
`;
