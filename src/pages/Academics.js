import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Academics() {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Academics
          </Typography>
          <Typography variant="body1">
            Information about academic programs, curriculum, and other
            academic details will be displayed here.
          </Typography>
        </Container>
      </Box>
    </>
  );
}