import React, { useState, useEffect } from "react"; // Import useEffect
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Footer from "../components/Footer";

// Data for the sidebar navigation
const sidebarLinks = [
  "Admissions",
  "Fee Structure",
  "Contact Us",
  "Bus Facility",
  "Admission Process",
  "Documents required for Admission",
  "Scholarships",
  "Information Brochure",
];

// --- CHANGES START ---
// REMOVED the hard-coded 'firstYearCourses' array
// --- CHANGES END ---

// A helper component to manage the content of each tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


export default function Admissions() {
  const [value, setValue] = useState(0);

  // --- CHANGES START ---
  // Add state to hold the courses fetched from the backend
  const [firstYearCourses, setFirstYearCourses] = useState([]);

  // This 'useEffect' hook runs once when the component first loads
  useEffect(() => {
    // Define an async function to fetch data
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/admissions/first-year');
        const data = await res.json();
        setFirstYearCourses(data); // Put the fetched data into state
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    fetchCourses(); // Call the function
  }, []); // The empty array [] means this effect runs only once

  // --- CHANGES END ---

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" gutterBottom color="primary">
          Admissions
        </Typography>
        <Grid container spacing={4}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper elevation={2}>
              <List>
                {sidebarLinks.map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={9}>
            <Paper elevation={2}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange} aria-label="Admissions tabs">
                  <Tab label="First Year" />
                  <Tab label="Direct Second Year" />
                  <Tab label="M. Tech" />
                  <Tab label="Architecture" />
                  <Tab label="DSY Working Professional" />
                  <Tab label="M. Tech Working Professional" />
                </Tabs>
              </Box>

              {/* Content for First Year Tab */}
              <TabPanel value={value} index={0}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Institute Code - 06250
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Sr. No.</TableCell>
                        <TableCell>Name of Courses</TableCell>
                        <TableCell align="right">Sanctioned Intake</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* --- CHANGES START --- */}
                      {/* Map over the 'firstYearCourses' state variable */}
                      {firstYearCourses.map((row, index) => (
                        // Use row._id from MongoDB as the key
                        <TableRow key={row._id}> 
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell align="right">{row.intake}</TableCell>
                        </TableRow>
                      ))}
                      {/* --- CHANGES END --- */}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>

              {/* Placeholder for other tabs */}
              <TabPanel value={value} index={1}>Direct Second Year Information</TabPanel>
              <TabPanel value={value} index={2}>M. Tech Information</TabPanel>
              <TabPanel value={value} index={3}>Architecture Information</TabPanel>
              <TabPanel value={value} index={4}>DSY Working Professional Information</TabPanel>
              <TabPanel value={value} index={5}>M. Tech Working Professional Information</TabPanel>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}