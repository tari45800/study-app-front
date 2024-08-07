import { useQuery } from '@tanstack/react-query';
import { create } from 'zustand';

interface Store {
  count: number;
  incrementCount: () => void;
  removeCount: () => void;
}

export const appStore = create<Store>((set) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  removeCount: () => set({ count: 0 }),
}));

// flightVal 타입 정의
interface flightVal {
  flightTime: string;
  changeFlightTime: (newTime: string) => void;
}

const getInitialFlightTime = () => {
  const storedArrivalInfo = localStorage.getItem('arrivalInfo');
  if (storedArrivalInfo) {
    const arrivalInfo = JSON.parse(storedArrivalInfo);
    return arrivalInfo.time;
  }

  return '01:30'; // 기본값
};

export const flightStore = create<flightVal>((set) => ({
  flightTime: getInitialFlightTime(),
  changeFlightTime: (newTime) => set(() => ({ flightTime: newTime })),
}));
