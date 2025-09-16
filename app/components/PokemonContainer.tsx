"use client";
import { fetchAllPokemon, PokemonType } from "@/utils/fetch";
import { Box, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Pokemon from "./Pokemon";
import { COLORS } from "@/styles/colors";

interface PokemonContainerProps {
  searchResults: PokemonType | undefined;
}

const PokemonContainer = ({ searchResults }: PokemonContainerProps) => {
  const [limit, setLimit] = useState(30);
  const { data } = useQuery({
    queryKey: ["allPokemon"],
    queryFn: () => fetchAllPokemon(),
    enabled: searchResults === undefined,
  });

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", margin: "1rem", width: "90vw" }}
    >
      {searchResults ? (
        <Pokemon key={searchResults.name} pokemon={searchResults} />
      ) : (
        <>
          {data?.results?.slice(0, limit).map((pokemon: PokemonType) => {
            return <Pokemon key={pokemon.name} pokemon={pokemon} />;
          })}
          <Button
            onClick={() => setLimit(limit + 30)}
            sx={{
              borderRadius: "3rem",
              backgroundColor: COLORS.darkBlue,
              color: COLORS.white,
              textTransform: "none",
              padding: "0.75rem",

              "&:hover": {
                opacity: 0.75,
              },
            }}
          >
            Load the next 30 Pokémon →
          </Button>
        </>
      )}
    </Box>
  );
};

export default PokemonContainer;
