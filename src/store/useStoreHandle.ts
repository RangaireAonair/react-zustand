import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import type { ZustandHookSelectors } from 'auto-zustand-selectors-hook';

type PriceState = {
  count: number;
  price: number;
};
type PriceAction = {
  setCount: () => void;
  setPrice: () => void;
};
const store = create<PriceState & PriceAction>()(
  immer(
    persist(
      (set) => ({
        count: 0,
        price: 0,
        setCount: () =>
          set((state) => {
            state.count++;
          }),
        setPrice: () =>
          set((state) => {
            state.price++;
          })
      }),
      {
        name: 'useStore test'
      }
    )
  )
);

export const storeWithStore = createSelectorHooks(store) as typeof store &
  ZustandHookSelectors<PriceState & PriceAction>;
