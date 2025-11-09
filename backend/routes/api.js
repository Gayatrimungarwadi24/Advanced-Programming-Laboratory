const express = require('express');
const router = express.Router();

// Import the models we just created
const Application = require('../models/Application');
const Course = require('../models/Course');

/**
 * @route   POST /api/applications
 * @desc    Submit a new admission application
 * @access  Public
 */
router.post('/applications', async (req, res) => {
  try {
    // Get the data from the request body
    const { fullName, email, phone, course } = req.body;

    // Simple validation
    if (!fullName || !email || !phone || !course) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Create a new Application document
    const newApplication = new Application({
      fullName,
      email,
      phone,
      course
    });

    // Save it to the database
    const savedApplication = await newApplication.save();

    // Send a "201 Created" response back to the React app
    res.status(201).json(savedApplication);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


/**
 * @route   GET /api/admissions/first-year
 * @desc    Get all first-year courses
 * @access  Public
 */
router.get('/admissions/first-year', async (req, res) => {
  try {
    // Find all documents in the 'courses' collection
    // where the 'type' is 'firstYear'
    const courses = await Course.find({ type: 'firstYear' }).sort({ name: 1 });

    // Send the list of courses back as JSON
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// You can add more routes here for recruiters, highlights, etc.
// e.g., router.get('/recruiters', ...)

module.exports = router;