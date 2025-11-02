import React from "react";
import { Box, Typography, Button } from "@mui/material";
import campusImg from "../assets/images/campus.jpg"; 

export default function Banner() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${campusImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        py: 10,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Celebrating 40 Years of Excellence
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Approved by AICTE, New Delhi | Affiliated to Shivaji University, Kolhapur
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3, px: 4, py: 1 }}
      >
        Apply Now
      </Button>
    </Box>
  );
}
