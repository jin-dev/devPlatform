import { Session } from 'next-auth'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Store {
  data: string[]
  setData: (data: string[]) => void
  session: Session | null
  setSession: (session: Session | null) => void
}

const useStore = create<Store>((set) => ({
  data: [],
  session: null,
  setData: (data) => set({ data }),
  setSession: (session) => set({ session }),
}))

export default useStore
