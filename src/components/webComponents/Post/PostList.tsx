import { Grid2 } from "@mui/material";
import Post from "./Post";

const PostList = () => {
  return (
    <Grid2 container direction={"column"}>
      <Grid2>
        <Post />
      </Grid2>
      <Grid2>
        <Post />
      </Grid2>
      <Grid2>
        <Post />
      </Grid2>
    </Grid2>
  );
};

export default PostList;
