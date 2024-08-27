import { useState, useEffect } from 'react';

type CurrentTimeProps = {
  offset?: string;
};

export const CurrentTime = ({ offset }: CurrentTimeProps) => {
  const [time, setTime] = useState(getFormattedTime(offset));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getFormattedTime(offset));
    }, 60000); // 60초마다 업데이트

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
  }, [offset]);

  function getFormattedTime(offset?: string): string {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (offset) {
      const [offsetHours, offsetMinutes] = offset.split(':').map(Number);
      hours += offsetHours;
      minutes += offsetMinutes;

      // Adjust minutes and hours if minutes exceed 59
      if (minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes = minutes % 60;
      }

      // Adjust hours if hours exceed 23
      if (hours >= 24) {
        hours = hours % 24;
      }
    }

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }

  return <div>{time}</div>;
};
