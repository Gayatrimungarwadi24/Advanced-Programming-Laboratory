const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This schema matches the fields in your ApplicationForm.js
const applicationSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  course: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

// This creates the 'applications' collection in your 'dypcet' database
module.exports = mongoose.model('Application', applicationSchema);