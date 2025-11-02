import React from "react";
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
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Application Submitted!"); // Placeholder action
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="application-form-title"
    >
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
          name="fullName"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Phone Number"
          name="phone"
          type="tel"
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="course-select-label">Course</InputLabel>
          <Select
            labelId="course-select-label"
            id="course"
            label="Course"
            defaultValue=""
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