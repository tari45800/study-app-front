import { create } from 'zustand';

//--------------------------------------------------
// 현재 시간 스토어
interface TimeState {
  departureTime: string;
  arrivalTime: string;
  setDepartureTime: (time: string) => void;
  setArrivalTime: (time: string) => void;
}

export const useTimeStore = create<TimeState>((set) => ({
  departureTime: '',
  arrivalTime: '',
  setDepartureTime: (time) => set(() => ({ departureTime: time })),
  setArrivalTime: (time) => set(() => ({ arrivalTime: time })),
}));

//--------------------------------------------------
// 다크모드 스토어
interface ThemeState {
  isDarkMode: boolean; // boolean 타입으로 수정
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: false, // 초기 상태는 라이트 모드로 설정
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })), // 토글 기능
}));

//--------------------------------------------------
// 여행지 정보 스토어
interface FlightState {
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

export const flightStore = create<FlightState>((set) => ({
  flightTime: getInitialFlightTime(),
  changeFlightTime: (newTime) => set(() => ({ flightTime: newTime })),
}));

//--------------------------------------------------
// 타이머 스토어

interface TimerState {
  seconds: number; // 기본 타이머 시간 (감소하는 타이머)
  pausedTimerSeconds: number; // 일시정지 타이머 시간 (증가하는 타이머)
  isRunning: boolean; // 기본 타이머 실행 여부
  isPaused: boolean; // 타이머가 일시정지 상태인지 여부
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  decrementTimer: () => void;
  incrementPausedTimer: () => void;
  initializeTimer: () => void; // 추가: 타이머 초기화 함수
}

// 시간을 초 단위로 변환하는 함수
const timeStringToSeconds = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60;
};

export const useTimerStore = create<TimerState>((set, get) => {
  return {
    seconds: 0,
    pausedTimerSeconds: 0,
    isRunning: false,
    isPaused: false,

    initializeTimer: () => {
      const arrivalInfo = JSON.parse(
        localStorage.getItem('arrivalInfo') || '{"time": "00:00"}',
      );
      const initialSeconds = timeStringToSeconds(arrivalInfo.time);
      set({ seconds: initialSeconds });
      localStorage.setItem('timerSeconds', String(initialSeconds));
    },

    startTimer: () => {
      const { isPaused, isRunning } = get();
      if (!isRunning) {
        set({ isRunning: true, isPaused: false });
        const timerId = setInterval(() => {
          const { decrementTimer, isRunning } = get();
          if (isRunning) {
            decrementTimer();
          }
        }, 1000);
        localStorage.setItem('timerId', String(timerId));
      } else if (isPaused) {
        const pausedTimerId = Number(localStorage.getItem('pausedTimerId'));
        if (pausedTimerId) clearInterval(pausedTimerId);
      }
    },

    stopTimer: () => {
      const { isRunning } = get();
      if (isRunning) {
        set({ isRunning: false, isPaused: true });
        clearInterval(Number(localStorage.getItem('timerId')));

        const existingPausedTimerId = Number(
          localStorage.getItem('pausedTimerId'),
        );
        if (existingPausedTimerId) {
          clearInterval(existingPausedTimerId);
        }

        const pausedTimerId = setInterval(() => {
          const { incrementPausedTimer, isPaused } = get();
          if (isPaused) {
            incrementPausedTimer();
          }
        }, 1000);
        localStorage.setItem('pausedTimerId', String(pausedTimerId));
      }
    },

    resetTimer: () => {
      const arrivalInfo = JSON.parse(
        localStorage.getItem('arrivalInfo') || '{"time": "00:00"}',
      );
      const initialSeconds = timeStringToSeconds(arrivalInfo.time);

      set({
        seconds: initialSeconds,
        pausedTimerSeconds: 0,
        isRunning: false,
        isPaused: false,
      });
      localStorage.setItem('timerSeconds', String(initialSeconds));
      localStorage.setItem('pausedTimerSeconds', '0');
      clearInterval(Number(localStorage.getItem('timerId')));
      clearInterval(Number(localStorage.getItem('pausedTimerId')));
    },

    decrementTimer: () => {
      set((state) => {
        const newSeconds = Math.max(state.seconds - 1, 0);
        localStorage.setItem('timerSeconds', String(newSeconds));
        return { seconds: newSeconds };
      });
    },

    incrementPausedTimer: () => {
      set((state) => {
        const newPausedSeconds = state.pausedTimerSeconds + 1;
        localStorage.setItem('pausedTimerSeconds', String(newPausedSeconds));
        return { pausedTimerSeconds: newPausedSeconds };
      });
    },
  };
});
