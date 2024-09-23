import { useState, useEffect } from 'react';

const getFormattedTime = (offset?: string): string => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (offset) {
    const [offsetHours, offsetMinutes] = offset.split(':').map(Number);
    hours += offsetHours;
    minutes += offsetMinutes;

    if (minutes >= 60) {
      hours += Math.floor(minutes / 60);
      minutes = minutes % 60;
    }

    if (hours >= 24) {
      hours = hours % 24;
    }
  }

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}`;
};

export const useCurrentTime = (offset?: string) => {
  const [time, setTime] = useState(getFormattedTime(offset));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getFormattedTime(offset));
    }, 60000); // 60초마다 업데이트

    return () => clearInterval(intervalId);
  }, []);

  return time;
};
