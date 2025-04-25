import React from "react";
import { Card } from "@mui/material";

const BasicCard = ({ children, sx = {} }, className) => {
  return (
    <div>
      <Card
        className={className}
        sx={{
          backgroundImage:
            "linear-gradient(45deg, #efeeef9e 30%, #19a2e68e 90%)",
          boxShadow: "0px 4px 6px rgba(112, 105, 105, 0.866)",
          borderRadius: 8,
          padding: 2,
          margin: "10px auto",
          width: "40%",
          minheight: "70vh",
          color: "#000",
          ...sx,
        }}
      >
        {children}
      </Card>
    </div>
  );
};

export default BasicCard;
