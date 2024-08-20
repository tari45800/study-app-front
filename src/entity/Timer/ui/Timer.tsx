import { useEffect } from 'react';
import styled from 'styled-components';
import { useTimerStore } from '../../../app/appStore';

export const Timer = () => {
  const { seconds, startTimer, stopTimer, isRunning } = useTimerStore();

  useEffect(() => {
    startTimer(); // 컴포넌트 마운트 시 타이머 자동 시작

    return () => stopTimer(); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours}시간 ${minutes}분 ${remainingSeconds}초`;
    } else if (minutes > 0) {
      return `${minutes}분 ${remainingSeconds}초`;
    } else {
      return `${remainingSeconds}초`;
    }
  };

  return (
    <TimerContainer>
      <div>{formatTime(seconds)}</div>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
