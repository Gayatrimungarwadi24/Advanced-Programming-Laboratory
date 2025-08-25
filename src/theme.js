// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2f4dd3", // Blue
    },
    secondary: {
      main: "#f5f5dc", // Beige
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h3: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
});

export default theme;
