import { Grid2 } from "@mui/material";
import { theme } from "../../../../theme";
import { Link } from "react-router";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NotificationHeader = () => {
  return (
    <Grid2
      className="border border-1 bg-white shadow-sm h-12 sticky top-0 z-10 pt-1"
      container
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Grid2
        size={12}
        padding={1}
        sx={{
          display: { xs: "block", lg: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="flex items-center gap-x-2">
          <Link to="/">
            <ArrowBackIcon />
          </Link>
          <p className="text-md">Notifications</p>
        </div>
      </Grid2>
    </Grid2>
  );
};

export default NotificationHeader;
