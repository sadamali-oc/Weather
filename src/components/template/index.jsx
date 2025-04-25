import React from "react";
import { Box, Container, Typography } from "@mui/material";

const WeatherDashboardTemplate = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        minHeight: "100vh",
        backgroundColor: "#f5f5f5", 
        padding: "2rem 0",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "#e4eff2a7",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "2rem",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(45deg, #092043 30%, #19a1e6 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          Weather App
        </Typography>
        {children}
      </Container>
    </Box>
  );
};

export default WeatherDashboardTemplate;
