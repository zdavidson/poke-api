import { Button, SvgIcon } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { COLORS } from "@/styles/colors";
import { usePokemonFavorites } from "@/state";
import { PokemonType } from "@/utils/fetch";

interface PokemonProps {
  pokemon: PokemonType;
}

const Pokemon = ({ pokemon }: PokemonProps) => {
  const { toggleFavorite, isFavorite } = usePokemonFavorites();

  return (
    <Button
      onClick={() => toggleFavorite(pokemon)}
      sx={{
        backgroundColor: COLORS.mediumPurple,
        borderRadius: "1rem",
        color: COLORS.darkGrey,
        margin: "0.5rem",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: COLORS.darkPurple,
        },
      }}
    >
      {pokemon.name}
      <SvgIcon
        component={FavoriteIcon}
        sx={{
          color: isFavorite(pokemon.name) ? COLORS.red : COLORS.lightRed,
          marginLeft: "0.5rem",
        }}
      />
    </Button>
  );
};

export default Pokemon;
