import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Placements() {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Placements
          </Typography>
          <Typography variant="body1">
            Information about placement statistics, visiting companies, and
            the placement process will be displayed here.
          </Typography>
        </Container>
      </Box>
    </>
  );
}