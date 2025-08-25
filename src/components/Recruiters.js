import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const recruiters = ["TCS", "Infosys", "Wipro", "Tech Mahindra", "IBM", "Capgemini"];

export default function Recruiters() {
  return (
    <Box sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 4 }} color="primary">
        Our Recruiters
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {recruiters.map((r, i) => (
          <Grid item xs={6} sm={4} md={2} key={i}>
            <Paper sx={{ p: 2, fontWeight: 600 }}>{r}</Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
