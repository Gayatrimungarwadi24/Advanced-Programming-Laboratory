import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Footer from "../components/Footer";

export default function CampusLife() {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Campus Life
          </Typography>
          <Typography variant="body1">
            Information about student clubs, events, and other campus
            activities will be displayed here.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}