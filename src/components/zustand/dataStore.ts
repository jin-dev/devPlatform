import { create } from 'zustand'
import DataItem from '../../type/types'

interface Store {
  data: DataItem[]
  setData: (data: DataItem[]) => void
}

const useStore = create<Store>((set) => ({
  data: [],
  setData: (data) => set({ data }),
}))

export default useStore
