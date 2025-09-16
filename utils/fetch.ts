export type Pokemon = {
  name: string;
  sprites: { front_default: string };
};

export type AllPokemon = {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
};

export async function fetchPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );
  if (!res.ok) throw new Error("Pokémon not found");
  return res.json();
}

const limit = 30;
export async function fetchAllPokemon(): Promise<AllPokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
  if (!res.ok) throw new Error("Pokémon not found");
  return res.json();
}
