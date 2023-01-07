import React from "react";
// ---- Material-UI
import { Box, Stack, Typography } from "@mui/material";
// ---- Components
import HorizontalScrollbar from "../HorizontalScrollbar/HorizontalScrollbar";
import Loader from "../Loader/Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography
        variant="h3"
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        {" "}
        Similar <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      {/* --- Equipment part  */}
      <Typography
        variant="h3"
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        {" "}
        Similar <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
