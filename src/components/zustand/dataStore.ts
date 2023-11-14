import { create } from 'zustand'

interface Store {
  data: string[]
  setData: (data: string[]) => void
}

const useStore = create<Store>((set) => ({
  data: [],
  setData: (data) => set({ data }),
}))

export default useStore
