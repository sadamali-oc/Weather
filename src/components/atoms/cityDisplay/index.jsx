import React from "react";
import Typography from "@mui/material/Typography";

const CityDisplay = ({ city }) => {
  return (
    <div>
      <Typography variant="h5">Weather in {city}</Typography>
    </div>
  );
};

export default CityDisplay;
