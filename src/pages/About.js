import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Box sx={{ bgcolor: "secondary.main", py: 6 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            About Us
          </Typography>
          <Paper sx={{ p: 4 }}>
            <Typography variant="body1">
              Welcome to DY Patil College of Engineering & Technology! We are
              a leading institution dedicated to providing quality education
              and fostering innovation. Our mission is to empower students with
              the knowledge and skills they need to succeed in their careers.
              (You can add more details about the college history, mission,
              vision, etc. here)
            </Typography>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
}