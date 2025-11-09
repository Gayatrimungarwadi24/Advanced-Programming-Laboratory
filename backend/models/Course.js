const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This schema matches the table data in Admissions.js
const courseSchema = new Schema({
  name: { type: String, required: true },
  intake: { type: Number, required: true },
  // This 'type' field lets you query for 'firstYear', 'mtech', etc.
  type: { type: String, required: true, default: 'firstYear' }
});

module.exports = mongoose.model('Course', courseSchema);