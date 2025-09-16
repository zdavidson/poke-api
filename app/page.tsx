import SearchBox from "./components/SearchBox";
import { Box } from "@mui/material";

export default function PokeApi() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SearchBox />
    </Box>
  );
}
