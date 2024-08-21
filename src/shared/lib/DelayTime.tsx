import React, { useState, useEffect } from 'react';
import { useTimerStore } from '../../app/appStore';

interface DelayTimeProps {
  includePausedTimerSeconds?: boolean; // pausedTimerSeconds를 더할지 여부
  offset?: string; // 추가로 더할 시간 ("HH:MM" 형식)
}

// HH:MM 형식의 문자열을 초 단위로 변환하는 함수
const timeStringToSeconds = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60;
};

// 초 단위 시간을 HH:MM 형식의 문자열로 변환하는 함수
const secondsToTimeString = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
};

export const DelayTime: React.FC<DelayTimeProps> = ({
  includePausedTimerSeconds = false,
  offset = '00:00',
}) => {
  const { pausedTimerSeconds } = useTimerStore();
  const [initialTimeInSeconds, setInitialTimeInSeconds] = useState(0);
  const [delayTime, setDelayTime] = useState('');

  // 컴포넌트가 마운트될 때 현재 시간을 한 번만 가져옴
  useEffect(() => {
    const now = new Date();
    const initialSeconds = now.getHours() * 3600 + now.getMinutes() * 60;

    // offset을 초 단위로 변환
    const offsetSeconds = timeStringToSeconds(offset);

    // 최초 시간에 offset을 더하여 고정된 시간 설정
    setInitialTimeInSeconds(initialSeconds + offsetSeconds);
  }, [offset]);

  // pausedTimerSeconds가 변화할 때만 DelayTime을 업데이트
  useEffect(() => {
    const calculateDelayTime = (pausedSeconds: number) => {
      const totalSeconds = initialTimeInSeconds + pausedSeconds;
      return secondsToTimeString(totalSeconds);
    };

    // DelayTime 설정
    setDelayTime(
      calculateDelayTime(includePausedTimerSeconds ? pausedTimerSeconds : 0),
    );
  }, [pausedTimerSeconds, includePausedTimerSeconds, initialTimeInSeconds]);

  return <div>{delayTime}</div>;
};
