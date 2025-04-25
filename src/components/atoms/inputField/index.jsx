import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputField = ({ value, onChange }) => {
  return (
    <div>
      <Box>
        <TextField
          label="Enter City"
          variant="outlined"
          value={value}
          onChange={onChange}
          sx={{
            backgroundColor: "#ebebf0",
            borderRadius: 2,
            margin: "1px auto",
            width: "100%",
            height: "50px",
            
            justifyContent: "center",
            
          }}
        />
      </Box>
    </div>
  );
};

export default InputField;
