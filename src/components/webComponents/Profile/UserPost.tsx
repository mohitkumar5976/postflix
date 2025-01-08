import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ImageComponent from "../utils/ImageComponent";
// import { AuthContext } from "../AuthContext";
import FavoriteIcon from "@mui/icons-material/Favorite";

function UserPost() {
  //   const { load, setLoad } = useContext(AuthContext);

  //   const handleDelete = async () => {
  //     await axios
  //       .delete(`/api/v1/posts/${data._id}`)
  //       .then(() => {
  //         {
  //           alert("Post Deleted");
  //           setLoad(!load);
  //         }
  //       })
  //       .catch((err) => console.log(err.message));
  //   };

  return (
    <>
      <div className="card">
        <div className="post-image h-36" style={{ cursor: "pointer" }}>
          <ImageComponent
            photo={"/assets/images/image1.jpg"}
            borderRadius={"0"}
          />
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xs">
            <FavoriteIcon fontSize="small" sx={{ color: "red" }} /> (
            {/* {data.likesAndDislike && data.likesAndDislike.length !== 0
                  ? data.likesAndDislike.length
                  : "0"} */}
            13 )
          </p>

          <button
            // onClick={() => handleDelete()}
            className="md:rounded-full hover:bg-red-500 hover:text-white"
          >
            <DeleteForeverIcon fontSize="small" />
          </button>
        </div>
      </div>
    </>
  );
}

export default UserPost;
