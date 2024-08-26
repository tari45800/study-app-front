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
    return `${totalMinutes}분 ${formattedSeconds}초`;
  };

  return <TimerContainer>{formatTime(seconds)}</TimerContainer>;
};

const TimerContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: var(--background-color);
  padding: 0.5rem 1rem;
  border-radius: var(--background-radius);
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 1px 3px;

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
