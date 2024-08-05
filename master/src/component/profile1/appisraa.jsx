import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainprofile1 from "./Mainprofile1";
import ActivityDetails from "./ActivityDetails";

function Appi() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainprofile1 />} />
        <Route path="/activity-details" element={<ActivityDetails />} />
      </Routes>
    </Router>
  );
}

export default Appi;
