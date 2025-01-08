import Header from "../components/webComponents/Header/Header";
import Box from "@mui/material/Box";
import SearchFollowing from "../components/webComponents/chat/SearchFollowing";
import SearchFriendList from "../components/webComponents/chat/SearchFriendList";
const Chat = () => {
  return (
    <>
      <Box>
        <Header />
        <Box className="bg-white sticky top-0 z-10">
          <SearchFollowing />
        </Box>
        <SearchFriendList />
      </Box>
    </>
  );
};

export default Chat;
