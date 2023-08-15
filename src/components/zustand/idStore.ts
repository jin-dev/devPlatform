import {create } from "zustand";

interface ID {
  id: string;
  setId: (id: string) => void;
}

const IdStore = create<ID>((set) => ({
  id: "init",
  setId: (id) => {
    set((state) => ({ id: id }));
  },
  /*
    setId: (by) => {
    set((state) => ({ id: by }));
  }, // 이게 더 보기 편할 수 있음
  */
}));

export default IdStore;

