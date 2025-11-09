import React from "react";
import { Box, Typography, Container, Paper, Grid } from "@mui/material";

export default function About() {
  return (
    <>
      {/* Use the light grey background from your theme */}
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
                  Welcome to DY Patil College of Engineering & Technology! We are
                  a leading institution dedicated to providing quality education
                  and fostering innovation. Our mission is to empower students with
                  the knowledge and skills they need to succeed in their careers.
                </Typography>
                <Typography variant="body1" paragraph>
                  Our vision is to be a center of excellence in technical education,
                  research, and innovation, producing graduates who are not only
                  proficient in their fields but also responsible citizens.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* You could add an image here */}
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                  alt="College building"
                  // You already have this image, let's reuse it!
                  src={require('../assets/images/campus.jpg').default} 
                />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
      {/* Footer is in App.js now */}
    </>
  );
}