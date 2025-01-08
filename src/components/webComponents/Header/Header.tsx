// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import Search from "./Search/Search";
// import { AuthContext } from "../../AuthContext";
// import NavLinks from "./NavbarLinks/NavLinks";
// import { Box, Grid, Stack } from "@mui/material";
// import { theme } from "../../../theme";
// import MenuDrawer from "../../MobileComponents/MenuDrawer";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import { Badge, Grid2, Stack } from "@mui/material";
import { theme } from "../../../../theme";
import { Link } from "react-router";

const Header = () => {
  //   const { userInfo, handleChange } = useContext(AuthContext);
  //   const [visible, setVisible] = useState(false);
  return (
    <>
      <Grid2
        className="border border-1 bg-white shadow-sm h-12 sticky top-0 z-10 pt-1"
        container
        sx={{
          width: "100%",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Grid2
          size={6}
          paddingLeft={1}
          sx={{
            display: { xs: "block", lg: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/" className="heading link">
            Postgram
          </Link>
        </Grid2>

        <Grid2
          size={6}
          paddingRight={2}
          className="flex justify-end items-center "
        >
          <Stack direction={"row"} spacing={2}>
            <Link to={"/notification"}>
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon color="action" />
              </Badge>
            </Link>
            <Link to={"/chat"}>
              <MessageIcon color="action" />
            </Link>
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Header;
