import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
const useStore = create(devtools(set => ({
  count: 0,
  increaseCount: () => set((state: { count: number; }) => ({count: state.count + 1})),
  decreaseCount: () => set((state: { count: number; }) => ({count: state.count - 1})),
  removeAllCount: () => set({count: 0}),
})));

export default useStore;
