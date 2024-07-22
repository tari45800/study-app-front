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
