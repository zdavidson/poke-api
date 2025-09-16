import { create } from "zustand";

const usePokemon = create((set) => ({
  favoritePokemon: [],
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears }),
}));
