import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputText = ({ value, onChange }) => {
  return (
    <div>
      <Box>
        <TextField
          label="Enter City"
          variant="outlined"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          sx={{ width: "50%" }}
        />
      </Box>
    </div>
  );
};

export default InputText;
