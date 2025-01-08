import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Search from "./SearchFriends";
import SearchCard from "./SearchCard";
import { Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "0px solid #000",
  p: 1,
};

const SearchDialog = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
        <SearchOutlinedIcon />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-11/12 ">
          <Stack direction="column" spacing={0.5}>
            <Box className="flex justify-end">
              <CloseIcon onClick={handleClose} fontSize="small" />
            </Box>
            <Search />
            <Stack
              className="hide-scrollbar"
              spacing={2}
              direction="column"
              maxHeight={"300px"}
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
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchDialog;
