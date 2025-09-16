"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { COLORS } from "@/styles/colors";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "@/utils/fetch";
import PokemonContainer from "./PokemonContainer";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", submittedName],
    queryFn: () => fetchPokemon(submittedName),
    enabled: !!submittedName,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedName(search.trim());
  };

  return (
    <Box
      sx={{
        backgroundColor: COLORS.darkPurple,
        borderRadius: "2rem",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <Image src="/logo.png" alt="logo" width={115} height={50} />
      <Typography sx={{ color: COLORS.darkestPurple }}>
        Search the first 150 Pokémon and mark your favorites!
      </Typography>
      <Box
        component="form"
        sx={{ display: "flex", "& > :not(style)": { m: 1, width: "20vw" } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Search for a Pokémon..."
          variant="outlined"
          sx={{
            backgroundColor: COLORS.white,
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Box>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <PokemonContainer searchResults={data} />
      )}
    </Box>
  );
};

export default SearchBox;
