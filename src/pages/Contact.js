import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Contact information, including address, phone number, and email
            address, will be displayed here.
          </Typography>
        </Container>
      </Box>
    </>
  );
}