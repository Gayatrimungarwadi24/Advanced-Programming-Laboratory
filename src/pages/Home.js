// --- CHANGES START ---
import React, { useState } from "react"; // Import useState
// --- CHANGES END ---
import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import Recruiters from "../components/Recruiters";
// --- CHANGES START ---
import ApplicationForm from "../components/ApplicationForm"; // Import the form
// --- CHANGES END ---

export default function Home() {
  // --- CHANGES START ---
  // State to manage the modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // --- CHANGES END ---

  return (
    <>
      {/* --- CHANGES START --- */}
      <Banner onApplyClick={handleOpen} /> {/* Pass the handler to Banner */}
      {/* --- CHANGES END --- */}
      <Highlights />
      <Recruiters />
      {/* --- CHANGES START --- */}
      {/* Render the modal */}
      <ApplicationForm open={open} handleClose={handleClose} />
      {/* --- CHANGES END --- */}
    </>
  );
}