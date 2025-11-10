import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import clgImg from "../assets/images/campus.jpg";
import canteenImg from "../assets/images/canteen.jpeg";
import collegeImg from "../assets/images/clg.jpg";
import intImg from "../assets/images/interaction.jpg";

// 2. Create an array of your images
const galleryItems = [
  {
    title: "Campus View",
    description: "A beautiful view of our college campus.",
    image: clgImg,
  },
  {
    title: "Cafeteria",
    description: "Our spacious and modern cafeteria.",
    image: canteenImg,
  },
  {
    title: "College Building",
    description: "The main building of DY Patil College of Engineering & Technology.",
    image: collegeImg,
  },
  {
    title: "Student Interaction",
    description: "Students engaging in collaborative learning.",
    image: intImg,
  }
];

export default function CampusLife() {
  return (
    <>
      <Box sx={{ py: 6, bgcolor: "secondary.main" }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom color="primary">
            Campus Life
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            Our campus is a vibrant community of thinkers, innovators, and leaders.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {galleryItems.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={6}> 
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 240, 
                    }}
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography>{item.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}