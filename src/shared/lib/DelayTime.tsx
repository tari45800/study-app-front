import React, { useState, useEffect } from 'react';
import { useTimerStore } from '../../app/appStore';
import { useTimeStore } from '../../app/appStore';

interface DelayTimeProps {
  includePausedTimerSeconds?: boolean; // pausedTimerSeconds를 더할지 여부
  offset?: string; // 추가로 더할 시간 ("HH:MM" 형식)
  updateTarget: 'departureTime' | 'arrivalTime'; // 업데이트할 타겟 설정
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
  updateTarget,
}) => {
  const { pausedTimerSeconds } = useTimerStore(); // 타이머 스토어에서 pausedTimerSeconds 가져옴
  const { setDepartureTime, setArrivalTime } = useTimeStore(); // 타임 스토어에서 set 함수들 가져옴
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
    const newDelayTime = calculateDelayTime(
      includePausedTimerSeconds ? pausedTimerSeconds : 0,
    );
    setDelayTime(newDelayTime);

    // 업데이트할 타겟에 따라 해당 시간 설정 함수 호출
    if (updateTarget === 'departureTime') {
      setDepartureTime(newDelayTime);
    } else if (updateTarget === 'arrivalTime') {
      setArrivalTime(newDelayTime);
    }
  }, [
    pausedTimerSeconds,
    includePausedTimerSeconds,
    initialTimeInSeconds,
    setDepartureTime,
    setArrivalTime,
    updateTarget,
  ]);

  return <div>{delayTime}</div>;
};
