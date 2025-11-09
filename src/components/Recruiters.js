import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import Slider from "react-slick";
// --- Import your logos ---
import tcsLogo from "../assets/images/recruiters/tcs.jpeg";
import infosysLogo from "../assets/images/recruiters/infosys.png";
import wiproLogo from "../assets/images/recruiters/wipro.png";
import techmLogo from "../assets/images/recruiters/techmahindra.png";
import ibmLogo from "../assets/images/recruiters/ibm.png";
import capgeminiLogo from "../assets/images/recruiters/capgemini.png"

const recruiters = [
  { name: "TCS", logo: tcsLogo },
  { name: "Infosys", logo: infosysLogo },
  { name: "Wipro", logo: wiproLogo },
  { name: "Tech Mahindra", logo: techmLogo },
  { name: "IBM", logo: ibmLogo },
  { name: "Capgemini", logo: capgeminiLogo },
];

export default function Recruiters() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5, // Show 5 logos at a time
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear", // This makes it a smooth, continuous scroll
    arrows: false,
    responsive: [ // Makes it look good on mobile
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <Box sx={{ py: 6, textAlign: "center" }}>
      <Container>
        <Typography variant="h4" sx={{ mb: 4 }} color="primary">
          Our Recruiters
        </Typography>
        <Slider {...settings}>
          {recruiters.map((r, i) => (
            <Box key={i} sx={{ p: 2 }}>
              {r.logo ? (
                <Box
                  component="img"
                  src={r.logo}
                  alt={r.name}
                  sx={{
                    width: '100px',
                    height: '50px',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)', // Makes logos look uniform
                    opacity: 0.7,
                  }}
                />
              ) : (
                // Fallback to text if no logo is provided
                <Paper sx={{ p: 2, fontWeight: 600, border: '1px solid #ddd' }}>
                  {r.name}
                </Paper>
              )}
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
