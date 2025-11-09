import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import Slider from "react-slick"; // Import Slider
import campusImg from "../assets/images/campus.jpg"; 
import campusImg2 from "../assets/images/corousel/images1.jpeg";
import campusImg3 from "../assets/images/corousel/images2.jpeg";
import
campusImg4 from "../assets/images/corousel/images3.jpeg";
import campusImg5 from "../assets/images/corousel/lab.jpg";

const slides = [
  {
    image: campusImg,
    title: "Celebrating 40 Years of Excellence",
    subtitle: "Approved by AICTE | Affiliated to Shivaji University"
  },
  {
    image: campusImg2,
    title: "State-of-the-Art Infrastructure",
    subtitle: "Learn in a world-class environment"
  },
  {
    image: campusImg3,
    title: "Top Placements",
    subtitle: "Our graduates work at top-tier companies"
  },
  {
    image: campusImg4,
    title: "Experienced Faculty",
    subtitle: "Learn from industry experts"
  },
  {
    image: campusImg5,
    title: "Cutting-Edge Labs",
    subtitle: "Hands-on learning with modern equipment"}
];


export default function Banner({ onApplyClick }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Makes it slide automatically
    arrows: false // Hides the next/prev arrows
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Paper key={index} elevation={0} square>
            <Box
              sx={{
                position: 'relative',
                height: '60vh', // Give the carousel a good height
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                textAlign: "center",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // Add a dark overlay for text readability
                '::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1, p: 2 }}>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {slide.title}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {slide.subtitle}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, px: 4, py: 1 }}
                  onClick={onApplyClick}
                >
                  Apply Now
                </Button>
              </Box>
            </Box>
          </Paper>
        ))}
      </Slider>
    </Box>
  );
}