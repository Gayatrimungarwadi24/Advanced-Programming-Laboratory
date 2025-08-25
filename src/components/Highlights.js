import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";

const highlights = [
  { value: "40+", label: "Years of Excellence" },
  { value: "5000+", label: "Students" },
  { value: "200+", label: "Faculty Members" },
  { value: "100+", label: "Courses Offered" },
];

export default function Highlights() {
  return (
    <Box sx={{ py: 6, bgcolor: "secondary.main" }}>
      <Grid container spacing={4} justifyContent="center">
        {highlights.map((h, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h5" color="primary">
                {h.value}
              </Typography>
              <Typography variant="body1">{h.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
