import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface SPrice {
  count: number;
  price: number;
  total: number;
  addCount: () => void;
  addPrice: () => void;
  getTotal: () => number;
  getFetchData: () => Promise<string>;
}
//
export const PriceStore = create<SPrice>()(
  immer(
    persist(
      (set, get) => ({
        count: 0,
        price: 0,
        total: 0,
        addCount: () =>
          set((state) => {
            state.count++;
          }),
        addPrice: () => set((state) => ({ price: state.price + 1 })),
        getTotal: () => get().price * get().count,
        getFetchData: async () => {
          const json = await fetch('https://api.github.com/users/1');
          const stringData = await json.json();
          return stringData.name as string;
        }
      }),
      {
        name: 'Carts',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
);
