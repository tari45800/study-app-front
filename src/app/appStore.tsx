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

interface TimerState {
  seconds: number;
  isRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  incrementTimer: () => void;
}

export const useTimerStore = create<TimerState>((set, get) => ({
  seconds: parseInt(localStorage.getItem('timerSeconds') || '0', 10),
  isRunning: true, // 기본적으로 타이머가 자동으로 시작

  startTimer: () => {
    if (!get().isRunning) {
      set({ isRunning: true });
      const timerId = setInterval(() => {
        const { incrementTimer, isRunning } = get();
        if (isRunning) {
          incrementTimer();
        }
      }, 1000);
      localStorage.setItem('timerId', String(timerId));
    }
  },

  stopTimer: () => {
    set({ isRunning: false });
    clearInterval(Number(localStorage.getItem('timerId')));
  },

  resetTimer: () => {
    set({ seconds: 0, isRunning: false });
    localStorage.setItem('timerSeconds', '0');
    clearInterval(Number(localStorage.getItem('timerId')));
  },

  incrementTimer: () => {
    set((state) => {
      const newSeconds = state.seconds + 1;
      localStorage.setItem('timerSeconds', String(newSeconds));
      return { seconds: newSeconds };
    });
  },
}));
