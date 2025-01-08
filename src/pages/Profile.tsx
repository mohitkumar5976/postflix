// import React, { useContext, useEffect, useState } from "react";
// // import UserPost from "./UserPost";
// import axios from "axios";

// import { useParams } from "react-router-dom";
import ImageComponent from "../components/webComponents/utils/ImageComponent";
// import { CircularProgress } from "@mui/material";
import BottomTabs from "../components/mobileComponents/BottomTabs/BottomTabs";
import { Box, Button, Stack } from "@mui/material";
import EditProfile from "../components/webComponents/Profile/EditProfile";
import PostTabs from "../components/webComponents/Profile/PostTabs";

const Profile = () => {
  //   const [userData, setUserData] = useState([]);
  //   const { followers, following } = useContext(AuthContext);

  //   const { id } = useParams();
  //   const loadposts = async () => {
  //     await axios
  //       .get(`/api/v1/users/${id}`)
  //       .then((res) => {
  //         setUserData(res.data.user);
  //       })
  //       .catch((err) => console.log(err.message));
  //   };

  //   useEffect(() => {
  //     loadposts();
  //   }, [id]);

  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col w-full">
        <div className="card py-2 sm:flex flex-row justify-center">
          <Stack spacing={1}>
            <Box className="flex  justify-around items-center  w-full">
              <Box className="relative w-20 h-20  sm:w-32 sm:h-32">
                <ImageComponent
                  photo={"/assets/images/image1.jpg"}
                  borderRadius={"50%"}
                />
                <EditProfile />
              </Box>

              <Box className="flex gap-4 text-center text-md">
                <div className="md:text-xl">
                  {/* {userData.posts && userData.posts.length !== 0
                    ? userData.posts.length
                    : "0"} */}
                  30<p>Posts</p>
                </div>
                <div className="md:text-xl">
                  {/* {followers && followers.length !== 0 ? followers.length : "0"} */}
                  150<p>followers</p>
                </div>
                <div className="md:text-xl">
                  {/* {following && following.length !== 0 ? following.length : "0"} */}
                  245<p>following</p>
                </div>
              </Box>
            </Box>
            <Box className="pl-4">
              <p className="text-md md:text-2xl  font-bold ">Mohit Kumar</p>

              <p className="text-sm w-full md:w-3/4">
                Passionate MERN Developer
              </p>
            </Box>
            <Box className="flex justify-center">
              <Button
                variant="contained"
                size="small"
                color="info"
                className="w-11/12"
              >
                Follow
              </Button>
            </Box>
          </Stack>
        </div>
        
      </div>
      <PostTabs />

      <BottomTabs />
    </>
  );
};

export default Profile;
