import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import SearchFriends from "../components/webComponents/Search/SearchFriends";
import SearchCard from "../components/webComponents/Search/SearchCard";
import Header from "../components/webComponents/Header/Header";
import BottomTabs from "../components/mobileComponents/BottomTabs/BottomTabs";

const UserSearch = () => {
  return (
    <Box>
      <Header />
      <Box className="bg-white sticky top-0 z-10">
        <SearchFriends />
      </Box>
      <Stack
        spacing={2}
        direction="column"
        className="hide-scrollbar px-1.5"
        sx={{ height: "100%" }}
        overflow={"auto"}
      >
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </Stack>
      <BottomTabs />
    </Box>
  );
};

export default UserSearch;
