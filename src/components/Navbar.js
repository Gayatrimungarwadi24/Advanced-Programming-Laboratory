import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../assets/images/logo.png"; // <-- Place your logo in assets/images folder

export default function Navbar() {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Academics", path: "/academics" },
    { label: "Departments", path: "/departments" },
    { label: "Research", path: "/research" },
    { label: "Admissions", path: "/admissions" },
    { label: "Campus Life", path: "/campus-life" },
    { label: "Placements", path: "/placements" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo and College Name */}
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <img
            src={logo}
            alt="College Logo"
            style={{ width: 40, height: 40, marginRight: 10 }}
          />
          <Typography variant="h6">
            DY Patil College of Engineering & Technology
          </Typography>
        </Box>

        {/* Menu Items */}
        <Box>
          {menuItems.map((item, i) => (
            <Button key={i} color="inherit" href={item.path}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
