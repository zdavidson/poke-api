import { PokemonType } from "@/utils/fetch";
import { create } from "zustand";

interface FavoritesState {
  favoritePokemon: PokemonType[];
  toggleFavorite: (pokemon: PokemonType) => void;
  isFavorite: (name: string) => boolean;
}

export const usePokemonFavorites = create<FavoritesState>((set, get) => ({
  favoritePokemon: [],
  toggleFavorite: (pokemon) => {
    const { favoritePokemon: favorites } = get();

    const doesExist = favorites.find(
      (p: PokemonType) => p.name === pokemon.name
    );

    if (doesExist) {
      set({
        favoritePokemon: favorites.filter((p) => p.name !== pokemon.name),
      });
    } else {
      set({ favoritePokemon: [...favorites, pokemon] });
    }
  },
  isFavorite: (name) => get().favoritePokemon.some((p) => p.name === name),
}));
