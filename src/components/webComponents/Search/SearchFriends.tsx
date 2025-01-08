
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

const SearchFriends = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%",paddingX:"10px" }}>
      <InputBase
        sx={{
          flex: 1,
          "& .MuiInputBase-input": {
            outline: "none",
            boxShadow: "none",
          },
          "& .MuiInputBase-input:focus": {
            outline: "none",
            boxShadow: "none",
          },
        }}
        placeholder="Search people..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchFriends;
