import React, { useState } from "react";
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

// Data for the 'First Year' courses table
const firstYearCourses = [
  { name: "Chemical Engineering", intake: 60 },
  { name: "Civil Engineering", intake: 120 },
  { name: "Computer Science and Engineering", intake: 360 },
  { name: "Computer Science and Engineering (Artificial Intelligence and Machine Learning)", intake: 180 },
  { name: "Computer Science and Engineering (Data Science)", intake: 180 },
  { name: "Electronics and Telecommunication Engineering", intake: 120 },
  { name: "Mechanical Engineering", intake: 120 },
];

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
                      {firstYearCourses.map((row, index) => (
                        <TableRow key={row.name}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell align="right">{row.intake}</TableCell>
                        </TableRow>
                      ))}
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