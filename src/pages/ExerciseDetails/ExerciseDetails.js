import React, { useState, useEffect } from "react";
// --- React-Router-Dom
import { useParams } from "react-router-dom";
// --- Material-UI
import { Box } from "@mui/material";
// --- Utils
import { exerciseOptions, fetchData, youtubeOptions } from "../../utils/fetchData";
// --- Components
import ExercisesVideos from "../../components/ExercisesVideos/ExercisesVideos";
import SimilarExercises from "../../components/SimilarExercises/SimilarExercises";
import Details from "../../components/Details/Details";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
      // fetch exercises-details-data
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
      // --- fetch videos-data
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      // --- fetch target-muscle-data
      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);
      // --- fetch equipment-data
      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExercisesVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetails;
