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

export const flight = create<flightVal>((set) => ({
  flightTime: '00h30m',
  changeFlightTime: (newTime) => set(() => ({ flightTime: newTime })),
}));
