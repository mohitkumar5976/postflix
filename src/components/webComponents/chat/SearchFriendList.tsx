import { Stack } from "@mui/material";
import SearchFriendCard from "./SearchFriendCard";
import { Link } from "react-router";

const SearchFriendList = () => {
  return (
    <Stack
      spacing={2}
      direction="column"
      className="hide-scrollbar px-1.5 pb-2"
      sx={{ height: "100%" }}
      overflow={"auto"}
    >
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
      <Link to={"/chatroom"}>
        <SearchFriendCard />
      </Link>
    </Stack>
  );
};

export default SearchFriendList;
