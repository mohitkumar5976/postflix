import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditProfileForm from "./EditProfileForm";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
};

const EditProfile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        onClick={handleOpen}
        className="absolute bottom-1.5
       flex items-center justify-center right-1.5  p-1 rounded-full bg-blue-500 text-white w-5 h-5"
      >
        <EditOutlinedIcon sx={{ width: "100%", height: "100%" }} />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-full overflow-y-auto h-screen">
          <Box className="float-end m-2 bg-red-500 w-6  h-6 flex items-center justify-center  rounded-full text-white">
            <CloseIcon onClick={handleClose} fontSize="small" />
          </Box>
          <EditProfileForm />
        </Box>
      </Modal>
    </>
  );
};

export default EditProfile;
