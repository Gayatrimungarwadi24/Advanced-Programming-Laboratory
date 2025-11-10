import React from "react";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";

// Import the image
import campusImg from "../assets/images/clg.jpg";

export default function About() {
  return (
    <>
      <Box sx={{ bgcolor: "secondary.main", py: 6 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom color="primary">
            About Us
          </Typography>
          <Paper sx={{ p: 4, mt: 3 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  Our Mission & Vision
                </Typography>
                <Typography variant="body1" paragraph>
                  Welcome to DY Patil College of Engineering & Technology! We
                  are a leading institution dedicated to providing quality
                  education and fostering innovation.
                </Typography>
                <Typography variant="body1" paragraph>
                  Our mission is to empower students with the knowledge and
                  skills they need to succeed in their careers. Our vision is
                  to be a center of excellence in technical education,
                  research, and innovation.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                    borderRadius: 2, 
                    boxShadow: 3, 
                  }}
                  alt="DY Patil College Building"
                  src={campusImg} 
                />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
}