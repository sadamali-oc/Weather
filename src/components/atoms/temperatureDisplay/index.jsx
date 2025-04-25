import React from "react";
import Typography from "@mui/material/Typography";

const TemperatureDisplay = ({ temperature }) => {
  return (
    <div>
      <Typography variant="body1">Temperature: {temperature}°C</Typography>
      
    </div>
  );
};

export default TemperatureDisplay;
