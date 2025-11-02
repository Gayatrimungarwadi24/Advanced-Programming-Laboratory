import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Footer from "../components/Footer";

export default function Departments() {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Departments
          </Typography>
          <Typography variant="body1">
            Information about the various departments in the college will be
            displayed here.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}