export type PokemonType = {
  name: string;
  sprites: { front_default: string };
};

export type AllPokemon = {
  count: number;
  next: string;
  previous: null;
  results: PokemonType[];
};

export async function fetchPokemon(name: string): Promise<PokemonType> {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );
  if (!res.ok) throw new Error("Pokémon not found");
  return res.json();
}

const limit = 150;
export async function fetchAllPokemon(): Promise<AllPokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
  if (!res.ok) throw new Error("Pokémon not found");
  return res.json();
}
