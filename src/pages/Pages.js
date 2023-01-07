import React from "react";
// --- React-Router-Dom
import { Route, Routes } from "react-router-dom";
// --- Pages
import Home from "./Home/Home";
import ExerciseDetails from "./ExerciseDetails/ExerciseDetails";
const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
    </div>
  );
};

export default Pages;
