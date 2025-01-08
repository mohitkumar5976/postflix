import { Button, Typography } from "@mui/material";
import { useState } from "react";

const FollowButton = () => {
  const [follow, setFollow] = useState<boolean>(false);
  const handleFollow = () => {
    setFollow(!follow);
  };
  return (
    <Button
      variant="contained"
      color={follow ? "inherit" : "info"}
      size="small"
      onClick={handleFollow}
    >
      <Typography fontSize={12}>Follow</Typography>
    </Button>
  );
};

export default FollowButton;
