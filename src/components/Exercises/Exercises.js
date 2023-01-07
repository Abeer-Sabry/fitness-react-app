import React, { useEffect, useState } from "react";
// --- MUI-UI
import Pagination from "@mui/material/Pagination";
import { Stack, Box, Typography } from "@mui/material";
// --- Utils
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  //  Pagination-State
  const [currentPage, setCurrentPage] = useState(1);
  // --- Pagination
  const exercisesPerPage = 9;
  const indexOfLastExercises = currentPage * exercisesPerPage;
  const indexOfFirstExercises = indexOfLastExercises - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercises, indexOfLastExercises);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="430"
        sx={{ fontSize: { lg: "30px", xs: "30px" } }}
        mb="46px"
        mt="46px"
        ml="80px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        sx={{ gap: { lg: "107px", xs: "30px" } }}
        mb="46px"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
