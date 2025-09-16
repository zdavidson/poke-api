import { fetchAllPokemon, Pokemon } from "@/utils/fetch";
import { Box, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface PokemonContainerProps {
  searchResults: Pokemon | undefined;
}

const PokemonContainer = ({ searchResults }: PokemonContainerProps) => {
  const { data } = useQuery({
    queryKey: ["allPokemon"],
    queryFn: () => fetchAllPokemon(),
    enabled: searchResults === undefined,
  });
  return (
    <Box>
      {searchResults ? (
        <Button key={searchResults.name}>{searchResults.name}</Button>
      ) : (
        data?.results?.map((pokemon: Pokemon) => {
          return <Button key={pokemon.name}>{pokemon.name}</Button>;
        })
      )}

      {searchResults && (
        <Button key={searchResults.name}>{searchResults.name}</Button>
      )}
    </Box>
  );
};

export default PokemonContainer;
