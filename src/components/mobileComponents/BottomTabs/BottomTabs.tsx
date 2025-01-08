import { Box, Grid2 } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useState } from "react";
import { theme } from "../../../../theme";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router";
import { useAppContext } from "../../../context/appContext";

const BottomTabs = () => {
  const { active, setActive } = useAppContext();
  const [tabIndex, setTabIndex] = useState<number[]>([0, 1, 2, 3]);
  const handleActiveTab = (value: number): void => {
    setTabIndex(tabIndex);
    setActive(value);
    localStorage.removeItem("tabIndex");
    localStorage.setItem("tabIndex", JSON.stringify(value));
  };
  return (
    <Box className="fixed bottom-0 flex justify-center w-full">
      <Grid2 container className="bg-white border border-1 w-full">
        <Grid2
          size={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => handleActiveTab(0)}
          paddingY={1.5}
          sx={{
            backgroundColor:
              tabIndex[0] === active
                ? theme.palette.hover.main
                : theme.palette.primary.main,
            color:
              tabIndex[0] === active
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
          }}
        >
          <Link to="/">
            <HomeOutlinedIcon />
          </Link>
        </Grid2>
        <Grid2
          size={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingY={1.5}
          onClick={() => handleActiveTab(1)}
          sx={{
            backgroundColor:
              tabIndex[1] === active
                ? theme.palette.hover.main
                : theme.palette.primary.main,
            color:
              tabIndex[1] === active
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
          }}
        >
          <Link to={"/search"}>
            <SearchOutlinedIcon />
          </Link>
        </Grid2>
        <Grid2
          size={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingY={1.5}
          onClick={() => handleActiveTab(2)}
          sx={{
            backgroundColor:
              tabIndex[2] === active
                ? theme.palette.hover.main
                : theme.palette.primary.main,
            color:
              tabIndex[2] === active
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
          }}
        >
          <Link to="/reels">
            <VideocamOutlinedIcon />
          </Link>
        </Grid2>
        <Grid2
          size={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingY={1.5}
          onClick={() => handleActiveTab(3)}
          sx={{
            backgroundColor:
              tabIndex[3] === active
                ? theme.palette.hover.main
                : theme.palette.primary.main,
            color:
              tabIndex[3] === active
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
          }}
        >
          <Link to={"/profile"}>
            <PersonOutlineOutlinedIcon />
          </Link>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default BottomTabs;
