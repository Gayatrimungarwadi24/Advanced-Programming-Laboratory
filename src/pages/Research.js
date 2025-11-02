import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Footer from "../components/Footer";

export default function Research() {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Research
          </Typography>
          <Typography variant="body1">
            Information about research activities, publications, and projects
            will be displayed here.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}