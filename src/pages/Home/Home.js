import React, { useState } from "react";
import { Box } from "@mui/material";
// ---- Components
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SearchExercises from "../../components/SearchExercises/SearchExercises";
import Exercises from "../../components/Exercises/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  console.log("body", bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  );
};

export default Home;
