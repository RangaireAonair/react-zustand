import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { useStore } from 'zustand/react';

type PositionStoreState = { position: { x: number; y: number } };

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState['position']) => void;
};

type PositionStore = PositionStoreState & PositionStoreActions;

const usePositionStore = create<PositionStore>()(
  subscribeWithSelector((set) => ({
    position: { x: 0, y: 0 },
    setPosition: (position) => set({ position })
  }))
);

export const usePosition = () => useStore(usePositionStore, (state) => state.position);
export const useSetPosition = () => useStore(usePositionStore, (state) => state.setPosition);
export default usePositionStore;
