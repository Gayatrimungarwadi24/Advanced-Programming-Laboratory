import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 4, mt: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">DY Patil College of Engineering & Technology</Typography>
          <Typography variant="body2">
            Empowering Students with Knowledge, Skills, and Innovation.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Quick Links</Typography>
          <Typography variant="body2">Home</Typography>
          <Typography variant="body2">About</Typography>
          <Typography variant="body2">Academics</Typography>
          <Typography variant="body2">Contact</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Connect With Us</Typography>
          <IconButton color="inherit"><Facebook /></IconButton>
          <IconButton color="inherit"><Instagram /></IconButton>
          <IconButton color="inherit"><LinkedIn /></IconButton>
          <IconButton color="inherit"><Twitter /></IconButton>
          <IconButton color="inherit"><YouTube /></IconButton>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        © {new Date().getFullYear()} DYPCET | All Rights Reserved
      </Typography>
    </Box>
  );
}
