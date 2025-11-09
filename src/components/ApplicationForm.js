import React, { useState } from "react"; // Import useState
import {
  Box,
  Typography,
  Modal,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

// Style for the modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ApplicationForm({ open, handleClose }) {
  // --- CHANGES START ---

  // Add state to manage all form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: ''
  });

  const { fullName, email, phone, course } = formData;

  // Generic handler for text fields
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  // Specific handler for the Select component
  const handleCourseChange = (e) => {
    setFormData({ ...formData, course: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the data to your new backend endpoint
      const res = await fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the state data
      });

      if (res.ok) {
        alert("Application Submitted Successfully!");
        // Clear form after successful submission
        setFormData({ fullName: '', email: '', phone: '', course: '' });
        handleClose(); // Close modal
      } else {
        // Handle errors from the server
        const errData = await res.json();
        alert(`Error: ${errData.msg || 'Could not submit application'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Server error. Please try again later.');
    }
  };

  // --- CHANGES END ---

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="application-form-title"
    >
      {/* Use the new handleSubmit */}
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Typography id="application-form-title" variant="h6" component="h2">
          Admission Application Form
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="fullName"
          label="Full Name"
          name="fullName" // Add name attribute
          value={fullName} // Control the component
          onChange={onChange} // Add onChange handler
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email" // Add name attribute
          type="email"
          value={email} // Control the component
          onChange={onChange} // Add onChange handler
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Phone Number"
          name="phone" // Add name attribute
          type="tel"
          value={phone} // Control the component
          onChange={onChange} // Add onChange handler
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="course-select-label">Course</InputLabel>
          <Select
            labelId="course-select-label"
            id="course"
            name="course" // Add name attribute
            label="Course"
            value={course} // Control the component
            onChange={handleCourseChange} // Use the course handler
          >
            <MenuItem value={"cs"}>Computer Science and Engineering</MenuItem>
            <MenuItem value={"mech"}>Mechanical Engineering</MenuItem>
            <MenuItem value={"civil"}>Civil Engineering</MenuItem>
            <MenuItem value={"chem"}>Chemical Engineering</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Apply Now
        </Button>
      </Box>
    </Modal>
  );
}