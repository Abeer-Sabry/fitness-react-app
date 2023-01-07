import React from "react";
// --- React-Router-dom
import { Link } from "react-router-dom";
// --- MUI-UI
import { Stack, Button, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "12px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "12px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        sx={{
          ml: "21px",
          color: "#000",
          fontWeight: "bold",
          fontSize: "13px",
          textTransform: "capitalize",
          pb: "20px",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
