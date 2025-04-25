import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const BasicButton = ({ onClick, sx = {} }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        sx={{
          backgroundImage:
            "linear-gradient(45deg, #09204399 30%, #19a1e6f7 90%)",
          padding: "10px 20px",
          borderRadius: "5px",

          ...sx,
        }}
        onClick={onClick}
      >
        Get Weather
      </Button>
    </Stack>
  );
};

export default BasicButton;
