import { Session } from 'next-auth'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Store {
  data: string[]
  setData: (data: string[]) => void
  session: Session | null
  setSession: (session: Session | null) => void
}

const useStore = create<Store, [['zustand/persist', Store]]>(
  persist(
    (set) => ({
      data: [],
      session: null,
      setData: (data) => set({ data }),
      setSession: (session) => set({ session }),
    }),
    {
      name: 'zustand-store', // name of the storage (localStorage) key
      getStorage: () => sessionStorage, // or sessionStorage
    },
  ),
)

export default useStore
